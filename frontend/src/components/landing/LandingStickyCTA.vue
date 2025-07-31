<template>
    <div class="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 shadow-lg z-40">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="text-center md:text-left">
                <p class="font-semibold">{{ t('stickyCTA.title') }}</p>
                <p class="text-sm opacity-90">{{ t('stickyCTA.subtitle') }}</p>
            </div>
            <Button 
                :label="t('stickyCTA.button_beta')"
                class="bg-white text-violet-600 hover:bg-gray-100 border-0 font-semibold"
                @click="scrollToWaitlist"
            />
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';
import { useWaitlist } from '@/composables/useWaitlist'; // <-- FIX: Import our new composable

const { t } = useI18n();
const { scrollToWaitlist } = useWaitlist(); // <-- FIX: Initialize the function
</script>

<style scoped>
/* Smooth slide animation */
.sticky-slide-enter-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky-slide-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky-slide-enter-from {
    transform: translateY(100%);
    opacity: 0;
}

.sticky-slide-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>