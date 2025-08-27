import { ref } from 'vue';

// A simple, non-reactive utility to fetch data for a single ticker
async function fetchApiData(ticker) {
    try {
        const response = await fetch(`/api/get-asset-details?ticker=${ticker}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch data for ${ticker}:`, error);
        return null;
    }
}

export function useModuleManager() {
    const modules = ref([]);
    const isLoading = ref(true);

    // This function will fetch the initial list of modules from the DB
    // and then enrich each one with live API data.
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
                return {
                    ...placeholderData, // Keep placeholders like sentiment
                    ...apiData, // Overwrite with live data where available
                    // Ensure the core identifiers are correct
                    id: module.id,
                    asset_symbol: module.assets.symbol,
                    name: module.assets.name,
                    region: module.assets.exchange,
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