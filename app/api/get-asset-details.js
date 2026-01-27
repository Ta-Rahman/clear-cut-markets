import 'dotenv/config';
import { Redis } from '@upstash/redis';

/**
 * Asset Details API - Fixed for rate limiting
 */

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const finnhubApiKey = process.env.FINNHUB_API_KEY;
const polygonApiKey = process.env.POLYGON_API_KEY;

const CRYPTO_ID_MAP = {
    'BTC': 'bitcoin', 'ETH': 'ethereum', 'BNB': 'binancecoin', 'XRP': 'ripple',
    'ADA': 'cardano', 'SOL': 'solana', 'DOGE': 'dogecoin', 'DOT': 'polkadot',
    'MATIC': 'matic-network', 'AVAX': 'avalanche-2', 'LINK': 'chainlink',
    'LTC': 'litecoin', 'UNI': 'uniswap', 'ATOM': 'cosmos', 'XLM': 'stellar',
    'SHIB': 'shiba-inu', 'NEAR': 'near', 'ARB': 'arbitrum', 'OP': 'optimism',
    'PEPE': 'pepe', 'SUI': 'sui', 'SEI': 'sei-network', 'INJ': 'injective-protocol',
};

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.warn(`API failed: ${url.split('?')[0]} - ${response.status}`);
            return null;
        }
        return response.json();
    } catch (error) {
        console.error(`Fetch error:`, error.message);
        return null;
    }
};

const formatDate = (date) => date.toISOString().split('T')[0];

const getAssetType = (symbol) => {
    if (symbol.includes(':')) return 'crypto';
    if (CRYPTO_ID_MAP[symbol.toUpperCase()]) return 'crypto';
    return 'stock';
};

const extractCryptoSymbol = (symbol) => {
    if (symbol.includes(':')) {
        const pair = symbol.split(':')[1] || symbol;
        return pair.replace(/(USDT|USD|BUSD|USDC|EUR|GBP)$/i, '');
    }
    return symbol.toUpperCase();
};

const getCoinGeckoId = (symbol) => {
    const baseSymbol = extractCryptoSymbol(symbol);
    return CRYPTO_ID_MAP[baseSymbol] || baseSymbol.toLowerCase();
};

/**
 * Fetch stock/ETF details - Finnhub primary, Polygon for charts only
 */
