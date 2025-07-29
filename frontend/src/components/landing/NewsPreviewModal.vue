<template>
    <Dialog v-model:visible="isVisible" modal header="AI News Analysis" :style="{ width: '40rem' }" :dismissableMask="true" @hide="$emit('close')">
        <template #header>
            <div class="flex items-center gap-3">
                <i class="pi pi-globe text-2xl text-primary"></i>
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">AI News Analysis</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400 m-0">Placeholder Data - Live analysis in the full version.</p>
                </div>
            </div>
        </template>

        <div class="p-4">
            <div class="mb-6">
                <p class="text-sm text-gray-500 dark:text-gray-400">Source Article</p>
                <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">"Global Chip Shortage Worsens, Impacting Major Tech Sectors"</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">Global Tech Times</p>
            </div>

            <div class="space-y-4">
                <div>
                    <p class="font-semibold text-gray-800 dark:text-gray-200 mb-2">AI-Generated Summary:</p>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        The article highlights a deepening global semiconductor shortage, primarily affecting automotive and consumer electronics. Supply chain disruptions are expected to persist, leading to potential production delays and increased costs for major manufacturers like Tesla and NVIDIA.
                    </p>
                </div>
                 <div>
                    <p class="font-semibold text-gray-800 dark:text-gray-200 mb-2">Sentiment Analysis:</p>
                    <div class="bg-red-100/50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300 rounded-lg p-3">
                        <p class="font-bold">Highly Negative (85% Confidence)</p>
                        <p class="text-sm">The overall sentiment is strongly bearish due to widespread discussion of production cuts and financial losses.</p>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import Dialog from 'primevue/dialog';
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); // This line ensures the component is i18n-aware

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

const isVisible = ref(props.visible);

watch(() => props.visible, (newValue) => {
    isVisible.value = newValue;
});
</script>