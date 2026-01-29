<template>
    <Dialog 
        v-model:visible="isVisible" 
        modal 
        :dismissableMask="true" 
        @hide="$emit('close')"
        :pt="{
            root: { class: 'border-0 shadow-2xl' },
            header: { class: 'border-0 pb-0' },
            content: { class: 'pt-0' },
            footer: { class: 'border-0' }
        }"
        class="contact-modal"
        :style="{ width: '90vw', maxWidth: '28rem' }"
    >
        <template #header>
            <div class="w-full relative">
                <!-- Gradient accent bar - positioned at top of dialog -->
                <div class="absolute -top-6 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>
                
                <div class="flex items-start gap-4 pt-2">
                    <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 flex-shrink-0">
                        <i class="pi pi-envelope text-white text-xl"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-white m-0">{{ t('contactModal.title') }}</h2>
                        <p class="text-sm text-gray-500 dark:text-gray-400 m-0 mt-1">{{ t('contactModal.subtitle') }}</p>
                    </div>
                </div>
            </div>
        </template>

        <div class="py-4">
            <div class="flex flex-col gap-5">
                <div class="group">
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ t('contactModal.name_label') }}
                    </label>
                    <div class="relative">
                        <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors"></i>
                        <InputText 
                            id="name" 
                            v-model="formData.name"
                            class="w-full !pl-11 !py-3 !rounded-xl !border-gray-200 dark:!border-gray-700 !bg-gray-50 dark:!bg-gray-800/50 focus:!border-indigo-500 focus:!ring-2 focus:!ring-indigo-500/20 transition-all" 
                            :placeholder="t('contactModal.name_placeholder')" 
                        />
                    </div>
                </div>
                
                <div class="group">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ t('contactModal.email_label') }}
                    </label>
                    <div class="relative">
                        <i class="pi pi-at absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors"></i>
                        <InputText 
                            id="email" 
                            v-model="formData.email"
                            type="email"
                            class="w-full !pl-11 !py-3 !rounded-xl !border-gray-200 dark:!border-gray-700 !bg-gray-50 dark:!bg-gray-800/50 focus:!border-indigo-500 focus:!ring-2 focus:!ring-indigo-500/20 transition-all" 
                            :placeholder="t('contactModal.email_placeholder')" 
                        />
                    </div>
                </div>
                
                <div class="group">
                    <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {{ t('contactModal.message_label') }}
                    </label>
                    <Textarea 
                        id="message" 
                        v-model="formData.message"
                        class="w-full !py-3 !px-4 !rounded-xl !border-gray-200 dark:!border-gray-700 !bg-gray-50 dark:!bg-gray-800/50 focus:!border-indigo-500 focus:!ring-2 focus:!ring-indigo-500/20 transition-all !resize-none" 
                        :placeholder="t('contactModal.message_placeholder')" 
                        rows="4" 
                        autoResize
                    />
                </div>
            </div>
        </div>

        <template #footer>
            <div class="flex flex-col-reverse sm:flex-row gap-3 w-full">
                <Button 
                    :label="t('contactModal.cancel_button')" 
                    @click="$emit('close')" 
                    class="flex-1 sm:flex-none !py-3 !px-6 !rounded-xl !border-2 !border-gray-200 dark:!border-gray-700 !bg-transparent !text-gray-700 dark:!text-gray-300 hover:!bg-gray-100 dark:hover:!bg-gray-800 transition-all"
                />
                <Button 
                    :label="t('contactModal.send_button')" 
                    icon="pi pi-send" 
                    iconPos="right"
                    @click="handleSubmit"
                    :loading="loading"
                    class="flex-1 sm:flex-none !py-3 !px-6 !rounded-xl !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg hover:!shadow-indigo-500/25 transition-all"
                />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { ref, watch, reactive } from 'vue';
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
const loading = ref(false);

const formData = reactive({
    name: '',
    email: '',
    message: ''
});

const handleSubmit = async () => {
    loading.value = true;
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    loading.value = false;
    emit('close');
};

watch(() => props.visible, (newValue) => {
    isVisible.value = newValue;
    if (newValue) {
        // Reset form when opening
        formData.name = '';
        formData.email = '';
        formData.message = '';
    }
});
</script>

<style>
/* Modal styling - unscoped for PrimeVue overrides */
.contact-modal .p-dialog {
    border-radius: 1.5rem;
    overflow: hidden;
}

.contact-modal .p-dialog-header {
    background: transparent;
}

.contact-modal .p-dialog-content {
    background: transparent;
}

.contact-modal .p-dialog-footer {
    background: transparent;
    padding-top: 0;
}

.app-dark .contact-modal .p-dialog {
    background: rgb(17, 24, 39);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>