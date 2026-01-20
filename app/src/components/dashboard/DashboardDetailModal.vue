<script setup>
import { defineProps, computed } from 'vue';
import Dialog from 'primevue/dialog';
import Chart from 'primevue/chart';
import { useI18n } from 'vue-i18n';
import { useChartConfig } from '@/composables/useChartConfig';
import { formatMarketCap, formatVolume, getDisplaySymbol, isCryptoSymbol } from '@/utils/formatters';

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

// Use the shared chart config composable with custom options for the modal
const moduleRef = computed(() => props.module);
const { lineChartData, lineChartOptions } = useChartConfig(moduleRef, {
    maxTicksLimit: 8,
    fontSize: 10,
    showDollarSign: true
});

// Display symbol for crypto-friendly formatting
const displaySymbol = computed(() => getDisplaySymbol(props.module?.asset_symbol));
const isCrypto = computed(() => isCryptoSymbol(props.module?.asset_symbol));

// Format price based on asset type
const formattedPrice = computed(() => {
    const price = props.module?.lastPrice;
    if (!price) return '0.00';
    if (isCrypto.value && price < 1) return price.toFixed(6);
    if (isCrypto.value && price < 100) return price.toFixed(4);
    return price.toFixed(2);
});
</script>

<template>
    <Dialog :visible="visible" modal @update:visible="$emit('close')" class="w-[90vw] md:w-[45rem]" :dismissableMask="true">
        <template #header>
            <div v-if="module" class="w-full flex justify-between items-center pr-8">
                <div class="flex items-center gap-3">
                    <i class="pi pi-chart-line text-2xl text-primary"></i>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ module.name }} ({{ displaySymbol }})</h2>
                        <p class="text-sm text-gray-500 dark:text-gray-400 m-0">{{ isCrypto ? 'Cryptocurrency' : module.region }}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">${{ formattedPrice }}</p>
                </div>
            </div>
        </template>

        <div v-if="!module || !module.lastPrice" class="p-4 animate-pulse">
            <div class="h-64 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
            <div class="h-24 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        </div>

        <div v-else class="flex flex-col gap-6 p-4">
            <div>
                <Chart type="line" :data="lineChartData" :options="lineChartOptions" class="h-64" />
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.day_change') }}</p>
                    <p class="text-xl font-bold whitespace-nowrap" :class="module.percentChange > 0 ? 'text-green-500' : 'text-red-500'">
                        {{ module.dayChange ? module.dayChange.toFixed(2) : '0.00' }} ({{ module.percentChange ? module.percentChange.toFixed(2) : '0.00' }}%)
                    </p>
                </div>
                <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.volume') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ formatVolume(module.volume) }}</p>
                </div>
                <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.market_cap') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ formatMarketCap(module.marketCap) }}</p>
                </div>
                <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.pe_ratio') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ module.peRatio ? module.peRatio.toFixed(2) : 'N/A' }}</p>
                </div>
                <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.day_high') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">${{ module.dayHigh ? module.dayHigh.toFixed(2) : '0.00' }}</p>
                </div>
                 <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.day_low') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">${{ module.dayLow ? module.dayLow.toFixed(2) : '0.00' }}</p>
                </div>
                 <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.52_week_high') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">${{ module.fiftyTwoWeekHigh ? module.fiftyTwoWeekHigh.toFixed(2) : '0.00' }}</p>
                </div>
                 <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dashboard.detailModal.52_week_low') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">${{ module.fiftyTwoWeekLow ? module.fiftyTwoWeekLow.toFixed(2) : '0.00' }}</p>
                </div>
            </div>
        </div>
    </Dialog>
</template>
