<template>
    <div class="px-4 py-16 md:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up">Is Clear Cut Markets the right fit for you?</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1">
                See if our approach matches your investment style.
            </p>
        </div>

        <div class="max-w-4xl mx-auto">
            <div class="p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 fade-up stagger-1">
                <ul class="space-y-8">
                    
                    <li class="flex items-start gap-4">
                        <div class="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0">
                            <i class="pi pi-filter-fill text-2xl text-violet-600 dark:text-violet-400"></i>
                        </div>
                        <div>
                             <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">You are a Focused Investor</h3>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                                You believe in a "less is more" philosophy. You have high-conviction picks and want to deeply understand them without the distraction of the broader market's noise.
                            </p>
                        </div>
                    </li>
                    
                    <li class="flex items-start gap-4">
                        <div class="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0">
                            <i class="pi pi-sitemap text-2xl text-violet-600 dark:text-violet-400"></i>
                        </div>
                        <div>
                             <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">You are a Cross-Asset Analyst</h3>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                                You understand that a policy change in Asia can impact both your tech stocks and your crypto portfolio. You need a tool that connects the dots across different asset classes.
                            </p>
                        </div>
                    </li>
                    
                    <li class="flex items-start gap-4">
                        <div class="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0">
                            <i class="pi pi-clock text-2xl text-violet-600 dark:text-violet-400"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">You are a Time-Strapped Professional</h3>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                               Your time is your most valuable asset. You need an AI co-pilot to do the heavy lifting, delivering critical insights so you can make informed decisions, faster.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); // This line ensures the component is i18n-aware
</script>