<template>
    <Dialog v-model:visible="isVisible" modal :header="t('contactModal.title')" :style="{ width: '35rem' }" :dismissableMask="true" @hide="$emit('close')">
        <template #header>
            <div class="flex items-center gap-3">
                <i class="pi pi-envelope text-2xl text-primary"></i>
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ t('contactModal.title') }}</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400 m-0">{{ t('contactModal.subtitle') }}</p>
                </div>
            </div>
        </template>

        <div class="p-4">
            <div class="flex flex-col gap-4">
                <div>
                    <label for="name" class="font-semibold text-gray-700 dark:text-gray-300">{{ t('contactModal.name_label') }}</label>
                    <InputText id="name" class="w-full mt-1" :placeholder="t('contactModal.name_placeholder')" />
                </div>
                <div>
                    <label for="email" class="font-semibold text-gray-700 dark:text-gray-300">{{ t('contactModal.email_label') }}</label>
                    <InputText id="email" class="w-full mt-1" :placeholder="t('contactModal.email_placeholder')" />
                </div>
                <div>
                    <label for="message" class="font-semibold text-gray-700 dark:text-gray-300">{{ t('contactModal.message_label') }}</label>
                    <Textarea id="message" class="w-full mt-1" :placeholder="t('contactModal.message_placeholder')" rows="4" />
                </div>
            </div>
        </div>

        <template #footer>
            <Button :label="t('contactModal.cancel_button')" text severity="secondary" @click="$emit('close')" />
            <Button :label="t('contactModal.send_button')" severity="success" icon="pi pi-send" @click="$emit('close')" />
        </template>
    </Dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

const { t } = useI18n();

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