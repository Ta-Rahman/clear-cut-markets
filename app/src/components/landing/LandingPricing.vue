<template>
    <section id="pricing" class="relative py-16 sm:py-24 px-4 md:px-6 lg:px-8">
        <div class="relative max-w-5xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4 fade-up">
                    <i class="pi pi-tag"></i>
                    {{ t('pricing.badge') }}
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                    {{ t('pricing.title') }}
                    <span class="text-gradient">{{ t('pricing.title_highlight') }}</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto fade-up stagger-2">
                    {{ t('pricing.subtitle') }}
                </p>
            </div>

            <!-- Pricing Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-16 px-2 sm:px-4 md:px-0">
                <!-- Free Tier -->
                <div class="fade-up stagger-2">
                    <div class="pricing-card h-full">
                        <div class="mb-6">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ t('pricing.plans.free.name') }}</h3>
                            <p class="text-gray-500 text-sm">{{ t('pricing.plans.free.description') }}</p>
                        </div>
                        
                        <div class="mb-6">
                            <div class="flex items-baseline">
                                <span class="text-5xl font-bold text-gray-900 dark:text-white">€0</span>
                                <span class="text-gray-500 ml-2">{{ t('pricing.plans.free.period') }}</span>
                            </div>
                        </div>
                        
                        <Button 
                            :label="t('pricing.plans.free.cta')" 
                            outlined
                            class="w-full mb-8"
                            @click="scrollToWaitlist"
                        />
                        
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('pricing.plans.free.features.modules.title') }}</span>
                                    <p class="text-sm text-gray-500">{{ t('pricing.plans.free.features.modules.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('pricing.plans.free.features.ai.title') }}</span>
                                    <p class="text-sm text-gray-500">{{ t('pricing.plans.free.features.ai.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('pricing.plans.free.features.digest.title') }}</span>
                                    <p class="text-sm text-gray-500">{{ t('pricing.plans.free.features.digest.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3 opacity-50">
                                <i class="pi pi-times text-gray-400 mt-1"></i>
                                <div>
                                    <span class="text-gray-500">{{ t('pricing.plans.free.features.no_cross_asset') }}</span>
                                </div>
                            </li>
                            <li class="flex items-start gap-3 opacity-50">
                                <i class="pi pi-times text-gray-400 mt-1"></i>
                                <div>
                                    <span class="text-gray-500">{{ t('pricing.plans.free.features.no_priority') }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Pro Tier -->
                <div class="fade-up stagger-3">
                    <div class="pricing-card pro h-full relative">
                        <!-- Popular badge -->
                        <div class="absolute -top-4 left-1/2 -translate-x-1/2">
                            <span class="px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg">
                                {{ t('pricing.plans.pro.badge') }}
                            </span>
                        </div>
                        
                        <div class="mb-6 pt-2">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ t('pricing.plans.pro.name') }}</h3>
                            <p class="text-gray-500 text-sm">{{ t('pricing.plans.pro.description') }}</p>
                        </div>
                        
                        <div class="mb-6">
                            <div class="flex items-baseline">
                                <span class="text-5xl font-bold text-gray-900 dark:text-white">€16</span>
                                <span class="text-gray-500 ml-2">{{ t('pricing.plans.pro.period') }}</span>
                            </div>
                            <p class="text-sm text-green-600 dark:text-green-400 mt-1">{{ t('pricing.plans.pro.trial') }}</p>
                        </div>
                        
                        <Button 
                            :label="t('pricing.plans.pro.cta')"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            class="w-full mb-8 !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0"
                            @click="scrollToWaitlist"
                        />
                        
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('pricing.plans.pro.features.modules.title') }}</span>
                                    <p class="text-sm text-gray-500">{{ t('pricing.plans.pro.features.modules.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('pricing.plans.pro.features.ai.title') }}</span>
                                    <p class="text-sm text-gray-500">{{ t('pricing.plans.pro.features.ai.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('pricing.plans.pro.features.news.title') }}</span>
                                    <p class="text-sm text-gray-500">{{ t('pricing.plans.pro.features.news.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-star-fill text-amber-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('pricing.plans.pro.features.correlation.title') }}</span>
                                    <p class="text-sm text-gray-500">{{ t('pricing.plans.pro.features.correlation.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('pricing.plans.pro.features.support.title') }}</span>
                                    <p class="text-sm text-gray-500">{{ t('pricing.plans.pro.features.support.description') }}</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('pricing.plans.pro.features.thresholds.title') }}</span>
                                    <p class="text-sm text-gray-500">{{ t('pricing.plans.pro.features.thresholds.description') }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Trust badges -->
            <div class="text-center fade-up stagger-4">
                <div class="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                    <div class="flex items-center gap-2">
                        <i class="pi pi-credit-card text-gray-400"></i>
                        <span>{{ t('pricing.trust_badges.no_card') }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="pi pi-sync text-gray-400"></i>
                        <span>{{ t('pricing.trust_badges.cancel') }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="pi pi-lock text-gray-400"></i>
                        <span>{{ t('pricing.trust_badges.secure') }}</span>
                    </div>
                </div>
            </div>

            <!-- Enterprise CTA -->
            <div class="mt-16 fade-up stagger-5">
                <div class="enterprise-cta relative overflow-hidden rounded-2xl p-8 md:p-10">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    
                    <div class="relative flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 class="enterprise-title text-xl font-bold mb-2">{{ t('pricing.enterprise.title') }}</h3>
                            <p class="enterprise-text text-sm">{{ t('pricing.enterprise.description') }}</p>
                        </div>
                        <Button 
                            :label="t('pricing.enterprise.cta')"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            outlined
                            class="whitespace-nowrap"
                            @click="isContactModalVisible = true"
                        />
                    </div>
                </div>
            </div>
        </div>

        <ContactSalesModal :visible="isContactModalVisible" @close="isContactModalVisible = false" />
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';
import ContactSalesModal from './ContactSalesModal.vue';
import { useWaitlist } from '@/composables/useWaitlist';

const { t } = useI18n();
const isContactModalVisible = ref(false);
const { scrollToWaitlist } = useWaitlist();
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #22c55e 0%, #10b981 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.pricing-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
}

.pricing-card.pro {
    border: 2px solid transparent;
    background: 
        linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)) padding-box,
        linear-gradient(135deg, #6366f1, #8b5cf6) border-box;
    box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.2);
}
</style>

<style>
/* Dark mode styles - unscoped to work with global .app-dark class */
.app-dark .pricing-card {
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
}

.app-dark .pricing-card.pro {
    background: 
        linear-gradient(rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.95)) padding-box,
        linear-gradient(135deg, #6366f1, #8b5cf6) border-box;
}

/* Enterprise CTA theme styles */
.enterprise-cta {
    background: linear-gradient(to bottom right, #f3f4f6, #e5e7eb);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.app-dark .enterprise-cta {
    background: linear-gradient(to bottom right, #1f2937, #111827);
    border-color: rgba(255, 255, 255, 0.1);
}

.enterprise-title {
    color: #111827;
}

.app-dark .enterprise-title {
    color: #ffffff;
}

.enterprise-text {
    color: #4b5563;
}

.app-dark .enterprise-text {
    color: #9ca3af;
}
</style>
