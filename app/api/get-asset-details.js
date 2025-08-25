import 'dotenv/config';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const finnhubApiKey = process.env.FINNHUB_API_KEY;
const polygonApiKey = process.env.POLYGON_API_KEY;

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

        const cacheKey = `details-v13-resilient:${ticker}`;
        const cachedData = await redis.get(cacheKey);
        if (cachedData) {
            return response.status(200).json({ ...cachedData, source: 'cache' });
        }

        const today = new Date();
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(today.getDate() - 90);

        const dailyUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${formatDate(ninetyDaysAgo)}/${formatDate(today)}?apiKey=${polygonApiKey}`;
        const profileUrl = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${finnhubApiKey}`;
        const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhubApiKey}`;

        const [dailyData, profileData, quoteData] = await Promise.all([
            fetchData(dailyUrl),
            fetchData(profileUrl),
            fetchData(quoteUrl)
        ]);

        let chartPoints = [];
        let chartLabels = [];
        let lastPrice = null;

        // **THE FIX: Safely access data and get the last price**
        if (dailyData && Array.isArray(dailyData.results) && dailyData.results.length > 0) {
            const results = dailyData.results;
            chartPoints = results.map(agg => agg.c);
            chartLabels = results.map(agg => new Date(agg.t).toLocaleDateString([], { month: 'short', day: 'numeric' }));
            lastPrice = results[results.length - 1].c;
        }

        // Determine market status safely
        let marketStatus = 'closed';
        if (quoteData && quoteData.t) {
            const minutesSinceUpdate = (Date.now() - (quoteData.t * 1000)) / 60000;
            if (minutesSinceUpdate < 20) {
                marketStatus = 'open';
            }
        }
        
        // Use the live price only if the market is open and the price is valid
        const displayPrice = (marketStatus === 'open' && quoteData?.c > 0) ? quoteData.c : lastPrice;

        const result = {
            lastPrice: displayPrice,
            marketStatus: marketStatus,
            volume: quoteData?.v || 0, // Fallback to 0 if quoteData is missing
            marketCap: profileData?.marketCapitalization,
            peRatio: profileData?.peRatio,
            chart: chartPoints,
            labels: chartLabels
        };

        await redis.set(cacheKey, result, { ex: 3600 });
        return response.status(200).json({ ...result, source: 'api' });

    } catch (error) {
        console.error(`Critical error for ${request.query.ticker}:`, error.message);
        return response.status(500).json({ error: 'An internal server error occurred' });
    }
}