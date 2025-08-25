import { ref } from 'vue';

export function useStockData() {
    const stockPrice = ref(null);
    const stockVolume = ref(null);
    const marketCap = ref(null);
    const peRatio = ref(null);
    const chartData = ref([]);
    const chartLabels = ref([]);
    const marketStatus = ref('closed'); // Add a ref for market status
    const isLoading = ref(false);
    const error = ref(null);

    const fetchModuleData = async (ticker) => {
        if (!ticker) return;
        isLoading.value = true;
        error.value = null;
        try {
            const response = await fetch(`/api/get-asset-details?ticker=${ticker}`);
            if (!response.ok) throw new Error('Failed to fetch module data');
            const data = await response.json();

            stockPrice.value = data.lastPrice;
            stockVolume.value = data.volume;
            marketCap.value = data.marketCap;
            peRatio.value = data.peRatio;
            chartData.value = data.chart;
            chartLabels.value = data.labels;
            marketStatus.value = data.marketStatus; // Store the status

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
        marketStatus, // Export the new ref
        isLoading,
        error,
        fetchModuleData
    };
}