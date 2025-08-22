// supabase/functions/get-stock-price/index.ts

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { createClient as createRedisClient } from 'https://esm.sh/@upstash/redis@1.31.6'
import { corsHeaders } from '../_shared/cors.ts'

// Initialize the Redis client.
// Deno.env.get() is how you access the secrets from your .env.local file.
const redis = createRedisClient({
  url: Deno.env.get('UPSTASH_REDIS_URL')!,
  token: Deno.env.get('UPSTASH_REDIS_TOKEN')!,
})

Deno.serve(async (req) => {
  // This is needed for browser-based calls to your function
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const ticker = url.searchParams.get('ticker')?.toUpperCase() // Get ticker from "?ticker=AAPL"

    if (!ticker) {
      return new Response(JSON.stringify({ error: 'Ticker symbol is required' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }

    const cacheKey = `price:${ticker}` // A unique key for this ticker, e.g., "price:AAPL"

    // 1. Check the Upstash Redis Cache First
    const cachedData = await redis.get(cacheKey)

    if (cachedData) {
      console.log(`CACHE HIT for ${ticker}`)
      return new Response(JSON.stringify({ price: cachedData, source: 'cache' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      })
    }

    // 2. If Not in Cache (Cache Miss), Fetch from Finnhub
    console.log(`CACHE MISS for ${ticker}. Fetching from Finnhub.`)
    const finnhubApiKey = Deno.env.get('FINNHUB_API_KEY')
    const finnhubUrl = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhubApiKey}`

    const finnhubResponse = await fetch(finnhubUrl)
    if (!finnhubResponse.ok) {
      throw new Error(`Finnhub API request failed with status ${finnhubResponse.status}`)
    }

    const data = await finnhubResponse.json()
    // The 'c' property holds the current price in the Finnhub quote response
    const currentPrice = data.c 

    if (currentPrice === undefined || currentPrice === null) {
      throw new Error('Invalid data structure from Finnhub API')
    }

    // 3. Store the New Data in the Cache with a Time-to-Live (TTL) of 60 seconds
    await redis.set(cacheKey, currentPrice, { ex: 60 })

    // 4. Return the Fresh Data to the User
    return new Response(JSON.stringify({ price: currentPrice, source: 'api' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error(error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})