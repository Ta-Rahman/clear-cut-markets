<template>
    <section id="features" class="relative py-16 sm:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div class="relative max-w-7xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium mb-4 fade-up">
                    <i class="pi pi-bolt"></i>
                    {{ t('features.badge') }}
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                    {{ t('features.title') }}
                    <span class="text-gradient">{{ t('features.title_highlight') }}</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto fade-up stagger-2">
                    {{ t('features.subtitle') }}
                </p>
            </div>
            
            <!-- Bento Grid - Mobile: 2-col masonry style, Tablet/Desktop: full bento -->
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                <!-- Feature 1: News Aggregation (Large - full width on mobile) -->
                <div class="col-span-2 lg:col-span-2 fade-up stagger-2">
                    <div class="feature-card h-full p-4 sm:p-6 md:p-8 group">
                        <div class="flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
                            <div class="flex-shrink-0">
                                <div class="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <i class="pi pi-inbox text-white text-xl sm:text-2xl"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">{{ t('features.cards.news_aggregation.title') }}</h3>
                                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3 md:mb-4 line-clamp-2 sm:line-clamp-none">
                                    {{ t('features.cards.news_aggregation.description') }}
                                </p>
                                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                                    <span class="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-[10px] sm:text-xs font-medium">{{ t('features.cards.news_aggregation.tags.financial_news') }}</span>
                                    <span class="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-[10px] sm:text-xs font-medium">{{ t('features.cards.news_aggregation.tags.sec_filings') }}</span>
                                    <span class="hidden sm:inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-[10px] sm:text-xs font-medium">{{ t('features.cards.news_aggregation.tags.social_sentiment') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Feature 2: AI Analysis (spans 2 rows on mobile for visual interest) -->
                <div class="col-span-1 row-span-2 fade-up stagger-3">
                    <div class="feature-card h-full p-4 md:p-6 group flex flex-col">
                        <div class="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-sparkles text-white text-lg sm:text-xl"></i>
                        </div>
                        <h3 class="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{{ t('features.cards.ai_analysis.title') }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 flex-grow">
                            {{ t('features.cards.ai_analysis.description') }}
                        </p>
                        <!-- Extra content for taller card on mobile -->
                        <div class="mt-auto pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <i class="pi pi-check-circle text-violet-500"></i>
                                <span>{{ t('features.cards.ai_analysis.powered_by') || 'Powered by GPT-4' }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Feature 3: Real-time Alerts -->
                <div class="col-span-1 fade-up stagger-3">
                    <div class="feature-card h-full p-4 md:p-6 group">
                        <div class="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-bell text-white text-lg sm:text-xl"></i>
                        </div>
                        <h3 class="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{{ t('features.cards.alerts.title') }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                            {{ t('features.cards.alerts.description') }}
                        </p>
                    </div>
                </div>
                
                <!-- Feature 4: Multi-asset -->
                <div class="col-span-1 fade-up stagger-4">
                    <div class="feature-card h-full p-4 md:p-6 group">
                        <div class="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-th-large text-white text-lg sm:text-xl"></i>
                        </div>
                        <h3 class="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{{ t('features.cards.multi_asset.title') }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                            {{ t('features.cards.multi_asset.description') }}
                        </p>
                    </div>
                </div>
                
                <!-- Feature 5: Cross-device -->
                <div class="col-span-1 fade-up stagger-4">
                    <div class="feature-card h-full p-4 md:p-6 group">
                        <div class="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/25 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-mobile text-white text-lg sm:text-xl"></i>
                        </div>
                        <h3 class="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{{ t('features.cards.access.title') }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                            {{ t('features.cards.access.description') }}
                        </p>
                    </div>
                </div>
                
                <!-- Feature 6: Weekly Digest -->
                <div class="col-span-1 fade-up stagger-5">
                    <div class="feature-card h-full p-4 md:p-6 group">
                        <div class="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-envelope text-white text-lg sm:text-xl"></i>
                        </div>
                        <h3 class="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{{ t('features.cards.digest.title') }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                            {{ t('features.cards.digest.description') }}
                        </p>
                    </div>
                </div>
                
                <!-- Feature 7: Security (Large - full width) -->
                <div class="col-span-2 lg:col-span-2 fade-up stagger-6">
                    <div class="feature-card h-full p-4 sm:p-6 md:p-8 group">
                        <div class="flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
                            <div class="flex-shrink-0">
                                <div class="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <i class="pi pi-shield text-white text-xl sm:text-2xl"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">{{ t('features.cards.security.title') }}</h3>
                                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3 md:mb-4 line-clamp-2 sm:line-clamp-none">
                                    {{ t('features.cards.security.description') }}
                                </p>
                                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <div class="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                                        <i class="pi pi-lock text-teal-500"></i>
                                        <span>{{ t('features.cards.security.no_brokerage') }}</span>
                                    </div>
                                    <div class="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                                        <i class="pi pi-check-circle text-teal-500"></i>
                                        <span>{{ t('features.cards.security.gdpr') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.feature-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (min-width: 640px) {
    .feature-card {
        border-radius: 1.5rem;
    }
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
    border-color: rgba(99, 102, 241, 0.2);
}

/* Disable hover transform on mobile for better touch experience */
@media (max-width: 767px) {
    .feature-card:hover {
        transform: none;
    }
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

<style>
/* Dark mode styles - unscoped to work with global .app-dark class */
.app-dark .feature-card {
    background: rgba(17, 24, 39, 0.6);
    border-color: rgba(255, 255, 255, 0.1);
}

.app-dark .feature-card:hover {
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
}
</style>
