<template>
    <Dialog v-model:visible="isVisible" modal :header="stockData.symbol" :style="{ width: '45rem' }" :dismissableMask="true" @hide="$emit('close')">
        <template #header>
            <div class="flex items-center gap-3">
                <i class="pi pi-chart-line text-2xl text-primary"></i>
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ stockData.name }} ({{ stockData.symbol }})</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400 m-0">{{ t('stockModal.subtitle') }}</p>
                </div>
            </div>
        </template>

        <div class="flex flex-col gap-6 p-4">
            <div>
                <Chart type="line" :data="chartData" :options="chartOptions" />
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('stockModal.price') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">${{ stockData.price }}</p>
                </div>
                 <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('stockModal.market_cap') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">${{ stockData.marketCap }}</p>
                </div>
                 <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('stockModal.pe_ratio') }}</p>
                    <p class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ stockData.peRatio }}</p>
                </div>
                 <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('stockModal.sentiment') }}</p>
                    <p class="text-xl font-bold text-green-500">{{ stockData.sentiment }}% {{ t('stockModal.bullish') }}</p>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Dialog from 'primevue/dialog';
import Chart from 'primevue/chart';

const { t } = useI18n();

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    stockData: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['close']);
const isVisible = ref(props.visible);

watch(() => props.visible, (newValue) => {
    isVisible.value = newValue;
});

// Placeholder Chart Data & Options
const chartData = computed(() => ({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Stock Price',
            data: props.stockData.chart,
            fill: true,
            borderColor: '#6366F1',
            tension: 0.4,
            backgroundColor: 'rgba(99, 102, 241, 0.2)'
        }
    ]
}));

const chartOptions = ref({
    maintainAspectRatio: false,
    aspectRatio: 2, // Adjusted for a wider chart
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        x: {
            ticks: { color: '#6B7280' },
            grid: { color: '#E5E7EB10' }
        },
        y: {
            ticks: { color: '#6B7280' },
            grid: { color: '#E5E7EB10' }
        }
    }
});
</script>