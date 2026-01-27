import { ref } from 'vue';

/**
 * Fetch data for a single ticker from the API
 * @param {string} ticker - The ticker symbol (e.g., AAPL or BTC)
 */
async function fetchApiData(ticker) {
    try {
        const response = await fetch(`/api/get-asset-details?ticker=${encodeURIComponent(ticker)}`);
        if (!response.ok) {
            if (response.status === 429) {
                console.warn(`Rate limited for ${ticker}`);
                return { rateLimited: true };
            }
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch data for ${ticker}:`, error);
        return null;
    }
}

/**
 * Format the display symbol for crypto assets
 */
function formatDisplaySymbol(symbol) {
    if (!symbol.includes(':')) return symbol;
    const pair = symbol.split(':')[1] || symbol;
    const quoteCurrencies = ['USDT', 'USDC', 'BUSD', 'USD', 'EUR', 'GBP', 'BTC', 'ETH', 'BNB'];
    for (const quote of quoteCurrencies) {
        if (pair.endsWith(quote)) {
            return `${pair.slice(0, -quote.length)}/${quote}`;
        }
    }
    return pair;
}

export function useModuleManager() {
    const modules = ref([]);
    const isLoading = ref(true);
    const loadingProgress = ref(0);

    /**
     * Fetch all modules in PARALLEL (cache makes this fast)
     * Falls back to sequential only if rate limited
     */
    const fetchAllModuleData = async (supabase, addPlaceholderMetrics) => {
        isLoading.value = true;
        loadingProgress.value = 0;
        
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

        if (!data || data.length === 0) {
            modules.value = [];
            isLoading.value = false;
            return;
        }

        // Initialize modules with placeholder data immediately
        modules.value = data.map((module) => {
            // Use type from database, fallback to detection
            const dbType = module.assets.type?.toLowerCase(); // 'stock', 'etf', 'crypto'
            const isCrypto = dbType === 'crypto' || module.assets.symbol.includes(':') || 
                ['BTC', 'ETH', 'SOL', 'DOGE', 'XRP', 'ADA', 'AVAX', 'LINK', 'DOT', 'MATIC'].includes(module.assets.symbol.toUpperCase());
            const isEtf = dbType === 'etf';
            const placeholderData = addPlaceholderMetrics(module);
            
            return {
                ...placeholderData,
                id: module.id,
                asset_symbol: module.assets.symbol,
                asset_type: isCrypto ? 'crypto' : (isEtf ? 'etf' : 'stock'),
                display_symbol: isCrypto ? formatDisplaySymbol(module.assets.symbol) : module.assets.symbol,
                name: module.assets.name,
                region: module.assets.exchange || (isCrypto ? 'Crypto' : 'United States'),
                isCrypto,
                isEtf,
                isLoadingData: true,
            };
        });

        // Fetch ALL API data in parallel (cache will return instantly for cached items)
        const apiPromises = data.map(async (module, index) => {
            const apiData = await fetchApiData(module.assets.symbol);
            return { moduleId: module.id, apiData, index };
        });

        // Process results as they complete
        const results = await Promise.allSettled(apiPromises);
        
        let completedCount = 0;
        for (const result of results) {
            if (result.status === 'fulfilled') {
                const { moduleId, apiData } = result.value;
                const moduleIndex = modules.value.findIndex(m => m.id === moduleId);
                
                if (moduleIndex !== -1) {
                    if (apiData && !apiData.rateLimited) {
                        modules.value[moduleIndex] = {
                            ...modules.value[moduleIndex],
                            ...apiData,
                            isLoadingData: false,
                        };
                    } else {
                        modules.value[moduleIndex].isLoadingData = false;
                    }
                }
            }
            completedCount++;
            loadingProgress.value = Math.round((completedCount / data.length) * 100);
        }
        
        isLoading.value = false;
    };

    return {
        modules,
        isLoading,
        loadingProgress,
        fetchAllModuleData
    };
}
