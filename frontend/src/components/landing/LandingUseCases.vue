<template>
    <div class="px-4 py-16 md:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 fade-up">{{ t('useCases.title') }}</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-up stagger-1">
                {{ t('useCases.subtitle') }}
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
                            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{{ t('useCases.focused_title') }}</h3>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {{ t('useCases.focused_text') }}
                            </p>
                        </div>
                    </li>
                    
                    <li class="flex items-start gap-4">
                        <div class="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0">
                            <i class="pi pi-sitemap text-2xl text-violet-600 dark:text-violet-400"></i>
                        </div>
                        <div>
                             <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{{ t('useCases.cross_asset_title') }}</h3>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {{ t('useCases.cross_asset_text') }}
                            </p>
                        </div>
                    </li>
                    
                    <li class="flex items-start gap-4">
                        <div class="bg-violet-100 dark:bg-violet-900/50 p-3 rounded-full mt-1 flex-shrink-0">
                            <i class="pi pi-clock text-2xl text-violet-600 dark:text-violet-400"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{{ t('useCases.time_strapped_title') }}</h3>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                               {{ t('useCases.time_strapped_text') }}
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
const { t } = useI18n();
</script>