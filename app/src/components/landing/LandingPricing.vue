<template>
    <section id="pricing" class="relative py-16 sm:py-24 px-4 md:px-6 lg:px-8">
        <div class="relative max-w-6xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4 fade-up">
                    <i class="pi pi-tag"></i>
                    Simple Pricing
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                    Choose Your
                    <span class="text-gradient">Plan</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto fade-up stagger-2">
                    {{ t('pricing.subtitle') }}
                </p>
            </div>

            <!-- Pricing Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                <!-- Essential -->
                <div class="fade-up stagger-2">
                    <div class="pricing-card h-full">
                        <div class="text-center mb-6">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ t('pricing.essential_name') }}</h3>
                            <p class="text-gray-500 text-sm">{{ t('pricing.essential_desc') }}</p>
                        </div>
                        
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-semibold text-sm mb-4">
                                <i class="pi pi-th-large text-xs"></i>
                                3 Modules
                            </div>
                            <div class="flex items-baseline justify-center">
                                <span class="text-4xl font-bold text-gray-900 dark:text-white">{{ t('pricing.currency_symbol') }}{{ t('pricing.essential_price') }}</span>
                                <span class="text-gray-500 ml-2">{{ t('pricing.per_month') }}</span>
                            </div>
                        </div>
                        
                        <Button 
                            :label="t('pricing.trial_button')" 
                            outlined
                            class="w-full mb-6"
                            @click="scrollToWaitlist"
                        />
                        
                        <ul class="space-y-3">
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">{{ t('pricing.features.real_time') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">{{ t('pricing.features.sentiment') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">{{ t('pricing.features.standard_support') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">{{ t('pricing.features.works_on_all') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm text-gray-400">
                                <i class="pi pi-times text-gray-300 dark:text-gray-600"></i>
                                <span>{{ t('pricing.features.custom_alerts') }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Advanced (Popular) -->
                <div class="fade-up stagger-3">
                    <div class="pricing-card popular h-full relative">
                        <div class="absolute -top-4 left-1/2 -translate-x-1/2">
                            <span class="px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg">
                                {{ t('pricing.popular_badge') }}
                            </span>
                        </div>
                        
                        <div class="text-center mb-6 pt-2">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ t('pricing.advanced_name') }}</h3>
                            <p class="text-gray-500 text-sm">{{ t('pricing.advanced_desc') }}</p>
                        </div>
                        
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-semibold text-sm mb-4">
                                <i class="pi pi-th-large text-xs"></i>
                                6 Modules
                            </div>
                            <div class="flex items-baseline justify-center">
                                <span class="text-4xl font-bold text-gray-900 dark:text-white">{{ t('pricing.currency_symbol') }}{{ t('pricing.advanced_price') }}</span>
                                <span class="text-gray-500 ml-2">{{ t('pricing.per_month') }}</span>
                            </div>
                        </div>
                        
                        <Button 
                            :label="t('pricing.trial_button')"
                            class="w-full mb-6 !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0"
                            @click="scrollToWaitlist"
                        />
                        
                        <ul class="space-y-3">
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">{{ t('pricing.features.real_time') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">{{ t('pricing.features.sentiment') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400 font-medium">{{ t('pricing.features.priority_support') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">{{ t('pricing.features.works_on_all') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400 font-medium">{{ t('pricing.features.cross_investment') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">{{ t('pricing.features.custom_alerts') }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Professional -->
                <div class="fade-up stagger-4">
                    <div class="pricing-card h-full">
                        <div class="text-center mb-6">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ t('pricing.professional_name') }}</h3>
                            <p class="text-gray-500 text-sm">{{ t('pricing.professional_desc') }}</p>
                        </div>
                        
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-semibold text-sm mb-4">
                                <i class="pi pi-th-large text-xs"></i>
                                9 Modules
                            </div>
                            <div class="flex items-baseline justify-center">
                                <span class="text-4xl font-bold text-gray-900 dark:text-white">{{ t('pricing.currency_symbol') }}{{ t('pricing.professional_price') }}</span>
                                <span class="text-gray-500 ml-2">{{ t('pricing.per_month') }}</span>
                            </div>
                        </div>
                        
                        <Button 
                            :label="t('pricing.trial_button')"
                            outlined
                            class="w-full mb-6"
                            @click="scrollToWaitlist"
                        />
                        
                        <ul class="space-y-3">
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">Everything in Advanced</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400 font-medium">{{ t('pricing.features.dedicated_support') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400 font-medium">{{ t('pricing.features.export') }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">API access</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <i class="pi pi-check text-green-500"></i>
                                <span class="text-gray-600 dark:text-gray-400">Advanced analytics</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Enterprise CTA -->
            <div class="fade-up stagger-5">
                <div class="enterprise-cta relative overflow-hidden rounded-2xl p-8 md:p-12">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    
                    <div class="relative flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 class="enterprise-title text-2xl font-bold mb-2">{{ t('pricing.enterprise_title') }}</h3>
                            <p class="enterprise-text max-w-lg">{{ t('pricing.enterprise_text') }}</p>
                        </div>
                        <Button 
                            :label="t('pricing.contact_button')"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            class="!bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !text-white !shadow-lg hover:!shadow-indigo-500/25 whitespace-nowrap"
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

.pricing-card.popular {
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

.app-dark .pricing-card.popular {
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
