// src/composables/useStockData.js
import { ref } from 'vue';

export function useStockData() {
    const stockPrice = ref(null);
    const marketCap = ref(null);
    const peRatio = ref(null);
    const chartData = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    const fetchStockPrice = async (ticker) => {
        if (!ticker) return;
        isLoading.value = true;
        stockPrice.value = null;
        error.value = null;
        try {
            const response = await fetch(`/api/get-stock-price?ticker=${ticker}`);
            if (!response.ok) throw new Error('Price fetch failed');
            const data = await response.json();
            stockPrice.value = data.price;
        } catch (e) {
            console.error(`Price fetch error for ${ticker}:`, e);
        } finally {
            isLoading.value = false;
        }
    };

    const fetchAssetDetails = async (ticker) => {
        if (!ticker) return;
        marketCap.value = null;
        peRatio.value = null;
        chartData.value = [];
        error.value = null;
        try {
            const response = await fetch(`/api/get-asset-details?ticker=${ticker}`);
            if (!response.ok) throw new Error('Details fetch failed');
            const data = await response.json();
            marketCap.value = data.marketCap;
            peRatio.value = data.peRatio;
            chartData.value = data.chart;
        } catch (e) {
            error.value = e.message;
            console.error(`Details fetch error for ${ticker}:`, e);
        }
    };

    return {
        stockPrice,
        marketCap,
        peRatio,
        chartData,
        isLoading,
        error,
        fetchStockPrice,
        fetchAssetDetails
    };
}