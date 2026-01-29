import 'dotenv/config';
import { Redis } from '@upstash/redis';

/**
 * Improved Asset Search API
 * 
 * Uses Finnhub as primary source (60 req/min free tier)
 * Falls back to a static popular symbols list for common queries
 * Aggressive caching (24h for search results - symbols don't change often)
 * Better formatting and relevance sorting
 */

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const finnhubApiKey = process.env.FINNHUB_API_KEY;

// Popular US stocks and ETFs for instant results (no API call needed)
// This helps reduce API calls for common searches
const POPULAR_SYMBOLS = {
    stocks: [
        { symbol: 'AAPL', name: 'Apple Inc', type: 'stock', region: 'United States' },
        { symbol: 'MSFT', name: 'Microsoft Corporation', type: 'stock', region: 'United States' },
        { symbol: 'GOOGL', name: 'Alphabet Inc Class A', type: 'stock', region: 'United States' },
        { symbol: 'GOOG', name: 'Alphabet Inc Class C', type: 'stock', region: 'United States' },
        { symbol: 'AMZN', name: 'Amazon.com Inc', type: 'stock', region: 'United States' },
        { symbol: 'NVDA', name: 'NVIDIA Corporation', type: 'stock', region: 'United States' },
        { symbol: 'META', name: 'Meta Platforms Inc', type: 'stock', region: 'United States' },
        { symbol: 'TSLA', name: 'Tesla Inc', type: 'stock', region: 'United States' },
        { symbol: 'BRK.B', name: 'Berkshire Hathaway Inc Class B', type: 'stock', region: 'United States' },
        { symbol: 'JPM', name: 'JPMorgan Chase & Co', type: 'stock', region: 'United States' },
        { symbol: 'JNJ', name: 'Johnson & Johnson', type: 'stock', region: 'United States' },
        { symbol: 'V', name: 'Visa Inc', type: 'stock', region: 'United States' },
        { symbol: 'PG', name: 'Procter & Gamble Co', type: 'stock', region: 'United States' },
        { symbol: 'UNH', name: 'UnitedHealth Group Inc', type: 'stock', region: 'United States' },
        { symbol: 'HD', name: 'Home Depot Inc', type: 'stock', region: 'United States' },
        { symbol: 'MA', name: 'Mastercard Inc', type: 'stock', region: 'United States' },
        { symbol: 'DIS', name: 'Walt Disney Co', type: 'stock', region: 'United States' },
        { symbol: 'ADBE', name: 'Adobe Inc', type: 'stock', region: 'United States' },
        { symbol: 'CRM', name: 'Salesforce Inc', type: 'stock', region: 'United States' },
        { symbol: 'NFLX', name: 'Netflix Inc', type: 'stock', region: 'United States' },
        { symbol: 'PYPL', name: 'PayPal Holdings Inc', type: 'stock', region: 'United States' },
        { symbol: 'INTC', name: 'Intel Corporation', type: 'stock', region: 'United States' },
        { symbol: 'AMD', name: 'Advanced Micro Devices Inc', type: 'stock', region: 'United States' },
        { symbol: 'CSCO', name: 'Cisco Systems Inc', type: 'stock', region: 'United States' },
        { symbol: 'PEP', name: 'PepsiCo Inc', type: 'stock', region: 'United States' },
        { symbol: 'KO', name: 'Coca-Cola Co', type: 'stock', region: 'United States' },
        { symbol: 'NKE', name: 'Nike Inc', type: 'stock', region: 'United States' },
        { symbol: 'MCD', name: 'McDonald\'s Corp', type: 'stock', region: 'United States' },
        { symbol: 'WMT', name: 'Walmart Inc', type: 'stock', region: 'United States' },
        { symbol: 'COST', name: 'Costco Wholesale Corp', type: 'stock', region: 'United States' },
        { symbol: 'BA', name: 'Boeing Co', type: 'stock', region: 'United States' },
        { symbol: 'CAT', name: 'Caterpillar Inc', type: 'stock', region: 'United States' },
        { symbol: 'GS', name: 'Goldman Sachs Group Inc', type: 'stock', region: 'United States' },
        { symbol: 'IBM', name: 'International Business Machines Corp', type: 'stock', region: 'United States' },
        { symbol: 'ORCL', name: 'Oracle Corporation', type: 'stock', region: 'United States' },
        { symbol: 'UBER', name: 'Uber Technologies Inc', type: 'stock', region: 'United States' },
        { symbol: 'ABNB', name: 'Airbnb Inc', type: 'stock', region: 'United States' },
        { symbol: 'SQ', name: 'Block Inc', type: 'stock', region: 'United States' },
        { symbol: 'SHOP', name: 'Shopify Inc', type: 'stock', region: 'United States' },
        { symbol: 'SPOT', name: 'Spotify Technology SA', type: 'stock', region: 'United States' },
        { symbol: 'ZM', name: 'Zoom Video Communications Inc', type: 'stock', region: 'United States' },
        { symbol: 'SNAP', name: 'Snap Inc', type: 'stock', region: 'United States' },
        { symbol: 'PLTR', name: 'Palantir Technologies Inc', type: 'stock', region: 'United States' },
        { symbol: 'COIN', name: 'Coinbase Global Inc', type: 'stock', region: 'United States' },
        { symbol: 'GME', name: 'GameStop Corp', type: 'stock', region: 'United States' },
        { symbol: 'AMC', name: 'AMC Entertainment Holdings Inc', type: 'stock', region: 'United States' },
        { symbol: 'F', name: 'Ford Motor Co', type: 'stock', region: 'United States' },
        { symbol: 'GM', name: 'General Motors Co', type: 'stock', region: 'United States' },
        { symbol: 'XOM', name: 'Exxon Mobil Corp', type: 'stock', region: 'United States' },
        { symbol: 'CVX', name: 'Chevron Corp', type: 'stock', region: 'United States' },
    ],
    etfs: [
        { symbol: 'SPY', name: 'SPDR S&P 500 ETF Trust', type: 'etf', region: 'United States' },
        { symbol: 'VOO', name: 'Vanguard S&P 500 ETF', type: 'etf', region: 'United States' },
        { symbol: 'IVV', name: 'iShares Core S&P 500 ETF', type: 'etf', region: 'United States' },
        { symbol: 'QQQ', name: 'Invesco QQQ Trust', type: 'etf', region: 'United States' },
        { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', type: 'etf', region: 'United States' },
        { symbol: 'VEA', name: 'Vanguard FTSE Developed Markets ETF', type: 'etf', region: 'United States' },
        { symbol: 'VWO', name: 'Vanguard FTSE Emerging Markets ETF', type: 'etf', region: 'United States' },
        { symbol: 'VNQ', name: 'Vanguard Real Estate ETF', type: 'etf', region: 'United States' },
        { symbol: 'BND', name: 'Vanguard Total Bond Market ETF', type: 'etf', region: 'United States' },
        { symbol: 'AGG', name: 'iShares Core US Aggregate Bond ETF', type: 'etf', region: 'United States' },
        { symbol: 'GLD', name: 'SPDR Gold Shares', type: 'etf', region: 'United States' },
        { symbol: 'SLV', name: 'iShares Silver Trust', type: 'etf', region: 'United States' },
        { symbol: 'ARKK', name: 'ARK Innovation ETF', type: 'etf', region: 'United States' },
        { symbol: 'XLF', name: 'Financial Select Sector SPDR Fund', type: 'etf', region: 'United States' },
        { symbol: 'XLK', name: 'Technology Select Sector SPDR Fund', type: 'etf', region: 'United States' },
        { symbol: 'XLE', name: 'Energy Select Sector SPDR Fund', type: 'etf', region: 'United States' },
        { symbol: 'XLV', name: 'Health Care Select Sector SPDR Fund', type: 'etf', region: 'United States' },
        { symbol: 'IWM', name: 'iShares Russell 2000 ETF', type: 'etf', region: 'United States' },
        { symbol: 'EFA', name: 'iShares MSCI EAFE ETF', type: 'etf', region: 'United States' },
        { symbol: 'EEM', name: 'iShares MSCI Emerging Markets ETF', type: 'etf', region: 'United States' },
        { symbol: 'DIA', name: 'SPDR Dow Jones Industrial Average ETF', type: 'etf', region: 'United States' },
        { symbol: 'TLT', name: 'iShares 20+ Year Treasury Bond ETF', type: 'etf', region: 'United States' },
        { symbol: 'SCHD', name: 'Schwab US Dividend Equity ETF', type: 'etf', region: 'United States' },
        { symbol: 'VIG', name: 'Vanguard Dividend Appreciation ETF', type: 'etf', region: 'United States' },
        { symbol: 'VXUS', name: 'Vanguard Total International Stock ETF', type: 'etf', region: 'United States' },
    ],
    crypto: [
        { symbol: 'BTC', displaySymbol: 'BTC', name: 'Bitcoin / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'ETH', displaySymbol: 'ETH', name: 'Ethereum / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'BNB', displaySymbol: 'BNB', name: 'Binance Coin / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'XRP', displaySymbol: 'XRP', name: 'Ripple / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'ADA', displaySymbol: 'ADA', name: 'Cardano / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'SOL', displaySymbol: 'SOL', name: 'Solana / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'DOGE', displaySymbol: 'DOGE', name: 'Dogecoin / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'DOT', displaySymbol: 'DOT', name: 'Polkadot / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'MATIC', displaySymbol: 'MATIC', name: 'Polygon / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'AVAX', displaySymbol: 'AVAX', name: 'Avalanche / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'LINK', displaySymbol: 'LINK', name: 'Chainlink / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'LTC', displaySymbol: 'LTC', name: 'Litecoin / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'UNI', displaySymbol: 'UNI', name: 'Uniswap / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'ATOM', displaySymbol: 'ATOM', name: 'Cosmos / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'XLM', displaySymbol: 'XLM', name: 'Stellar / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'NEAR', displaySymbol: 'NEAR', name: 'NEAR Protocol / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'SHIB', displaySymbol: 'SHIB', name: 'Shiba Inu / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'ARB', displaySymbol: 'ARB', name: 'Arbitrum / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'OP', displaySymbol: 'OP', name: 'Optimism / USD', type: 'crypto', region: 'Crypto' },
        { symbol: 'APE', displaySymbol: 'APE', name: 'ApeCoin / USD', type: 'crypto', region: 'Crypto' },
    ]
};

/**
 * Search the local popular symbols list
 */
function searchLocalSymbols(query, type) {
    const normalizedQuery = query.toLowerCase().trim();
    let symbols = [];
    
    if (type === 'stock') {
        symbols = POPULAR_SYMBOLS.stocks;
    } else if (type === 'etf') {
        symbols = POPULAR_SYMBOLS.etfs;
    } else if (type === 'crypto') {
        symbols = POPULAR_SYMBOLS.crypto;
    } else {
        // Search all types
        symbols = [...POPULAR_SYMBOLS.stocks, ...POPULAR_SYMBOLS.etfs, ...POPULAR_SYMBOLS.crypto];
    }
    
    // Score and filter results
    const scored = symbols
        .map(s => {
            const symbolLower = s.symbol.toLowerCase();
            const nameLower = s.name.toLowerCase();
            
            let score = 0;
            
            // Exact symbol match gets highest score
            if (symbolLower === normalizedQuery) score = 100;
            // Symbol starts with query
            else if (symbolLower.startsWith(normalizedQuery)) score = 80;
            // Symbol contains query
            else if (symbolLower.includes(normalizedQuery)) score = 60;
            // Name starts with query
            else if (nameLower.startsWith(normalizedQuery)) score = 50;
            // Name contains query (word boundary)
            else if (nameLower.includes(' ' + normalizedQuery) || nameLower.includes(normalizedQuery + ' ')) score = 40;
            // Name contains query anywhere
            else if (nameLower.includes(normalizedQuery)) score = 30;
            
            return { ...s, score };
        })
        .filter(s => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10)
        .map(({ score, ...rest }) => rest); // Remove score from final result
    
    return scored;
}

/**
 * Extract display symbol from crypto pair (e.g., BINANCE:BTCUSDT -> BTC)
 */
function extractCryptoDisplaySymbol(symbol) {
    // BINANCE:BTCUSDT -> BTCUSDT -> BTC
    const pair = symbol.split(':')[1] || symbol;
    // Remove common quote currencies
    return pair.replace(/(USDT|USD|BUSD|USDC|EUR|GBP)$/, '');
}

/**
 * Get readable name for crypto from symbol
 */
function getCryptoReadableName(symbol, description) {
    const displaySymbol = extractCryptoDisplaySymbol(symbol);
    
    // Map of common crypto symbols to full names
    const cryptoNames = {
        'BTC': 'Bitcoin',
        'ETH': 'Ethereum',
        'BNB': 'Binance Coin',
        'XRP': 'Ripple',
        'ADA': 'Cardano',
        'SOL': 'Solana',
        'DOGE': 'Dogecoin',
        'DOT': 'Polkadot',
        'MATIC': 'Polygon',
        'AVAX': 'Avalanche',
        'LINK': 'Chainlink',
        'LTC': 'Litecoin',
        'UNI': 'Uniswap',
        'ATOM': 'Cosmos',
        'XLM': 'Stellar',
        'ALGO': 'Algorand',
        'VET': 'VeChain',
        'FIL': 'Filecoin',
        'AAVE': 'Aave',
        'EOS': 'EOS',
        'XTZ': 'Tezos',
        'THETA': 'Theta',
        'XMR': 'Monero',
        'NEO': 'Neo',
        'MKR': 'Maker',
        'COMP': 'Compound',
        'SNX': 'Synthetix',
        'YFI': 'Yearn Finance',
        'SUSHI': 'SushiSwap',
        'CRV': 'Curve',
        'SAND': 'The Sandbox',
        'MANA': 'Decentraland',
        'AXS': 'Axie Infinity',
        'ENJ': 'Enjin Coin',
        'CHZ': 'Chiliz',
        'SHIB': 'Shiba Inu',
        'APE': 'ApeCoin',
        'LDO': 'Lido DAO',
        'ARB': 'Arbitrum',
        'OP': 'Optimism',
        'SUI': 'Sui',
        'SEI': 'Sei',
        'TIA': 'Celestia',
        'INJ': 'Injective',
        'NEAR': 'NEAR Protocol',
        'FTM': 'Fantom',
        'PEPE': 'Pepe',
        'WIF': 'dogwifhat',
        'BONK': 'Bonk',
        'FLOKI': 'Floki',
        'RENDER': 'Render',
        'FET': 'Fetch.ai',
        'RNDR': 'Render Token',
        'GRT': 'The Graph',
        'IMX': 'Immutable X',
    };
    
    const baseName = cryptoNames[displaySymbol] || description || displaySymbol;
    return `${baseName} / USD`;
}

/**
 * Clean and format company name
 */
function cleanCompanyName(name) {
    if (!name) return '';
    
    return name
        // Remove common suffixes
        .replace(/\s+(Inc\.?|Corp\.?|Corporation|Ltd\.?|Limited|PLC|LLC|LP|N\.?V\.?|S\.?A\.?|AG|SE|Co\.?)$/gi, '')
        // Remove extra whitespace
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Fetch from Finnhub Symbol Search API
 */
async function searchFinnhub(query, type) {
    const url = `https://finnhub.io/api/v1/search?q=${encodeURIComponent(query)}&token=${finnhubApiKey}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        if (response.status === 429) {
            throw new Error('RATE_LIMIT');
        }
        throw new Error(`Finnhub API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.result || !Array.isArray(data.result)) {
        return [];
    }
    
    // Map Finnhub types to our types
    const typeMapping = {
        'Common Stock': 'stock',
        'ETP': 'etf',  // Exchange Traded Product
        'ETF': 'etf',
        'Crypto': 'crypto',
        'ADR': 'stock',
        'REIT': 'stock',
    };
    
    let results = data.result
        .filter(item => {
            // Filter out non-US stocks unless crypto
            if (type === 'crypto') {
                return item.type === 'Crypto';
            }
            // For stocks/ETFs, prefer US exchanges
            const isUS = !item.symbol.includes('.') && !item.symbol.includes(':');
            return isUS;
        })
        .map(item => {
            const mappedType = typeMapping[item.type] || 'stock';
            const isCrypto = item.type === 'Crypto';
            
            return {
                symbol: item.symbol,
                displaySymbol: isCrypto ? extractCryptoDisplaySymbol(item.symbol) : item.symbol,
                name: isCrypto ? getCryptoReadableName(item.symbol, item.description) : cleanCompanyName(item.description),
                type: mappedType,
                region: isCrypto ? 'Crypto' : 'United States',
                // Keep original type for filtering
                _originalType: item.type
            };
        });
    
    // Filter by requested type
    if (type && type !== 'all') {
        results = results.filter(item => {
            if (type === 'stock') {
                return item.type === 'stock' && item._originalType !== 'ETP' && item._originalType !== 'ETF';
            } else if (type === 'etf') {
                return item._originalType === 'ETP' || item._originalType === 'ETF';
            } else if (type === 'crypto') {
                return item.type === 'crypto';
            }
            return true;
        });
    }
    
    // Clean up internal field
    results = results.map(({ _originalType, ...rest }) => rest);
    
    // Sort: exact matches first, then by symbol length (shorter = more relevant)
    const queryLower = query.toLowerCase();
    results.sort((a, b) => {
        const aExact = a.symbol.toLowerCase() === queryLower ? 0 : 1;
        const bExact = b.symbol.toLowerCase() === queryLower ? 0 : 1;
        if (aExact !== bExact) return aExact - bExact;
        
        const aStarts = a.symbol.toLowerCase().startsWith(queryLower) ? 0 : 1;
        const bStarts = b.symbol.toLowerCase().startsWith(queryLower) ? 0 : 1;
        if (aStarts !== bStarts) return aStarts - bStarts;
        
        return a.symbol.length - b.symbol.length;
    });
    
    return results.slice(0, 15);
}

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { query, type } = req.query;

    if (!query || query.trim().length === 0) {
        return res.status(400).json({ error: 'Search query is required' });
    }

    const normalizedQuery = query.trim();
    const normalizedType = type || 'stock'; // Default to stock

    // For crypto searches, ONLY use local list (we use CoinGecko API which needs simple symbols)
    // Finnhub returns BINANCE:BTCUSDT format which doesn't work with CoinGecko
    if (normalizedType === 'crypto') {
        const localResults = searchLocalSymbols(normalizedQuery, normalizedType);
        return res.status(200).json(localResults);
    }

    // For very short queries (1-2 chars), only use local search to save API calls
    if (normalizedQuery.length <= 2) {
        const localResults = searchLocalSymbols(normalizedQuery, normalizedType);
        return res.status(200).json(localResults);
    }

    // Check cache first (24 hour TTL for search results)
    const cacheKey = `search:v3:${normalizedType}:${normalizedQuery.toLowerCase()}`;
    
    try {
        const cachedData = await redis.get(cacheKey);
        if (cachedData) {
            return res.status(200).json(cachedData);
        }
    } catch (cacheError) {
        console.warn('Cache read error:', cacheError);
        // Continue without cache
    }

    try {
        // First, check local popular symbols
        const localResults = searchLocalSymbols(normalizedQuery, normalizedType);
        
        // If we have good local results for an exact or near-exact match, use them
        if (localResults.length > 0 && localResults[0].symbol.toLowerCase().startsWith(normalizedQuery.toLowerCase())) {
            // Cache the local results too
            try {
                await redis.set(cacheKey, localResults, { ex: 86400 }); // 24 hours
            } catch (e) { /* ignore cache errors */ }
            return res.status(200).json(localResults);
        }

        // Otherwise, search Finnhub
        let results = await searchFinnhub(normalizedQuery, normalizedType);
        
        // Merge with local results if API returns few results
        if (results.length < 5) {
            const existingSymbols = new Set(results.map(r => r.symbol));
            const additionalLocal = localResults.filter(l => !existingSymbols.has(l.symbol));
            results = [...results, ...additionalLocal].slice(0, 15);
        }

        // Cache successful results
        if (results.length > 0) {
            try {
                await redis.set(cacheKey, results, { ex: 86400 }); // 24 hours
            } catch (e) { /* ignore cache errors */ }
        }

        return res.status(200).json(results);

    } catch (error) {
        console.error('Search error:', error);
        
        // If rate limited or API error, fall back to local results
        if (error.message === 'RATE_LIMIT') {
            const localResults = searchLocalSymbols(normalizedQuery, normalizedType);
            if (localResults.length > 0) {
                return res.status(200).json(localResults);
            }
            return res.status(429).json({ error: 'Rate limit exceeded. Please try again in a moment.' });
        }
        
        // For other errors, try local results
        const localResults = searchLocalSymbols(normalizedQuery, normalizedType);
        if (localResults.length > 0) {
            return res.status(200).json(localResults);
        }
        
        return res.status(500).json({ error: 'Failed to search assets' });
    }
}
