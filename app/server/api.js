import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { Redis } from '@upstash/redis';

// This safely loads your .env file variables into process.env
dotenv.config({ path: path.resolve(process.cwd(), './.env') });

// Initialize the Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const handleAssetSearch = async (req, res) => {
    const query = new URL(req.url, `http://${req.headers.host}`).searchParams.get('query')?.toUpperCase();
    const type = new URL(req.url, `http://${req.headers.host}`).searchParams.get('type');

    if (!query) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Search query is required' }));
        return;
    }

    // Create a unique cache key for this search query
    const cacheKey = `search:fmp:${query}:${type}`;

    try {
        // Check the cache first
        const cachedResults = await redis.get(cacheKey);

        if (cachedResults) {
            // If results are found in the cache, return them immediately
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(cachedResults));
            return;
        }

        // If not found in cache, proceed to call the external FMP API
        const apiKey = process.env.VITE_FMP_KEY;
        if (!apiKey) {
            console.error("FMP API key is missing.");
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Server configuration error: Missing API key.' }));
            return;
        }

        const url = `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&apikey=${apiKey}`;

        const response = await axios.get(url);
        const data = response.data;

        let formattedResults = [];
        if (Array.isArray(data)) {
            formattedResults = data.map(asset => ({
                symbol: asset.symbol,
                name: asset.name,
                // FMP's general search can return various types, so we add a 'type' field for filtering
                type: asset.exchangeShortName === 'NASDAQ' || asset.exchangeShortName === 'NYSE' ? 'Equity' : 'Other',
                region: asset.stockExchange
            }));

            // Filter the results on the server-side based on the user's selection
            if (type === 'stock') {
                formattedResults = formattedResults.filter(asset => asset.type === 'Equity');
            }
        }

        // Save the new results to the cache with a 12-hour expiration
        await redis.set(cacheKey, JSON.stringify(formattedResults), {
            ex: 43200, // 12 hours
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(formattedResults));

    } catch (error) {
        console.error('API Error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Failed to fetch asset data.' }));
    }
};

export const apiMiddleware = (req, res, next) => {
    if (req.url.startsWith('/api/search-assets')) {
        return handleAssetSearch(req, res);
    }
    next();
};