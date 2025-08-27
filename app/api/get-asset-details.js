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

        const cacheKey = `details-v16-metrics-final:${ticker}`;
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
        const metricsUrl = `https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=all&token=${finnhubApiKey}`;


        const [dailyData, profileData, quoteData, metricsData] = await Promise.all([
            fetchData(dailyUrl),
            fetchData(profileUrl),
            fetchData(quoteUrl),
            fetchData(metricsUrl)
        ]);

        let chartPoints = [], chartLabels = [], lastPrice = null, volume = quoteData?.v || 0;

        if (dailyData?.results?.length > 0) {
            const results = dailyData.results;
            chartPoints = results.map(agg => agg.c);
            chartLabels = results.map(agg => new Date(agg.t).toLocaleDateString([], { month: 'short', day: 'numeric' }));
            lastPrice = results[results.length - 1].c;
            if (volume === 0) volume = results[results.length - 1].v;
        }

        let marketStatus = 'closed';
        if (quoteData?.t) {
            const minutesSinceUpdate = (Date.now() - (quoteData.t * 1000)) / 60000;
            if (minutesSinceUpdate < 20) marketStatus = 'open';
        }
        
        // --- Finalize Data, using the new metrics endpoint for P/E Ratio ---
       const result = {
            lastPrice: (marketStatus === 'open' && quoteData?.c > 0) ? quoteData.c : lastPrice,
            percentChange: quoteData?.dp || 0,
            volume: volume,
            marketCap: profileData?.marketCapitalization,
            peRatio: metricsData?.metric?.peNormalizedAnnual,
            marketStatus: marketStatus,
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