<template>
    <Dialog v-model:visible="isVisible" modal :header="t('newsModal.title')" :style="{ width: '40rem' }" :dismissableMask="true" @hide="$emit('close')">
        <template #header>
            <div class="flex items-center gap-3">
                <i class="pi pi-globe text-2xl text-primary"></i>
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ t('newsModal.title') }}</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400 m-0">{{ t('newsModal.subtitle') }}</p>
                </div>
            </div>
        </template>

        <div class="p-4">
            <div class="mb-6">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('newsModal.source_article') }}</p>
                <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">"{{ t('usp.news_title') }}"</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('newsModal.source_name') }}</p>
            </div>

            <div class="space-y-4">
                <div>
                    <p class="font-semibold text-gray-800 dark:text-gray-200 mb-2">{{ t('newsModal.summary') }}</p>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                       {{ t('newsModal.summary_text') }}
                    </p>
                </div>
                 <div>
                    <p class="font-semibold text-gray-800 dark:text-gray-200 mb-2">{{ t('newsModal.sentiment_analysis') }}</p>
                    <div class="bg-red-100/50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300 rounded-lg p-3">
                        <p class="font-bold">{{ t('newsModal.sentiment_title') }}</p>
                        <p class="text-sm">{{ t('newsModal.sentiment_text') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Dialog from 'primevue/dialog';

const { t } = useI18n();

const props = defineProps({
    visible: { type: Boolean, default: false }
});

const emit = defineEmits(['close']);
const isVisible = ref(props.visible);

watch(() => props.visible, (newValue) => { isVisible.value = newValue; });
</script>