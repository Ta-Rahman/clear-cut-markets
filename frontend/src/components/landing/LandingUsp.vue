<template>
    <div>
        <div class="px-4 py-16 md:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up">{{ t('usp.title') }}</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1">
                    {{ t('usp.subtitle') }}
                </p>
            </div>

            <div class="max-w-5xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 fade-up stagger-2">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

                    <div class="flex flex-col items-center text-center">
                        <i class="pi pi-globe text-4xl text-blue-500 mb-4"></i>
                        <p class="text-xl font-semibold text-gray-800 dark:text-gray-200">{{ t('usp.market_event') }}</p>
                        <div @click="openNewsModal" class="mt-4 p-4 w-full h-full border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl">
                            <p class="text-lg font-bold text-gray-900 dark:text-gray-100">"{{ t('usp.news_title') }}"</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">{{ t('usp.news_source') }}</p>
                        </div>
                    </div>

                    <div class="flex flex-col items-center text-center">
                        <i class="pi pi-chart-pie text-4xl text-green-500 mb-4"></i>
                        <p class="text-xl font-semibold text-gray-800 dark:text-gray-200">{{ t('usp.impact_title') }}</p>
                        <div class="flex justify-center gap-4 mt-4 w-full h-full">
                            <div @click="openStockModal('TSLA')" class="p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl">
                                <p class="text-lg font-bold text-gray-900 dark:text-gray-100">TSLA</p>
                                <div class="flex items-center justify-center gap-2 mt-1">
                                    <span class="text-base font-semibold text-red-500/90 dark:text-red-400/90">{{ t('usp.potential_decline') }}</span>
                                    <i class="pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"></i>
                                </div>
                            </div>
                            <div @click="openStockModal('NVDA')" class="p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl">
                                <p class="text-lg font-bold text-gray-900 dark:text-gray-100">NVDA</p>
                                <div class="flex items-center justify-center gap-2 mt-1">
                                    <span class="text-base font-semibold text-red-500/90 dark:text-red-400/90">{{ t('usp.potential_decline') }}</span>
                                    <i class="pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div class="bg-violet-100/50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-500/30 text-violet-800 dark:text-violet-300 rounded-lg p-4 flex items-center gap-4">
                        <i class="pi pi-sparkles text-2xl"></i>
                        <div>
                            <p class="font-bold">{{ t('usp.alert_title') }}</p>
                            <p> 
                                {{ t('usp.alert_text') }}
                                <button @click="openNewsModal" class="font-semibold underline hover:text-violet-200">{{ t('usp.alert_link') }}</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <StockPreviewModal :visible="isStockModalVisible" :stock-data="selectedStock" @close="isStockModalVisible = false" />
        <NewsPreviewModal :visible="isNewsModalVisible" @close="isNewsModalVisible = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import StockPreviewModal from './StockPreviewModal.vue';
import NewsPreviewModal from './NewsPreviewModal.vue';

const { t } = useI18n();
const isStockModalVisible = ref(false);
const isNewsModalVisible = ref(false);
const selectedStock = ref({});

const placeholderData = {
    TSLA: { symbol: 'TSLA', name: 'Tesla Inc.', price: '238.45', marketCap: '758B', peRatio: '71.2', sentiment: 85, chart: [220, 225, 230, 228, 235, 238] },
    NVDA: { symbol: 'NVDA', name: 'NVIDIA Corp.', price: '471.16', marketCap: '1.16T', peRatio: '61.5', sentiment: 78, chart: [450, 455, 465, 460, 472, 471] }
};

const openStockModal = (symbol) => {
    selectedStock.value = placeholderData[symbol];
    isStockModalVisible.value = true;
};

const openNewsModal = () => {
    isNewsModalVisible.value = true;
};
</script>