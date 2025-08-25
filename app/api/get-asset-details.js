// api/get-asset-details.js
import 'dotenv/config';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const finnhubApiKey = process.env.FINNHUB_API_KEY;
const polygonApiKey = process.env.POLYGON_API_KEY;

// Helper to fetch and handle errors gracefully
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        return response.json();
    } catch (error) {
        console.error(`Fetch error for ${url}:`, error);
        return null;
    }
};

// Helper function to format date to YYYY-MM-DD
const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};

export default async function handler(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    try {
        const ticker = request.query.ticker?.toUpperCase();
        if (!ticker) {
            return response.status(400).json({ error: 'Ticker symbol is required' });
        }

        const cacheKey = `details-v3:${ticker}`;
        const cachedData = await redis.get(cacheKey);

        if (cachedData) {
            return response.status(200).json({ ...cachedData, source: 'cache' });
        }

        const today = new Date();
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(today.getDate() - 90);

        const to = formatDate(today);
        const from = formatDate(ninetyDaysAgo);
        
        const profileUrl = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${finnhubApiKey}`;
        const historyUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${from}/${to}?apiKey=${polygonApiKey}`;
        
        const [profileData, historyData] = await Promise.all([
            fetchData(profileUrl),
            fetchData(historyUrl)
        ]);

        const result = {
            marketCap: profileData?.marketCapitalization,
            peRatio: profileData?.peRatio,
            chart: historyData && historyData.results
                ? historyData.results.map(agg => agg.c)
                : []
        };

        // Cache the result for 1 hour (3600 seconds)
        await redis.set(cacheKey, result, { ex: 3600 });

        return response.status(200).json({ ...result, source: 'api' });

    } catch (error) {
        console.error('Error in get-asset-details:', error.message);
        return response.status(500).json({ error: 'An internal server error occurred' });
    }
}