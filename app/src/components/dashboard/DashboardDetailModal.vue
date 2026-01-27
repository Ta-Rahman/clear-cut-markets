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

// Calculate price position in 52-week range
const pricePositionInRange = computed(() => {
    const price = props.module?.lastPrice;
    const low = props.module?.fiftyTwoWeekLow;
    const high = props.module?.fiftyTwoWeekHigh;
    if (!price || !low || !high || high === low) return 50;
    const position = ((price - low) / (high - low)) * 100;
    return Math.max(0, Math.min(100, position));
});
</script>

<template>
    <Dialog :visible="visible" modal @update:visible="$emit('close')" class="detail-modal w-[95vw] sm:w-[90vw] md:w-[45rem]" :dismissableMask="true">
        <template #header>
            <div v-if="module" class="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pr-8">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold shadow-lg"
                         :class="isCrypto ? 'from-amber-500 to-orange-500 shadow-amber-500/25' : 'from-indigo-500 to-purple-500 shadow-indigo-500/25'">
                        {{ displaySymbol.slice(0, 2) }}
                    </div>
                    <div>
                        <h2 class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ displaySymbol }}</h2>
                        <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 m-0 truncate max-w-[200px] sm:max-w-none">{{ module.name }}</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 sm:text-right">
                    <div>
                        <p class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">${{ formattedPrice }}</p>
                        <p class="text-xs m-0 flex items-center gap-1 sm:justify-end"
                           :class="module.percentChange >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'">
                            <i :class="['pi text-[10px]', module.percentChange >= 0 ? 'pi-arrow-up' : 'pi-arrow-down']"></i>
                            {{ module.percentChange ? Math.abs(module.percentChange).toFixed(2) : '0.00' }}%
                        </p>
                    </div>
                </div>
            </div>
        </template>

        <div v-if="!module || !module.lastPrice" class="p-4 space-y-4">
            <div class="h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
            <div class="grid grid-cols-2 gap-3">
                <div class="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                <div class="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            </div>
        </div>

        <div v-else class="flex flex-col gap-4 sm:gap-6 p-3 sm:p-4">
            <!-- Chart -->
            <div class="p-3 sm:p-4 bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl">
                <Chart type="line" :data="lineChartData" :options="lineChartOptions" class="h-48 sm:h-64" />
            </div>

            <!-- Key stats row -->
            <div class="grid grid-cols-2 gap-3">
                <div class="stat-card p-3 sm:p-4 rounded-xl">
                    <div class="flex items-center gap-2 mb-1">
                        <i class="pi pi-chart-line text-indigo-500" style="font-size: 12px;"></i>
                        <span class="text-xs text-gray-500 dark:text-gray-400">{{ t('dashboard.detailModal.day_change') }}</span>
                    </div>
                    <p class="text-base sm:text-lg font-bold" :class="module.percentChange >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'">
                        {{ module.dayChange ? (module.dayChange >= 0 ? '+' : '') + module.dayChange.toFixed(2) : '0.00' }}
                        <span class="text-xs">({{ module.percentChange ? (module.percentChange >= 0 ? '+' : '') + module.percentChange.toFixed(2) : '0.00' }}%)</span>
                    </p>
                </div>
                <div class="stat-card p-3 sm:p-4 rounded-xl">
                    <div class="flex items-center gap-2 mb-1">
                        <i class="pi pi-chart-bar text-indigo-500" style="font-size: 12px;"></i>
                        <span class="text-xs text-gray-500 dark:text-gray-400">{{ t('dashboard.detailModal.volume') }}</span>
                    </div>
                    <p class="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">{{ formatVolume(module.volume) }}</p>
                </div>
            </div>

            <!-- Detailed stats grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                <div class="stat-card-mini p-3 rounded-xl text-center">
                    <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-0.5">{{ t('dashboard.detailModal.market_cap') }}</p>
                    <p class="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100">{{ formatMarketCap(module.marketCap) }}</p>
                </div>
                <div class="stat-card-mini p-3 rounded-xl text-center">
                    <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-0.5">{{ t('dashboard.detailModal.pe_ratio') }}</p>
                    <p class="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100">{{ module.peRatio ? module.peRatio.toFixed(2) : 'N/A' }}</p>
                </div>
                <div class="stat-card-mini p-3 rounded-xl text-center">
                    <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-0.5">{{ t('dashboard.detailModal.day_high') }}</p>
                    <p class="text-sm sm:text-base font-bold text-green-600 dark:text-green-400">${{ module.dayHigh ? module.dayHigh.toFixed(2) : '0.00' }}</p>
                </div>
                <div class="stat-card-mini p-3 rounded-xl text-center">
                    <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-0.5">{{ t('dashboard.detailModal.day_low') }}</p>
                    <p class="text-sm sm:text-base font-bold text-red-600 dark:text-red-400">${{ module.dayLow ? module.dayLow.toFixed(2) : '0.00' }}</p>
                </div>
            </div>

            <!-- 52-week range -->
            <div class="stat-card p-3 sm:p-4 rounded-xl">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs text-gray-500 dark:text-gray-400">52 Week Range</span>
                    <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
                        ${{ module.fiftyTwoWeekLow?.toFixed(2) || '0' }} - ${{ module.fiftyTwoWeekHigh?.toFixed(2) || '0' }}
                    </span>
                </div>
                <div class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="absolute inset-y-0 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"
                         :style="{ width: '100%' }"></div>
                    <div class="absolute w-3 h-3 bg-white border-2 border-indigo-500 rounded-full top-1/2 -translate-y-1/2 shadow-md"
                         :style="{ left: pricePositionInRange + '%', transform: 'translate(-50%, -50%)' }"></div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<style scoped>
.stat-card {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.stat-card-mini {
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.03);
}
</style>

<style>
.app-dark .stat-card {
    background: rgba(31, 41, 55, 0.7);
    border-color: rgba(255, 255, 255, 0.05);
}

.app-dark .stat-card-mini {
    background: rgba(31, 41, 55, 0.5);
    border-color: rgba(255, 255, 255, 0.03);
}

.detail-modal .p-dialog-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
}

.app-dark .detail-modal .p-dialog-content {
    background: rgba(17, 24, 39, 0.95);
}

.detail-modal .p-dialog-header {
    background: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 1rem 1.25rem;
}

.app-dark .detail-modal .p-dialog-header {
    border-bottom-color: rgba(255, 255, 255, 0.05);
}
</style>
