import { ref, computed } from 'vue';

/**
 * News Composable
 * Manages news state and fetching for the dashboard
 */

export function useNews() {
    const articles = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const total = ref(0);
    const currentPage = ref(1);
    const pageSize = ref(20);
    
    // Filters
    const sentimentFilter = ref(null); // 'bullish', 'bearish', 'neutral', null
    const categoryFilter = ref(null);
    const showOnlyAnalyzed = ref(false);

    /**
     * Fetch news articles from API
     */
    const fetchNews = async (options = {}) => {
        isLoading.value = true;
        error.value = null;
        
        try {
            const params = new URLSearchParams({
                limit: options.limit || pageSize.value,
                offset: options.offset || (currentPage.value - 1) * pageSize.value,
            });
            
            if (sentimentFilter.value) {
                params.append('sentiment', sentimentFilter.value);
            }
            if (categoryFilter.value) {
                params.append('category', categoryFilter.value);
            }
            if (showOnlyAnalyzed.value) {
                params.append('analyzed', 'true');
            }
            
            const response = await fetch(`/api/news?${params}`);
            const data = await response.json();
            
            if (!data.success) {
                throw new Error(data.error || 'Failed to fetch news');
            }
            
            articles.value = data.articles;
            total.value = data.total;
            
        } catch (err) {
            console.error('Error fetching news:', err);
            error.value = err.message;
        } finally {
            isLoading.value = false;
        }
    };

    /**
     * Load more articles (append to existing)
     */
    const loadMore = async () => {
        if (isLoading.value || articles.value.length >= total.value) return;
        
        isLoading.value = true;
        
        try {
            const params = new URLSearchParams({
                limit: pageSize.value,
                offset: articles.value.length,
            });
            
            if (sentimentFilter.value) {
                params.append('sentiment', sentimentFilter.value);
            }
            
            const response = await fetch(`/api/news?${params}`);
            const data = await response.json();
            
            if (data.success) {
                articles.value = [...articles.value, ...data.articles];
            }
        } catch (err) {
            console.error('Error loading more news:', err);
        } finally {
            isLoading.value = false;
        }
    };

    /**
     * Apply filter and refetch
     */
    const setFilter = (type, value) => {
        if (type === 'sentiment') {
            sentimentFilter.value = value;
        } else if (type === 'category') {
            categoryFilter.value = value;
        }
        currentPage.value = 1;
        fetchNews();
    };

    /**
     * Clear all filters
     */
    const clearFilters = () => {
        sentimentFilter.value = null;
        categoryFilter.value = null;
        showOnlyAnalyzed.value = false;
        currentPage.value = 1;
        fetchNews();
    };

    // Computed
    const hasMore = computed(() => articles.value.length < total.value);
    
    const sentimentCounts = computed(() => {
        const counts = { bullish: 0, bearish: 0, neutral: 0, unanalyzed: 0 };
        articles.value.forEach(a => {
            if (a.ai_sentiment) {
                counts[a.ai_sentiment]++;
            } else {
                counts.unanalyzed++;
            }
        });
        return counts;
    });

    return {
        // State
        articles,
        isLoading,
        error,
        total,
        currentPage,
        pageSize,
        
        // Filters
        sentimentFilter,
        categoryFilter,
        showOnlyAnalyzed,
        
        // Computed
        hasMore,
        sentimentCounts,
        
        // Actions
        fetchNews,
        loadMore,
        setFilter,
        clearFilters,
    };
}
