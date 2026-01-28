<script setup>
import { onMounted } from 'vue';
import { useNews } from '@/composables/useNews';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const {
    articles,
    isLoading,
    error,
    total,
    hasMore,
    sentimentFilter,
    sentimentCounts,
    fetchNews,
    loadMore,
    setFilter,
    clearFilters,
} = useNews();

onMounted(() => {
    fetchNews();
});

/**
 * Format relative time (e.g., "2 hours ago")
 */
const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
};

/**
 * Get sentiment badge classes
 */
const getSentimentClass = (sentiment) => {
    switch (sentiment) {
        case 'bullish':
            return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
        case 'bearish':
            return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
        case 'neutral':
            return 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400';
        default:
            return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
    }
};

/**
 * Get impact badge classes
 */
const getImpactClass = (impact) => {
    switch (impact) {
        case 'high':
            return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
        case 'medium':
            return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400';
        default:
            return 'bg-gray-100 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400';
    }
};

/**
 * Open article in new tab
 */
const openArticle = (url) => {
    window.open(url, '_blank');
};
</script>

<template>
    <div class="space-y-4">
        <!-- Header with filters -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
                <h2 class="text-lg font-bold text-gray-900 dark:text-white">Market News</h2>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ total }} articles</p>
            </div>
            
            <!-- Sentiment Filter Pills -->
            <div class="flex items-center gap-2 flex-wrap">
                <button
                    @click="clearFilters"
                    :class="[
                        'px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                        !sentimentFilter 
                            ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400' 
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    ]"
                >
                    All
                </button>
                <button
                    @click="setFilter('sentiment', 'bullish')"
                    :class="[
                        'px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1',
                        sentimentFilter === 'bullish' 
                            ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400' 
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    ]"
                >
                    <i class="pi pi-arrow-up text-[10px]"></i>
                    Bullish
                </button>
                <button
                    @click="setFilter('sentiment', 'bearish')"
                    :class="[
                        'px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1',
                        sentimentFilter === 'bearish' 
                            ? 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400' 
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    ]"
                >
                    <i class="pi pi-arrow-down text-[10px]"></i>
                    Bearish
                </button>
                <button
                    @click="setFilter('sentiment', 'neutral')"
                    :class="[
                        'px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                        sentimentFilter === 'neutral' 
                            ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300' 
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    ]"
                >
                    Neutral
                </button>
            </div>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading && articles.length === 0" class="space-y-3">
            <div v-for="i in 5" :key="i" class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-4 rounded-xl animate-pulse">
                <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3"></div>
                <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-6 rounded-xl text-center">
            <i class="pi pi-exclamation-circle text-3xl text-red-500 mb-2"></i>
            <p class="text-gray-900 dark:text-white font-medium">Failed to load news</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ error }}</p>
            <button 
                @click="fetchNews" 
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
            >
                Try Again
            </button>
        </div>

        <!-- Empty State -->
        <div v-else-if="articles.length === 0" class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-8 rounded-xl text-center">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center mx-auto mb-4">
                <i class="pi pi-inbox text-2xl text-indigo-500 dark:text-indigo-400"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">No news yet</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">News articles will appear here once fetched.</p>
        </div>

        <!-- News Articles List -->
        <div v-else class="space-y-3">
            <article 
                v-for="article in articles" 
                :key="article.id"
                class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-4 rounded-xl hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer group"
                @click="openArticle(article.url)"
            >
                <div class="flex gap-4">
                    <!-- Image (if available) -->
                    <div v-if="article.image_url" class="hidden sm:block flex-shrink-0">
                        <img 
                            :src="article.image_url" 
                            :alt="article.headline"
                            class="w-24 h-24 object-cover rounded-lg"
                            @error="$event.target.style.display = 'none'"
                        />
                    </div>
                    
                    <!-- Content -->
                    <div class="flex-1 min-w-0">
                        <!-- Header row: Source + Time -->
                        <div class="flex items-center gap-2 mb-1.5">
                            <span class="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                                {{ article.source }}
                            </span>
                            <span class="text-xs text-gray-400">•</span>
                            <span class="text-xs text-gray-500 dark:text-gray-400">
                                {{ formatRelativeTime(article.published_at) }}
                            </span>
                        </div>
                        
                        <!-- Headline -->
                        <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-1.5 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {{ article.headline }}
                        </h3>
                        
                        <!-- AI Summary or Original Summary -->
                        <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                            {{ article.ai_summary || article.summary || 'No summary available.' }}
                        </p>
                        
                        <!-- Tags row -->
                        <div class="flex items-center gap-2 flex-wrap">
                            <!-- Sentiment Badge -->
                            <span 
                                v-if="article.ai_sentiment"
                                :class="['px-2 py-0.5 rounded-full text-[10px] font-semibold', getSentimentClass(article.ai_sentiment)]"
                            >
                                {{ article.ai_sentiment }}
                            </span>
                            
                            <!-- Impact Badge -->
                            <span 
                                v-if="article.ai_impact"
                                :class="['px-2 py-0.5 rounded-full text-[10px] font-semibold', getImpactClass(article.ai_impact)]"
                            >
                                {{ article.ai_impact }} impact
                            </span>
                            
                            <!-- Tickers -->
                            <span 
                                v-for="ticker in (article.ai_tickers || article.related_tickers || []).slice(0, 3)" 
                                :key="ticker"
                                class="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-mono"
                            >
                                {{ ticker }}
                            </span>
                            
                            <!-- "Not analyzed" indicator -->
                            <span 
                                v-if="!article.ai_analyzed_at"
                                class="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px]"
                            >
                                <i class="pi pi-sparkles text-[8px] mr-0.5"></i>
                                Awaiting AI
                            </span>
                        </div>
                    </div>
                    
                    <!-- External link icon -->
                    <div class="hidden sm:flex items-center">
                        <i class="pi pi-external-link text-gray-400 group-hover:text-indigo-500 transition-colors"></i>
                    </div>
                </div>
            </article>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMore && !isLoading" class="text-center pt-2">
            <button 
                @click="loadMore"
                class="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                Load More
            </button>
        </div>
        
        <!-- Loading More Indicator -->
        <div v-if="isLoading && articles.length > 0" class="text-center py-4">
            <i class="pi pi-spin pi-spinner text-indigo-500"></i>
        </div>
    </div>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
