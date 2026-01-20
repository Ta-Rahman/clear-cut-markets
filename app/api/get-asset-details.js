import 'dotenv/config';
import { Redis } from '@upstash/redis';

/**
 * Asset Details API
 * 
 * Handles three asset types:
 * - Stocks (e.g., AAPL, MSFT) - uses Polygon + Finnhub
 * - ETFs (e.g., SPY, QQQ) - uses Polygon + Finnhub
 * - Crypto (e.g., bitcoin, ethereum) - uses CoinGecko (free, no API key needed)
 */

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const finnhubApiKey = process.env.FINNHUB_API_KEY;
const polygonApiKey = process.env.POLYGON_API_KEY;

/**
 * Mapping of crypto symbols to CoinGecko IDs
 */
const CRYPTO_ID_MAP = {
    'BTC': 'bitcoin',
    'ETH': 'ethereum',
    'BNB': 'binancecoin',
    'XRP': 'ripple',
    'ADA': 'cardano',
    'SOL': 'solana',
    'DOGE': 'dogecoin',
    'DOT': 'polkadot',
    'MATIC': 'matic-network',
    'AVAX': 'avalanche-2',
    'LINK': 'chainlink',
    'LTC': 'litecoin',
    'UNI': 'uniswap',
    'ATOM': 'cosmos',
    'XLM': 'stellar',
    'ALGO': 'algorand',
    'VET': 'vechain',
    'FIL': 'filecoin',
    'AAVE': 'aave',
    'EOS': 'eos',
    'XTZ': 'tezos',
    'THETA': 'theta-token',
    'XMR': 'monero',
    'NEO': 'neo',
    'MKR': 'maker',
    'COMP': 'compound-governance-token',
    'SNX': 'havven',
    'YFI': 'yearn-finance',
    'SUSHI': 'sushi',
    'CRV': 'curve-dao-token',
    'SAND': 'the-sandbox',
    'MANA': 'decentraland',
    'AXS': 'axie-infinity',
    'ENJ': 'enjincoin',
    'CHZ': 'chiliz',
    'SHIB': 'shiba-inu',
    'APE': 'apecoin',
    'LDO': 'lido-dao',
    'ARB': 'arbitrum',
    'OP': 'optimism',
    'SUI': 'sui',
    'SEI': 'sei-network',
    'TIA': 'celestia',
    'INJ': 'injective-protocol',
    'NEAR': 'near',
    'FTM': 'fantom',
    'PEPE': 'pepe',
    'WIF': 'dogwifcoin',
    'BONK': 'bonk',
    'FLOKI': 'floki',
    'RENDER': 'render-token',
    'FET': 'fetch-ai',
    'RNDR': 'render-token',
    'GRT': 'the-graph',
    'IMX': 'immutable-x',
};

/**
 * Fetch data with error handling
 */
const fetchData = async (url, headers = {}) => {
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            console.warn(`API request failed: ${url} - Status: ${response.status}`);
            return null;
        }
        return response.json();
    } catch (error) {
        console.error(`Fetch error for ${url}:`, error.message);
        return null;
    }
};

/**
 * Format date as YYYY-MM-DD
 */
const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};

/**
 * Detect asset type from symbol
 */
const getAssetType = (symbol) => {
    // Handle old format (BINANCE:BTCUSDT) - extract base symbol
    if (symbol.includes(':')) {
        return 'crypto';
    }
    // Check if it's in our crypto map (new format like BTC)
    if (CRYPTO_ID_MAP[symbol.toUpperCase()]) {
        return 'crypto';
    }
    // Everything else is treated as stock/ETF
    return 'stock';
};

/**
 * Extract base crypto symbol (BTC from BINANCE:BTCUSDT or just BTC)
 */
