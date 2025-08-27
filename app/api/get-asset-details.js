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
    response.setHeader('Access-Control-Allow-Methods', 'GET', 'OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    try {
        const ticker = request.query.ticker?.toUpperCase();
        if (!ticker) {
            return response.status(400).json({ error: 'Ticker symbol is required' });
        }

        const cacheKey = `details-v18-resilient-volume:${ticker}`;
        const cachedData = await redis.get(cacheKey);
        if (cachedData) {
            return response.status(200).json({ ...cachedData, source: 'cache' });
        }

        const today = new Date();
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(today.getDate() - 90);

        const dailyUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${formatDate(ninetyDaysAgo)}/${formatDate(today)}?apiKey=${polygonApiKey}`;
        const prevDayUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?apiKey=${polygonApiKey}`;
        const profileUrl = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${finnhubApiKey}`;
        const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhubApiKey}`;
        const metricsUrl = `https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=all&token=${finnhubApiKey}`;

        const [dailyData, prevDayData, profileData, quoteData, metricsData] = await Promise.all([
            fetchData(dailyUrl),
            fetchData(prevDayUrl),
            fetchData(profileUrl),
            fetchData(quoteUrl),
            fetchData(metricsUrl)
        ]);
        
        const prevDayResults = prevDayData?.results?.[0];

        let chartPoints = [], chartLabels = [], lastPrice = null;
        if (dailyData?.results?.length > 0) {
            chartPoints = dailyData.results.map(agg => agg.c);
            chartLabels = dailyData.results.map(agg => new Date(agg.t).toLocaleDateString([], { month: 'short', day: 'numeric' }));
        }

        let marketStatus = 'closed';
        if (quoteData?.t) {
            const minutesSinceUpdate = (Date.now() - (quoteData.t * 1000)) / 60000;
            if (minutesSinceUpdate < 20) marketStatus = 'open';
        }
        
        // --- THE FIX: Create a resilient fallback system for volume ---
        let volume = 0;
        if (quoteData?.v > 0) {
            volume = quoteData.v; // 1. Best source: Live quote
        } else if (prevDayResults?.v > 0) {
            volume = prevDayResults.v; // 2. Second best: Previous day's close
        } else if (dailyData?.results?.length > 0) {
            volume = dailyData.results[dailyData.results.length - 1].v; // 3. Last resort: Last day in historical data
        }

        const result = {
            lastPrice: (marketStatus === 'open' && quoteData?.c > 0) ? quoteData.c : prevDayResults?.c,
            percentChange: quoteData?.dp || 0,
            dayHigh: prevDayResults?.h,
            dayLow: prevDayResults?.l,
            dayChange: (marketStatus === 'open' && quoteData?.d) ? quoteData.d : (prevDayResults?.c - prevDayResults?.o),
            volume: volume, // Use the resilient volume variable
            fiftyTwoWeekHigh: metricsData?.metric?.['52WeekHigh'],
            fiftyTwoWeekLow: metricsData?.metric?.['52WeekLow'],
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