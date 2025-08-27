<script setup>
import { defineProps, computed } from 'vue';
import Dialog from 'primevue/dialog';
import Chart from 'primevue/chart';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    module: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(['close']);

const lineChartData = computed(() => {
    const change = typeof props.module.percentChange === 'number' ? props.module.percentChange : 0;
    return {
        labels: props.module.labels || [],
        datasets: [{
            data: props.module.chart || [],
            fill: true,
            borderColor: change > 0 ? '#22c55e' : '#ef4444',
            tension: 0.4,
            backgroundColor: change > 0 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            pointRadius: 0
        }]
    };
});

const lineChartOptions = computed(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
    return {
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: {
                ticks: { color: textColorSecondary, maxTicksLimit: 8, font: { size: 10 } },
                grid: { color: surfaceBorder, drawBorder: false }
            },
            y: {
                ticks: { color: textColorSecondary, callback: (value) => '$' + value.toFixed(2), padding: 5, font: { size: 10 } },
                grid: { color: surfaceBorder, drawBorder: false }
            }
        }
    };
});

const formatMarketCap = (num) => {
    if (!num) return '...';
    const fullValue = num * 1000000;
    if (fullValue >= 1e12) return `$${(fullValue / 1e12).toFixed(2)}T`;
    if (fullValue >= 1e9) return `$${(fullValue / 1e9).toFixed(2)}B`;
    if (fullValue >= 1e6) return `$${(fullValue / 1e6).toFixed(2)}M`;
    return `$${fullValue.toLocaleString()}`;
};

const formatVolume = (num) => {
    if (!num) return '...';
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`;
    return num.toLocaleString();
};
</script>

<template>
    <Dialog :visible="visible" modal @update:visible="$emit('close')" class="w-[90vw] md:w-[45rem]" :dismissableMask="true">
        <template #header>
            <div v-if="module" class="flex items-center gap-3">
                <i class="pi pi-chart-line text-2xl text-primary"></i>
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ module.name }} ({{ module.asset_symbol }})</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400 m-0">{{ module.region }}</p>
                </div>
            </div>
        </template>

        <div v-if="!module || Object.keys(module).length === 0" class="p-4 animate-pulse">
            <div class="h-64 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
            <div class="h-24 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        </div>

        <div v-else class="flex flex-col gap-6 p-4">
            <div>
                <Chart type="line" :data="lineChartData" :options="lineChartOptions" class="h-64" />
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.price') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">${{ module.lastPrice ? module.lastPrice.toFixed(2) : '0.00' }}</p>
                </div>
                 <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.market_cap') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ formatMarketCap(module.marketCap) }}</p>
                </div>
                 <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.volume') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ formatVolume(module.volume) }}</p>
                </div>
                 <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.pe_ratio') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ module.peRatio ? module.peRatio.toFixed(2) : 'N/A' }}</p>
                </div>
            </div>
        </div>
    </Dialog>
</template> 