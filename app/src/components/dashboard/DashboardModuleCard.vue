<script setup>
import { defineProps, computed } from 'vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Chart from 'primevue/chart';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const emit = defineEmits(['view-details']);
const props = defineProps({
    module: {
        type: Object,
        required: true
    }
});

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
        aspectRatio: 2.5,
        plugins: { legend: { display: false } },
        scales: {
            x: { ticks: { color: textColorSecondary, maxTicksLimit: 6, font: { size: 9 } }, grid: { display: false, drawBorder: false } },
            y: { ticks: { color: textColorSecondary, callback: (value) => Math.round(value), padding: 5, font: { size: 9 } }, grid: { color: surfaceBorder, drawBorder: false } }
        }
    };
});

const getSentimentColor = (sentiment) => {
    if (sentiment >= 70) return '#22c55e';
    if (sentiment >= 30) return '#f59e0b';
    return '#ef4444';
};

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
    <div @click="emit('view-details', module)" class="module-card group h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 flex flex-col cursor-pointer">
        
        <div class="mb-4">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ module.asset_symbol }}</h3>
                    <p class="text-lg text-gray-800 dark:text-gray-200 m-0 truncate">{{ module.name }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 m-0">{{ module.region }}</p>
                </div>
                <Tag v-if="typeof module.percentChange === 'number'" :severity="module.percentChange > 0 ? 'success' : 'danger'" class="font-semibold flex-shrink-0">
                    {{ module.percentChange > 0 ? '+' : '' }}{{ module.percentChange.toFixed(2) }}%
                </Tag>
            </div>
        </div>

        <div class="flex flex-col flex-grow">
            <div class="mb-4">
                <div class="flex items-center mb-1">
                    <div class="flex items-baseline">
                        <span class="text-xl text-gray-600 dark:text-gray-500 mr-1">$</span>
                        <span class="text-4xl font-bold text-gray-900 dark:text-gray-100">{{ module.lastPrice ? module.lastPrice.toFixed(2) : '0.00' }}</span>
                    </div>
                    <i v-if="module.marketStatus === 'closed'"
                       class="pi pi-clock text-lg text-gray-500 dark:text-gray-400 opacity-70 ml-2"
                       v-tooltip.top="'Market closed. Price from last close.'">
                    </i>
                </div>
            </div>
            
            <div class="relative h-40 my-4 bg-white/50 dark:bg-gray-900/50 rounded-md p-2 flex-shrink-0">
                <Chart type="line" :data="lineChartData" :options="lineChartOptions" />
            </div>

            <div class="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 dark:border-gray-700 mb-6 flex-shrink-0">
                <div class="text-center">
                    <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{ t('modulesDemo.cards.volume') }}</span>
                    <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">{{ formatVolume(module.volume) }}</span>
                </div>
                <div class="text-center">
                    <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{ t('modulesDemo.cards.market_cap') }}</span>
                    <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">{{ formatMarketCap(module.marketCap) }}</span>
                </div>
                <div class="text-center">
                    <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{ t('modulesDemo.cards.pe_ratio') }}</span>
                    <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">{{ module.peRatio ? module.peRatio.toFixed(2) : '...' }}</span>
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
                <Button icon="pi pi-bell" class="p-button-text p-button-sm p-button-rounded" v-tooltip="'Set custom price and sentiment alerts'" />
                <Button icon="pi pi-chart-line" class="p-button-text p-button-sm p-button-rounded" v-tooltip="'View Details'" />
                <Button icon="pi pi-cog" class="p-button-text p-button-sm p-button-rounded" v-tooltip="'Customize module settings'" />
            </div>
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