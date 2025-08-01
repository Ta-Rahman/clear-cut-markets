<template>
    <div>
        <div class="px-4 py-8 md:px-6 lg:px-8">
            <div class="text-center mb-6">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up">{{ t('modulesDemo.title') }}</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1">
                    {{ t('modulesDemo.subtitle') }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-500 mt-2 fade-up stagger-2">{{ t('modulesDemo.placeholder_text') }}</p>
            </div>
            
            <div class="max-w-7xl mx-auto py-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div v-for="(module, index) in translatedDemoModules" :key="module.symbol" 
                         :class="[
                             'p-4',
                             'fade-up',
                             `stagger-${index + 2}`
                         ]">
                        
                        <div class="module-card group h-full bg-white dark:bg-gray-800 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 flex flex-col">
                            
                            <div class="mb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ module.symbol }}</h3>
                                        <p class="text-sm text-gray-600 dark:text-gray-400 m-0">{{ module.name }}</p>
                                    </div>
                                    <Tag :severity="module.change > 0 ? 'success' : 'danger'" class="font-semibold">
                                        {{ module.change > 0 ? '+' : '' }}{{ module.change }}%
                                    </Tag>
                                </div>
                            </div>
                            
                            <div class="mb-4">
                                <div class="flex items-baseline mb-1">
                                    <span class="text-xl text-gray-600 dark:text-gray-500 mr-1">$</span>
                                    <span class="text-4xl font-bold text-gray-900 dark:text-gray-100">{{ module.price }}</span>
                                </div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">
                                    <span>{{ module.changeAmount }}</span>
                                    <span class="ml-2">{{ t('modulesDemo.cards.today') }}</span>
                                </div>
                            </div>
                            
                            <div class="h-16 my-4 bg-gray-50 dark:bg-gray-700/50 rounded-md p-2 flex-shrink-0">
                                <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="w-full h-full">
                                    <line x1="0" y1="20" x2="100" y2="20" stroke="#f0f0f0" stroke-width="1"/>
                                    <polyline
                                        :points="module.simpleChart"
                                        fill="none"
                                        :stroke="module.change > 0 ? '#22c55e' : '#ef4444'"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        :d="`M ${module.simpleChart} L 100,40 L 0,40 Z`"
                                        :fill="module.change > 0 ? '#22c55e20' : '#ef444420'"
                                    />
                                </svg>
                            </div>
                            
                            <div class="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 dark:border-gray-700 mb-6 flex-shrink-0">
                                <div class="text-center">
                                    <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{ t('modulesDemo.cards.volume') }}</span>
                                    <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">{{ module.volume }}</span>
                                </div>
                                <div class="text-center">
                                    <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{ t('modulesDemo.cards.market_cap') }}</span>
                                    <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">{{ module.marketCap }}</span>
                                </div>
                                <div class="text-center">
                                    <span class="block text-xs text-gray-600 dark:text-gray-400 mb-1">{{ t('modulesDemo.cards.pe_ratio') }}</span>
                                    <span class="block text-base font-semibold text-gray-900 dark:text-gray-100">{{ module.peRatio }}</span>
                                </div>
                            </div>

                            <div class="mb-4 flex flex-col flex-grow">
                                <div class="flex items-center gap-2 mb-3">
                                    <i class="pi pi-sparkles text-primary"></i>
                                    <span class="font-semibold text-gray-900 dark:text-gray-100">{{ t('modulesDemo.cards.ai_analysis') }}</span>
                                </div>
                                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ module.insight }}</p>
                                
                                <div class="mt-auto bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                                    <div class="flex justify-between items-center mb-2">
                                        <span class="text-xs text-gray-500 dark:text-gray-400">{{ t('modulesDemo.cards.sentiment') }}</span>
                                        <span class="text-xs font-bold text-gray-900 dark:text-gray-100">{{ module.sentiment }}% {{ t('modulesDemo.cards.bullish') }}</span>
                                    </div>
                                    <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div class="h-full rounded-full transition-all duration-500"
                                             :style="{
                                                 width: module.sentiment + '%',
                                                 backgroundColor: getSentimentColor(module.sentiment)
                                             }">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
        <div class="flex justify-center gap-4 pt-2">
            <Button icon="pi pi-bell" class="p-button-text p-button-sm p-button-rounded" v-tooltip="t('tooltips.alerts')" />
            <Button @click="openModal(module)" icon="pi pi-chart-line" class="p-button-text p-button-sm p-button-rounded" v-tooltip="t('tooltips.details')" />
            <Button icon="pi pi-cog" class="p-button-text p-button-sm p-button-rounded" v-tooltip="t('tooltips.settings')" />
        </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-8">
                    <Button :label="t('modulesDemo.dashboard_button')" class="p-button-outlined p-button-lg" disabled />
                    <p class="text-gray-600 dark:text-gray-400 mt-3">{{ t('modulesDemo.waitlist_prompt') }}</p>
                </div>
            </div>
        </div>
        <StockPreviewModal :visible="isModalVisible" :stock-data="selectedStock" @close="isModalVisible = false" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import StockPreviewModal from './StockPreviewModal.vue';

const { t } = useI18n();
const hoveredModule = ref(null);
const isModalVisible = ref(false);
const selectedStock = ref({});

const demoModules = ref([
    {
        symbol: 'AAPL', name: 'Apple Inc.', price: '195.89', change: 2.5, changeAmount: '+$4.73',
        simpleChart: '0,30 10,25 20,27 30,22 40,18 50,20 60,15 70,12 80,10 90,8 100,5',
        volume: '52.3M', marketCap: '3.04T', peRatio: '32.1', sentiment: 78,
        insightKey: 'aapl_insight',
        chart: [180, 185, 182, 188, 192, 195]
    },
    {
        symbol: 'BTC', name: 'Bitcoin', price: '43,250', change: -1.2, changeAmount: '-$525.50',
        simpleChart: '0,5 10,8 20,10 30,15 40,12 50,18 60,20 70,25 80,23 90,28 100,30',
        volume: '$24.8B', marketCap: '847B', peRatio: 'N/A', sentiment: 45,
        insightKey: 'btc_insight',
        chart: [42000, 42500, 41800, 43000, 43500, 43250]
    },
    {
        symbol: 'TSLA', name: 'Tesla Inc.', price: '238.45', change: 3.8, changeAmount: '+$8.73',
        simpleChart: '0,25 10,20 20,18 30,15 40,12 50,10 60,8 70,6 80,5 90,3 100,2',
        volume: '118.2M', marketCap: '758B', peRatio: '71.2', sentiment: 85,
        insightKey: 'tsla_insight',
        chart: [220, 225, 230, 228, 235, 238]
    }
]);

const translatedDemoModules = computed(() => {
    return demoModules.value.map(module => ({
        ...module,
        insight: t(`modulesDemo.cards.${module.insightKey}`)
    }));
});

const getSentimentColor = (sentiment) => {
    if (sentiment >= 70) return '#22c55e';
    if (sentiment >= 30) return '#f59e0b';
    return '#ef4444';
};

const openModal = (moduleData) => {
    selectedStock.value = moduleData;
    isModalVisible.value = true;
};
</script>

<style scoped>
/* Styles remain the same */
.module-card {
    will-change: transform, box-shadow;
    transform: translateZ(0);
    backface-visibility: hidden;
}
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
@media (hover: hover) {
    .module-card:hover {
        transform: translateY(-4px) translateZ(0);
    }
}
</style>