const extractCryptoSymbol = (symbol) => {
    // Handle BINANCE:BTCUSDT format
    if (symbol.includes(':')) {
        const pair = symbol.split(':')[1] || symbol;
        // Remove quote currencies
        return pair.replace(/(USDT|USD|BUSD|USDC|EUR|GBP)$/i, '');
    }
    return symbol.toUpperCase();
};

/**
 * Get CoinGecko ID from symbol
 */
const getCoinGeckoId = (symbol) => {
    const baseSymbol = extractCryptoSymbol(symbol);
    return CRYPTO_ID_MAP[baseSymbol] || baseSymbol.toLowerCase();
};

/**
 * Fetch stock/ETF details using Polygon and Finnhub
 */
async function fetchStockDetails(ticker) {
    const today = new Date();
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(today.getDate() - 90);

    // Build URLs
    const dailyUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${formatDate(ninetyDaysAgo)}/${formatDate(today)}?apiKey=${polygonApiKey}`;
    const prevDayUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?apiKey=${polygonApiKey}`;
    const profileUrl = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${finnhubApiKey}`;
    const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${finnhubApiKey}`;
    const metricsUrl = `https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=all&token=${finnhubApiKey}`;

    // Fetch all data in parallel
    const [dailyData, prevDayData, profileData, quoteData, metricsData] = await Promise.all([
        fetchData(dailyUrl),
        fetchData(prevDayUrl),
        fetchData(profileUrl),
        fetchData(quoteUrl),
        fetchData(metricsUrl)
    ]);

    const prevDayResults = prevDayData?.results?.[0];

    // Process chart data
    let chartPoints = [];
    let chartLabels = [];
    if (dailyData?.results?.length > 0) {
        chartPoints = dailyData.results.map(agg => agg.c);
        chartLabels = dailyData.results.map(agg => 
            new Date(agg.t).toLocaleDateString([], { month: 'short', day: 'numeric' })
        );
    }

    // Determine market status
    let marketStatus = 'closed';
    if (quoteData?.t) {
        const minutesSinceUpdate = (Date.now() - (quoteData.t * 1000)) / 60000;
        if (minutesSinceUpdate < 20) marketStatus = 'open';
    }

    // Resilient volume fallback
    let volume = 0;
    if (quoteData?.v > 0) {
        volume = quoteData.v;
    } else if (prevDayResults?.v > 0) {
        volume = prevDayResults.v;
    } else if (dailyData?.results?.length > 0) {
        volume = dailyData.results[dailyData.results.length - 1].v;
    }

    return {
        assetType: 'stock',
        lastPrice: (marketStatus === 'open' && quoteData?.c > 0) ? quoteData.c : prevDayResults?.c,
        percentChange: quoteData?.dp || 0,
        dayHigh: prevDayResults?.h,
        dayLow: prevDayResults?.l,
        dayChange: (marketStatus === 'open' && quoteData?.d) ? quoteData.d : (prevDayResults?.c - prevDayResults?.o),
        volume: volume,
        fiftyTwoWeekHigh: metricsData?.metric?.['52WeekHigh'],
        fiftyTwoWeekLow: metricsData?.metric?.['52WeekLow'],
        marketCap: profileData?.marketCapitalization,
        peRatio: metricsData?.metric?.peNormalizedAnnual,
        marketStatus: marketStatus,
        chart: chartPoints,
        labels: chartLabels
    };
}

/**
 * Fetch crypto details using CoinGecko API (free, no key needed)
 */
