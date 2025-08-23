import 'dotenv/config'; // This line explicitly loads your .env.local file
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(request, response) {
  // ... the rest of your code is exactly the same
  
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

    const cacheKey = `price:${ticker}`;
    const cachedData = await redis.get(cacheKey);

    if (cachedData) {
      console.log(`CACHE HIT for ${ticker}`);
      return response.status(200).json({ price: cachedData, source: 'cache' });
    }

    console.log(`CACHE MISS for ${ticker}. Fetching from Finnhub.`);
    const finnhubApiKey = process.env.FINNHUB_API_KEY;
    const finnhubUrl = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhubApiKey}`;
    
    const finnhubResponse = await fetch(finnhubUrl);
    
    if (!finnhubResponse.ok) {
      throw new Error(`Finnhub API request failed with status ${finnhubResponse.status}`);
    }

    const data = await finnhubResponse.json();
    const currentPrice = data.c;

    if (currentPrice === undefined || currentPrice === null || currentPrice === 0) {
        return response.status(404).json({ error: 'Data not found for the given symbol' });
    }
    
    await redis.set(cacheKey, currentPrice, { ex: 60 });

    return response.status(200).json({ price: currentPrice, source: 'api' });

  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ error: 'An internal server error occurred' });
  }
}