async function fetchStockDetails(ticker, isEtf = false) {
    // Finnhub URLs (60 calls/min - reliable)
    const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhubApiKey}`;
    const profileUrl = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${finnhubApiKey}`;
    const metricsUrl = `https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=all&token=${finnhubApiKey}`;

    // Fetch Finnhub data first (this is the important stuff)
    const [quoteData, profileData, metricsData] = await Promise.all([
        fetchData(quoteUrl),
        fetchData(profileUrl),
        fetchData(metricsUrl)
    ]);

    // Get price from Finnhub - use pc (previous close) as fallback when c is 0
    const lastPrice = (quoteData?.c > 0) ? quoteData.c : (quoteData?.pc > 0 ? quoteData.pc : null);
    
    if (!lastPrice) {
        console.warn(`No price data from Finnhub for ${ticker}`);
        return null;
    }

    // Detect if it's an ETF based on profile data
    const detectedEtf = isEtf || 
        profileData?.finnhubIndustry === 'Exchange Traded Fund' ||
        profileData?.finnhubIndustry?.includes('ETF') ||
        !profileData?.marketCapitalization; // ETFs often don't have market cap in profile

    // Try to get chart data from Polygon (5 calls/min - may fail)
    let chartPoints = [];
    let chartLabels = [];
    
    try {
        const today = new Date();
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(today.getDate() - 90);
        
        const dailyUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${formatDate(ninetyDaysAgo)}/${formatDate(today)}?apiKey=${polygonApiKey}`;
        const dailyData = await fetchData(dailyUrl);
        
        if (dailyData?.results?.length > 0) {
            chartPoints = dailyData.results.map(agg => agg.c);
            chartLabels = dailyData.results.map(agg => 
                new Date(agg.t).toLocaleDateString([], { month: 'short', day: 'numeric' })
            );
        } else {
            console.warn(`No chart data from Polygon for ${ticker}`);
        }
    } catch (e) {
        console.warn(`Chart data failed for ${ticker}, continuing without chart`);
    }

    // Calculate percent change
    const percentChange = quoteData?.dp || 0;
    const dayChange = quoteData?.d || 0;

    return {
        assetType: detectedEtf ? 'etf' : 'stock',
        lastPrice,
        percentChange,
        dayHigh: quoteData?.h || lastPrice,
        dayLow: quoteData?.l || lastPrice,
        dayChange,
        volume: quoteData?.v || 0,
        fiftyTwoWeekHigh: metricsData?.metric?.['52WeekHigh'],
        fiftyTwoWeekLow: metricsData?.metric?.['52WeekLow'],
        marketCap: profileData?.marketCapitalization,
        peRatio: metricsData?.metric?.peNormalizedAnnual,
        marketStatus: quoteData?.t && (Date.now() - quoteData.t * 1000) < 1200000 ? 'open' : 'closed',
        chart: chartPoints,
        labels: chartLabels,
    };
}

/**
 * Fetch crypto details from CoinGecko
 */
async function fetchCryptoDetails(symbol) {
    const coinId = getCoinGeckoId(symbol);
    
    const [marketChartData, priceData, coinData] = await Promise.all([
        fetchData(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=90`),
        fetchData(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true&include_market_cap=true`),
        fetchData(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`)
    ]);

    let chartPoints = [];
    let chartLabels = [];
    
    if (marketChartData?.prices?.length > 0) {
        const prices = marketChartData.prices;
        const step = Math.max(1, Math.floor(prices.length / 90));
        for (let i = 0; i < prices.length; i += step) {
            chartPoints.push(prices[i][1]);
            chartLabels.push(new Date(prices[i][0]).toLocaleDateString([], { month: 'short', day: 'numeric' }));
        }
    }

    const priceInfo = priceData?.[coinId] || {};
    const lastPrice = priceInfo.usd || null;
    const percentChange = priceInfo.usd_24h_change || 0;
    const marketData = coinData?.market_data || {};

    if (!lastPrice) return null;

    return {
        assetType: 'crypto',
        lastPrice,
        percentChange,
        dayHigh: marketData.high_24h?.usd || lastPrice,
        dayLow: marketData.low_24h?.usd || lastPrice,
        dayChange: lastPrice - (lastPrice / (1 + percentChange / 100)),
        volume: priceInfo.usd_24h_vol || 0,
        fiftyTwoWeekHigh: marketData.ath?.usd,
        fiftyTwoWeekLow: marketData.atl?.usd,
        marketCap: priceInfo.usd_market_cap ? priceInfo.usd_market_cap / 1000000 : null,
        peRatio: null,
        marketStatus: 'open',
        chart: chartPoints,
        labels: chartLabels,
    };
}

export default async function handler(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    try {
        const ticker = request.query.ticker;
        if (!ticker) {
            return response.status(400).json({ error: 'Ticker symbol is required' });
        }

        const assetType = getAssetType(ticker);
        const normalizedTicker = assetType === 'crypto' 
            ? extractCryptoSymbol(ticker) 
            : ticker.toUpperCase();

        // Check cache first (this is the key fix - always try cache)
        const cacheKey = `details-v21:${normalizedTicker}`;
        let cachedData = null;
        
        try {
            cachedData = await redis.get(cacheKey);
            if (cachedData) {
                return response.status(200).json({ ...cachedData, source: 'cache' });
            }
        } catch (cacheError) {
            console.warn('Cache read error:', cacheError.message);
        }

        // Fetch fresh data
        const result = assetType === 'crypto' 
            ? await fetchCryptoDetails(normalizedTicker)
            : await fetchStockDetails(normalizedTicker);

        if (!result || !result.lastPrice) {
            // If we have stale cache, return it instead of error
            if (cachedData) {
                return response.status(200).json({ ...cachedData, source: 'stale-cache' });
            }
            return response.status(404).json({ error: 'No data available', symbol: normalizedTicker });
        }

        // Cache for 6 hours (stocks) or 30 min (crypto)
        const cacheTTL = assetType === 'crypto' ? 1800 : 21600;
        try {
            await redis.set(cacheKey, result, { ex: cacheTTL });
        } catch (cacheError) {
            console.warn('Cache write error:', cacheError.message);
        }

        return response.status(200).json({ ...result, source: 'api' });

    } catch (error) {
        console.error(`Critical error for ${request.query.ticker}:`, error.message);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
