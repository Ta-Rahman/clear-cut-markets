import { ref } from 'vue';

/**
 * Fetch data for a single ticker from the API
 * @param {string} ticker - The ticker symbol (e.g., AAPL or BINANCE:BTCUSDT)
 */
async function fetchApiData(ticker) {
    try {
        // Encode the ticker to handle special characters (e.g., BINANCE:BTCUSDT)
        const response = await fetch(`/api/get-asset-details?ticker=${encodeURIComponent(ticker)}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch data for ${ticker}:`, error);
        return null;
    }
}

/**
 * Format the display symbol for crypto assets
 * Converts BINANCE:BTCUSDT to BTC/USDT for display
 */
function formatDisplaySymbol(symbol) {
    if (!symbol.includes(':')) return symbol;
    
    // Extract pair from exchange:pair format
    const pair = symbol.split(':')[1] || symbol;
    
    // Common quote currencies to split on
    const quoteCurrencies = ['USDT', 'USDC', 'BUSD', 'USD', 'EUR', 'GBP', 'BTC', 'ETH', 'BNB'];
    
    for (const quote of quoteCurrencies) {
        if (pair.endsWith(quote)) {
            const base = pair.slice(0, -quote.length);
            return `${base}/${quote}`;
        }
    }
    
    return pair;
}

export function useModuleManager() {
    const modules = ref([]);
    const isLoading = ref(true);

    /**
     * Fetch all modules for the current user and enrich with live API data
     */
    const fetchAllModuleData = async (supabase, addPlaceholderMetrics) => {
        isLoading.value = true;
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            isLoading.value = false;
            return;
        }

        const { data, error } = await supabase
            .from('user_modules')
            .select('id, user_id, assets(*)')
            .eq('user_id', user.id);

        if (error) {
            console.error('Error fetching modules:', error);
            isLoading.value = false;
            return;
        }

        const enrichedModules = await Promise.all(
            data.map(async (module) => {
                const apiData = await fetchApiData(module.assets.symbol);
                const placeholderData = addPlaceholderMetrics(module);
                
                // Determine if this is a crypto asset
                const isCrypto = module.assets.symbol.includes(':');
                
                return {
                    ...placeholderData, // Keep placeholders like sentiment
                    ...apiData, // Overwrite with live data where available
                    // Ensure the core identifiers are correct
                    id: module.id,
                    asset_symbol: module.assets.symbol,
                    // For crypto, use formatted display symbol; otherwise use as-is
                    display_symbol: isCrypto ? formatDisplaySymbol(module.assets.symbol) : module.assets.symbol,
                    name: module.assets.name,
                    region: module.assets.exchange || (isCrypto ? 'Crypto' : 'United States'),
                    isCrypto: isCrypto,
                };
            })
        );
        
        modules.value = enrichedModules;
        isLoading.value = false;
    };

    return {
        modules,
        isLoading,
        fetchAllModuleData
    };
}
