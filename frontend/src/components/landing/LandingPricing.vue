<template>
    <div id="pricing" class="py-12 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div class="text-center mb-12">
            <h2 class="text-gray-900 dark:text-gray-100 font-bold mb-3 text-4xl fade-up">Simple, Transparent Pricing</h2>
            <p class="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto fade-up stagger-1">
                Choose the plan that fits your portfolio. 14-day free trial on all plans.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

            <div class="p-0 md:p-4 fade-up stagger-1">
                <div class="relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full">
                    <div class="text-gray-900 dark:text-gray-100 text-center mb-4">
                        <h3 class="text-3xl font-bold">Essential</h3>
                        <p class="text-gray-600 dark:text-gray-400 mt-2">For new investors</p>
                    </div>
                    
                    <div class="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8">
                        <span class="text-2xl font-bold text-violet-600 dark:text-violet-400">3 Modules</span>
                    </div>
                    
                    <div class="mb-8 flex flex-col items-center gap-4">
                        <div class="flex items-baseline">
                            <span class="text-5xl font-bold text-gray-900 dark:text-gray-100">$19</span>
                            <span class="text-gray-600 dark:text-gray-400 ml-2">/ month</span>
                        </div>
                        <Button 
                            label="Start Free Trial" 
                            outlined
                            class="w-full"
                        />
                    </div>
                    
                    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                    
                    <ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow">
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">Real-time Price Data</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">AI Sentiment Analysis</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">Standard Support</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">Works on Desktop, Tablet & Mobile</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-400 dark:text-gray-500">Cross-Investment Correlation Alerts</span>
                        </li>
                         <li class="flex items-start">
                            <i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-400 dark:text-gray-500">Customizable Alert Thresholds</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-400 dark:text-gray-500">Export Data & Reports</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="p-0 md:p-4 fade-up stagger-2">
                <div class="relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-violet-500 duration-300 transition-all cursor-pointer h-full">
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Chip label="Most Popular" class="bg-violet-600 text-white px-4 py-2" />
                    </div>
                    
                    <div class="text-gray-900 dark:text-gray-100 text-center mb-4">
                        <h3 class="text-3xl font-bold">Advanced</h3>
                        <p class="text-gray-600 dark:text-gray-400 mt-2">For active investors</p>
                    </div>

                    <div class="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8">
                        <span class="text-2xl font-bold text-violet-600 dark:text-violet-400">6 Modules</span>
                    </div>

                    <div class="mb-8 flex flex-col items-center gap-4">
                        <div class="flex items-baseline">
                            <span class="text-5xl font-bold text-gray-900 dark:text-gray-100">$29</span>
                            <span class="text-gray-600 dark:text-gray-400 ml-2">/ month</span>
                        </div>
                        <Button 
                            label="Start Free Trial" 
                            severity="success"
                            class="w-full"
                        />
                    </div>
                    
                    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                    
                    <ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow">
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">Real-time Price Data</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">AI Sentiment Analysis</span>
                        </li>
                         <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300"><strong>Priority Support</strong></span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">Works on Desktop, Tablet & Mobile</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300"><strong>Cross-Investment Correlation Alerts</strong></span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">Customizable Alert Thresholds</span>
                        </li>
                         <li class="flex items-start">
                            <i class="pi pi-times-circle text-gray-400 dark:text-gray-600 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-400 dark:text-gray-500">Export Data & Reports</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="p-0 md:p-4 fade-up stagger-3">
                <div class="relative p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full">
                    <div class="text-gray-900 dark:text-gray-100 text-center mb-4">
                        <h3 class="text-3xl font-bold">Professional</h3>
                        <p class="text-gray-600 dark:text-gray-400 mt-2">For power users</p>
                    </div>
                    
                    <div class="text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border dark:border-gray-600 mb-8">
                        <span class="text-2xl font-bold text-violet-600 dark:text-violet-400">9 Modules</span>
                    </div>

                    <div class="mb-8 flex flex-col items-center gap-4">
                        <div class="flex items-baseline">
                             <span class="text-5xl font-bold text-gray-900 dark:text-gray-100">$34</span>
                            <span class="text-gray-600 dark:text-gray-400 ml-2">/ month</span>
                        </div>
                         <Button 
                            label="Start Free Trial" 
                            outlined
                            class="w-full"
                        />
                    </div>
                    
                    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                    
                    <ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow">
                         <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">Real-time Price Data</span>
                        </li>
                         <li class="flex items-start">
                            <i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">AI Sentiment Analysis</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300"><strong>Dedicated Support</strong></span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">Works on Desktop, Tablet & Mobile</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-sparkles text-violet-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300"><strong>Cross-Investment Correlation Alerts</strong></span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300">Customizable Alert Thresholds</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700 dark:text-gray-300"><strong>Export Data & Reports (CSV)</strong></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="mt-12 text-center bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Need More Than 9 Modules?</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
                We offer custom enterprise plans. Contact us for a personalized quote.
            </p>
            <Button 
                label="Contact Sales" 
                class="p-button-outlined p-button-lg"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="contactSales"
            />
        </div>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import Chip from 'primevue/chip';

const router = useRouter();

const contactSales = () => {
    window.location.href = 'mailto:sales@clearcutmarkets.com?subject=Enterprise Plan Inquiry';
};
</script>

<style scoped>
/* No component-specific styles needed */
</style>