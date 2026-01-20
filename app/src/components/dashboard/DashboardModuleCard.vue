<script setup>
import { defineProps, computed } from 'vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Chart from 'primevue/chart';
import { useI18n } from 'vue-i18n';
import { useChartConfig } from '@/composables/useChartConfig';
import { formatMarketCap, formatVolume, getDisplaySymbol, isCryptoSymbol } from '@/utils/formatters';

const { t } = useI18n();
const emit = defineEmits(['view-details']);
const props = defineProps({
    module: {
        type: Object,
        required: true
    }
});

// Use the shared chart config composable
const moduleRef = computed(() => props.module);
const { lineChartData, lineChartOptions } = useChartConfig(moduleRef);

// Computed property for display symbol (handles crypto formatting)
const displaySymbol = computed(() => {
    return getDisplaySymbol(props.module.asset_symbol);
});

// Check if this is a crypto asset
const isCrypto = computed(() => {
    return isCryptoSymbol(props.module.asset_symbol);
});

// Format price based on asset type (crypto may need more decimal places)
const formattedPrice = computed(() => {
    const price = props.module.lastPrice;
    if (!price) return '...';
    
    // For low-value crypto, show more decimal places
    if (isCrypto.value && price < 1) {
        return price.toFixed(6);
    } else if (isCrypto.value && price < 100) {
        return price.toFixed(4);
    }
    return price.toFixed(2);
});

const getSentimentColor = (sentiment) => {
    if (sentiment >= 70) return '#22c55e';
    if (sentiment >= 30) return '#f59e0b';
    return '#ef4444';
};

const handleAlertsClick = () => {
    console.log('Alerts button clicked for:', props.module.asset_symbol);
    // Future logic for alert modal will go here
};

const handleSettingsClick = () => {
    console.log('Settings button clicked for:', props.module.asset_symbol);
    // Future logic for settings modal will go here
};
</script>

<template>
    <div @click="emit('view-details', module)" class="module-card group h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 flex flex-col cursor-pointer">
        
        <div class="mb-4">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ displaySymbol }}</h3>
                    <p class="text-lg text-gray-800 dark:text-gray-200 m-0 truncate">{{ module.name }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 m-0">{{ isCrypto ? 'Cryptocurrency' : module.region }}</p>
                </div>
                <Tag v-if="typeof module.percentChange === 'number'" :severity="module.percentChange > 0 ? 'success' : 'danger'" class="font-semibold flex-shrink-0">
                    {{ module.percentChange > 0 ? '+' : '' }}{{ module.percentChange.toFixed(2) }}%
                </Tag>
            </div>
        </div>

        <div class="mb-4">
            <div class="flex items-center mb-1">
                <div class="flex items-baseline">
                    <span class="text-xl text-gray-600 dark:text-gray-500 mr-1">$</span>
                    <span class="text-4xl font-bold text-gray-900 dark:text-gray-100">{{ formattedPrice }}</span>
                </div>
                <!-- Show 24/7 indicator for crypto, clock for closed stock markets -->
                <i v-if="isCrypto && module.marketStatus === 'open'"
                   class="pi pi-circle-fill text-xs text-green-500 opacity-70 ml-2"
                   v-tooltip.top="'Crypto markets trade 24/7'">
                </i>
                <i v-else-if="module.marketStatus === 'closed'"
                   class="pi pi-clock text-lg text-gray-500 dark:text-gray-400 opacity-70 ml-2"
                   v-tooltip.top="'Market closed. Price from last close.'">
                </i>
            </div>
        </div>
        
        <div class="relative h-40 my-4 bg-white/50 dark:bg-gray-900/50 rounded-md p-2 flex-shrink-0">
            <Chart type="line" :data="lineChartData" :options="lineChartOptions" />
        </div>

        <!-- Stats grid - adapts based on asset type -->
        <div class="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 dark:border-gray-700 mb-6 flex-shrink-0">
            <div class="text-center">
                <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{ t('modulesDemo.cards.volume') }}</span>
                <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">{{ formatVolume(module.volume) }}</span>
            </div>
            
            <!-- For stocks/ETFs: show Market Cap -->
            <div v-if="!isCrypto" class="text-center">
                <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{ t('modulesDemo.cards.market_cap') }}</span>
                <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">{{ formatMarketCap(module.marketCap) }}</span>
            </div>
            <!-- For crypto: show 24h High -->
            <div v-else class="text-center">
                <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">24h High</span>
                <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">
                    ${{ module.dayHigh ? module.dayHigh.toFixed(2) : '...' }}
                </span>
            </div>
            
            <!-- For stocks/ETFs: show P/E Ratio -->
            <div v-if="!isCrypto" class="text-center">
                <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{ t('modulesDemo.cards.pe_ratio') }}</span>
                <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">{{ module.peRatio ? module.peRatio.toFixed(2) : '...' }}</span>
            </div>
            <!-- For crypto: show 24h Low -->
            <div v-else class="text-center">
                <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">24h Low</span>
                <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">
                    ${{ module.dayLow ? module.dayLow.toFixed(2) : '...' }}
                </span>
            </div>
        </div>
        
        <div class="mb-4 flex flex-col flex-grow">
            <div class="flex items-center gap-2 mb-3">
                <i class="pi pi-sparkles text-primary"></i>
                <span class="font-semibold text-gray-900 dark:text-gray-100">{{ t('dashboard.card.ai_analysis') }}</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ module.insight }}</p>
            
            <div class="mt-auto bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs text-gray-500 dark:text-gray-400">{{ t('dashboard.card.sentiment') }}</span>
                    <span class="text-xs font-bold text-gray-900 dark:text-gray-100">{{ module.sentiment }}% {{ t('dashboard.card.bullish') }}</span>
                </div>
                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500"
                         :style="{ width: module.sentiment + '%', backgroundColor: getSentimentColor(module.sentiment) }">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="flex justify-center gap-4 pt-2 flex-shrink-0">
            <Button @click.stop="handleAlertsClick" icon="pi pi-bell" class="p-button-text p-button-sm p-button-rounded" v-tooltip="'Set custom price and sentiment alerts'" />
            <Button icon="pi pi-chart-line" class="p-button-text p-button-sm p-button-rounded" v-tooltip="'View Details'" />
            <Button @click.stop="handleSettingsClick" icon="pi pi-cog" class="p-button-text p-button-sm p-button-rounded" v-tooltip="'Customize module settings'" />
        </div>
    </div>
</template>

<style scoped>
.module-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}
.module-card:hover::before {
    transform: scaleX(1);
}

:deep(.p-chart) {
    height: 100%;
    width: 100%;
}
</style>