async function fetchCryptoDetails(symbol) {
    const coinId = getCoinGeckoId(symbol);
    
    // CoinGecko endpoints
    const marketChartUrl = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=90`;
    const priceUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true&include_market_cap=true&include_last_updated_at=true`;
    const coinDataUrl = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`;

    // Fetch all data in parallel
    const [marketChartData, priceData, coinData] = await Promise.all([
        fetchData(marketChartUrl),
        fetchData(priceUrl),
        fetchData(coinDataUrl)
    ]);

    // Process chart data
    let chartPoints = [];
    let chartLabels = [];
    
    if (marketChartData?.prices?.length > 0) {
        // CoinGecko returns [timestamp, price] pairs
        // Sample to ~90 points (one per day)
        const prices = marketChartData.prices;
        const step = Math.max(1, Math.floor(prices.length / 90));
        
        for (let i = 0; i < prices.length; i += step) {
            const [timestamp, price] = prices[i];
            chartPoints.push(price);
            chartLabels.push(new Date(timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' }));
        }
    }

    // Get current price data
    const priceInfo = priceData?.[coinId] || {};
    const lastPrice = priceInfo.usd || null;
    const percentChange = priceInfo.usd_24h_change || 0;
    const volume = priceInfo.usd_24h_vol || 0;
    const marketCap = priceInfo.usd_market_cap || null;

    // Get additional data from coin endpoint
    const marketData = coinData?.market_data || {};
    const dayHigh = marketData.high_24h?.usd || null;
    const dayLow = marketData.low_24h?.usd || null;
    const fiftyTwoWeekHigh = marketData.ath?.usd || null;
    const fiftyTwoWeekLow = marketData.atl?.usd || null;

    // Calculate day change
    let dayChange = 0;
    if (lastPrice && percentChange) {
        const previousPrice = lastPrice / (1 + percentChange / 100);
        dayChange = lastPrice - previousPrice;
    }

    // Crypto markets are 24/7
    const marketStatus = 'open';

    return {
        assetType: 'crypto',
        lastPrice: lastPrice,
        percentChange: percentChange,
        dayHigh: dayHigh,
        dayLow: dayLow,
        dayChange: dayChange,
        volume: volume,
        fiftyTwoWeekHigh: fiftyTwoWeekHigh,
        fiftyTwoWeekLow: fiftyTwoWeekLow,
        marketCap: marketCap ? marketCap / 1000000 : null, // Convert to millions to match stock format
        peRatio: null, // Not applicable for crypto
        marketStatus: marketStatus,
        chart: chartPoints,
        labels: chartLabels
    };
}

export default async function handler(request, response) {
    // Set CORS headers
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

        // Detect asset type first
        const assetType = getAssetType(ticker);
        
        // Normalize ticker based on type
        let normalizedTicker;
        if (assetType === 'crypto') {
            // For crypto, extract base symbol (BTC from BINANCE:BTCUSDT)
            normalizedTicker = extractCryptoSymbol(ticker);
        } else {
            normalizedTicker = ticker.toUpperCase();
        }

        // Check cache first
        const cacheKey = `details-v20:${normalizedTicker}`;
        try {
            const cachedData = await redis.get(cacheKey);
            if (cachedData) {
                return response.status(200).json({ ...cachedData, source: 'cache' });
            }
        } catch (cacheError) {
            console.warn('Cache read error:', cacheError);
            // Continue without cache
        }

        // Fetch data based on asset type
        let result;
        if (assetType === 'crypto') {
            result = await fetchCryptoDetails(normalizedTicker);
        } else {
            result = await fetchStockDetails(normalizedTicker);
        }

        // Validate we got some data
        if (!result.lastPrice && result.chart.length === 0) {
            return response.status(404).json({ 
                error: 'No data available for this symbol',
                symbol: normalizedTicker 
            });
        }

        // Cache the result
        // Crypto: shorter cache (15 min) since markets are 24/7
        // Stocks: longer cache (1 hour) since data changes less frequently
        const cacheTTL = assetType === 'crypto' ? 900 : 3600;
        try {
            await redis.set(cacheKey, result, { ex: cacheTTL });
        } catch (cacheError) {
            console.warn('Cache write error:', cacheError);
        }

        return response.status(200).json({ ...result, source: 'api' });

    } catch (error) {
        console.error(`Critical error for ${request.query.ticker}:`, error.message);
        return response.status(500).json({ error: 'An internal server error occurred' });
    }
}
