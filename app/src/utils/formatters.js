/**
 * Shared formatting utilities for the application
 */

/**
 * Known crypto symbols for detection
 */
const KNOWN_CRYPTO_SYMBOLS = new Set([
    'BTC', 'ETH', 'BNB', 'XRP', 'ADA', 'SOL', 'DOGE', 'DOT', 'MATIC', 'AVAX',
    'LINK', 'LTC', 'UNI', 'ATOM', 'XLM', 'ALGO', 'VET', 'FIL', 'AAVE', 'EOS',
    'XTZ', 'THETA', 'XMR', 'NEO', 'MKR', 'COMP', 'SNX', 'YFI', 'SUSHI', 'CRV',
    'SAND', 'MANA', 'AXS', 'ENJ', 'CHZ', 'SHIB', 'APE', 'LDO', 'ARB', 'OP',
    'SUI', 'SEI', 'TIA', 'INJ', 'NEAR', 'FTM', 'PEPE', 'WIF', 'BONK', 'FLOKI',
    'RENDER', 'FET', 'RNDR', 'GRT', 'IMX'
]);

/**
 * Get display symbol from asset symbol
 * For crypto: BINANCE:BTCUSDT -> BTC, or BTC -> BTC
 * For stocks: AAPL -> AAPL
 * @param {string} symbol - The full asset symbol
 * @returns {string} Display-friendly symbol
 */
export const getDisplaySymbol = (symbol) => {
    if (!symbol) return '';
    
    // Check if it's old format crypto symbol (contains exchange prefix)
    if (symbol.includes(':')) {
        const pair = symbol.split(':')[1] || symbol;
        // Remove common quote currencies (USDT, USD, BUSD, etc.)
        return pair.replace(/(USDT|USD|BUSD|USDC|EUR|GBP)$/, '');
    }
    
    return symbol;
};

/**
 * Check if symbol is a crypto asset
 * @param {string} symbol - The asset symbol
 * @returns {boolean}
 */
export const isCryptoSymbol = (symbol) => {
    if (!symbol) return false;
    // Old format with exchange prefix
    if (symbol.includes(':')) return true;
    // New simple format (BTC, ETH, etc.)
    return KNOWN_CRYPTO_SYMBOLS.has(symbol.toUpperCase());
};

/**
 * Format market cap value (input is in millions)
 * @param {number} num - Market cap in millions
 * @returns {string} Formatted market cap string
 */
export const formatMarketCap = (num) => {
    if (!num) return '...';
    const fullValue = num * 1000000;
    if (fullValue >= 1e12) return `$${(fullValue / 1e12).toFixed(2)}T`;
    if (fullValue >= 1e9) return `$${(fullValue / 1e9).toFixed(2)}B`;
    return `$${(fullValue / 1e6).toFixed(2)}M`;
};

/**
 * Format volume value
 * @param {number} num - Volume number
 * @returns {string} Formatted volume string
 */
export const formatVolume = (num) => {
    if (!num) return '...';
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    return num.toLocaleString();
};

/**
 * Format price value
 * @param {number} price - Price number
 * @param {string} fallback - Fallback string if price is falsy
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, fallback = '0.00') => {
    return price ? price.toFixed(2) : fallback;
};

/**
 * Format percentage value
 * @param {number} value - Percentage number
 * @param {string} fallback - Fallback string if value is falsy
 * @returns {string} Formatted percentage string
 */
export const formatPercent = (value, fallback = '0.00') => {
    return value ? value.toFixed(2) : fallback;
};
