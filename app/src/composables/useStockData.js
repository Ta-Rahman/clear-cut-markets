import { ref } from 'vue';

export function useStockData() {
    // --- THE FIX: Initialize all refs with safe, non-null default values ---
    const stockPrice = ref(0);
    const stockVolume = ref(0);
    const marketCap = ref(0);
    const peRatio = ref(null); // Can be null, so we handle it in the template
    const chartData = ref([]);
    const chartLabels = ref([]);
    const marketStatus = ref('closed');
    const percentChange = ref(0);
    const isLoading = ref(true); // Start in a loading state
    const error = ref(null);

    const fetchModuleData = async (ticker) => {
        if (!ticker) {
            isLoading.value = false;
            return;
        }
        isLoading.value = true;
        error.value = null;
        try {
            const response = await fetch(`/api/get-asset-details?ticker=${ticker}`);
            if (!response.ok) throw new Error('Failed to fetch module data');
            const data = await response.json();

            // Assign new values, with fallbacks to prevent errors
            stockPrice.value = data.lastPrice || 0;
            stockVolume.value = data.volume || 0;
            marketCap.value = data.marketCap || 0;
            peRatio.value = data.peRatio;
            chartData.value = data.chart || [];
            chartLabels.value = data.labels || [];
            marketStatus.value = data.marketStatus || 'closed';
            percentChange.value = data.percentChange || 0;

        } catch (e) {
            error.value = e.message;
            console.error(`Failed to fetch data for ${ticker}:`, e);
        } finally {
            isLoading.value = false;
        }
    };

    return {
        stockPrice,
        stockVolume,
        marketCap,
        peRatio,
        chartData,
        chartLabels,
        marketStatus,
        percentChange,
        isLoading,
        error,
        fetchModuleData
    };
}