<template>
    <div id="pricing" class="py-12 px-4 md:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-gray-900 dark:text-gray-100 font-bold mb-3 text-4xl fade-up">{{ t('pricing.title') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto fade-up stagger-1">
                {{ t('pricing.subtitle') }}
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

            <div class="p-0 md:p-4 fade-up stagger-1">
                <div class="relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full">
                    <div class="text-gray-900 dark:text-gray-100 text-center mb-4">
                        <h3 class="text-3xl font-bold">{{ t('pricing.essential_name') }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 mt-2">{{ t('pricing.essential_desc') }}</p>
                    </div>
                    
                    <div class="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8">
                        <span class="text-2xl font-bold text-violet-600 dark:text-violet-400">3 {{ t('pricing.modules_label') }}</span>
                    </div>
                    
                    <div class="mb-8 flex flex-col items-center gap-4">
                        <div class="flex items-baseline">
                            <span class="text-5xl font-bold text-gray-900 dark:text-gray-100">{{ t('pricing.currency_symbol') }}{{ t('pricing.essential_price') }}</span>
                            <span class="text-gray-600 dark:text-gray-400 ml-2">{{ t('pricing.per_month') }}</span>
                        </div>
                        <Button 
                            :label="t('pricing.trial_button')" 
                            outlined
                            class="w-full !border-emerald-400 !text-emerald-400 hover:!bg-emerald-400 hover:!border-emerald-400 hover:!text-white"
                            @click="scrollToWaitlist"
                        />
                    </div>
                    
                    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                    
                    <ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow">
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.real_time') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-sparkles text-violet-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.sentiment') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.standard_support') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.works_on_all') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3"></i><span class="text-gray-400 dark:text-gray-500">{{ t('pricing.features.cross_investment') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3"></i><span class="text-gray-400 dark:text-gray-500">{{ t('pricing.features.custom_alerts') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3"></i><span class="text-gray-400 dark:text-gray-500">{{ t('pricing.features.export') }}</span></li>
                    </ul>
                </div>
            </div>

            <div class="p-0 md:p-4 fade-up stagger-2">
                <div class="relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-violet-500 duration-300 transition-all cursor-pointer h-full">
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2"><Chip :label="t('pricing.popular_badge')" class="bg-violet-600 text-white px-4 py-2" /></div>
                    <div class="text-gray-900 dark:text-gray-100 text-center mb-4">
                        <h3 class="text-3xl font-bold">{{ t('pricing.advanced_name') }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 mt-2">{{ t('pricing.advanced_desc') }}</p>
                    </div>
                    <div class="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8">
                        <span class="text-2xl font-bold text-violet-600 dark:text-violet-400">6 {{ t('pricing.modules_label') }}</span>
                    </div>
                    <div class="mb-8 flex flex-col items-center gap-4">
                        <div class="flex items-baseline">
                            <span class="text-5xl font-bold text-gray-900 dark:text-gray-100">{{ t('pricing.currency_symbol') }}{{ t('pricing.advanced_price') }}</span>
                            <span class="text-gray-600 dark:text-gray-400 ml-2">{{ t('pricing.per_month') }}</span>
                        </div>
                        <Button
                            :label="t('pricing.trial_button')"
                            class="w-full bg-emerald-500 border-emerald-500 text-white hover:bg-emerald-600 hover:border-emerald-600"
                            @click="scrollToWaitlist"
                        />
                    </div>
                    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                    <ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow">
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.real_time') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-sparkles text-violet-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.sentiment') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300"><strong>{{ t('pricing.features.priority_support') }}</strong></span></li>
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.works_on_all') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-sparkles text-violet-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300"><strong>{{ t('pricing.features.cross_investment') }}</strong></span></li>
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.custom_alerts') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3"></i><span class="text-gray-400 dark:text-gray-500">{{ t('pricing.features.export') }}</span></li>
                    </ul>
                </div>
            </div>
            
            <div class="p-0 md:p-4 fade-up stagger-3">
                <div class="relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full">
                    <div class="text-gray-900 dark:text-gray-100 text-center mb-4">
                        <h3 class="text-3xl font-bold">{{ t('pricing.professional_name') }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 mt-2">{{ t('pricing.professional_desc') }}</p>
                    </div>
                    <div class="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8">
                        <span class="text-2xl font-bold text-violet-600 dark:text-violet-400">9 {{ t('pricing.modules_label') }}</span>
                    </div>
                    <div class="mb-8 flex flex-col items-center gap-4">
                        <div class="flex items-baseline">
                             <span class="text-5xl font-bold text-gray-900 dark:text-gray-100">{{ t('pricing.currency_symbol') }}{{ t('pricing.professional_price') }}</span>
                            <span class="text-gray-600 dark:text-gray-400 ml-2">{{ t('pricing.per_month') }}</span>
                        </div>
                         <Button
                            :label="t('pricing.trial_button')"
                            outlined
                            class="w-full !border-emerald-400 !text-emerald-400 hover:!bg-emerald-400 hover:!border-emerald-400 hover:!text-white"
                            @click="scrollToWaitlist"
                        />
                    </div>
                    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                    <ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow">
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.real_time') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-sparkles text-violet-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.sentiment') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300"><strong>{{ t('pricing.features.dedicated_support') }}</strong></span></li>
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.works_on_all') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-sparkles text-violet-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300"><strong>{{ t('pricing.features.cross_investment') }}</strong></span></li>
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300">{{ t('pricing.features.custom_alerts') }}</span></li>
                        <li class="flex items-start"><i class="pi pi-check-circle text-green-500 text-xl mr-3"></i><span class="text-gray-700 dark:text-gray-300"><strong>{{ t('pricing.features.export') }}</strong></span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="mt-12 text-center bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{{ t('pricing.enterprise_title') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
                {{ t('pricing.enterprise_text') }}
            </p>
            <Button 
                :label="t('pricing.contact_button')"
                class="p-button-outlined p-button-lg !border-emerald-400 !text-emerald-400 hover:!bg-emerald-400 hover:!border-emerald-400 hover:!text-white"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="isContactModalVisible = true"
            />
        </div>

        <ContactSalesModal :visible="isContactModalVisible" @close="isContactModalVisible = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';
import Chip from 'primevue/chip';
import ContactSalesModal from './ContactSalesModal.vue';
import { useWaitlist } from '@/composables/useWaitlist';

const { t } = useI18n();
const router = useRouter();
const isContactModalVisible = ref(false);
const { scrollToWaitlist } = useWaitlist();
</script>