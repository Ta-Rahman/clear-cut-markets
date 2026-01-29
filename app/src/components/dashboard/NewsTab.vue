<script setup>
import { onMounted, ref, computed } from 'vue';
import { useNews } from '@/composables/useNews';

const {
    articles,
    isLoading,
    error,
    total,
    hasMore,
    sentimentFilter,
    fetchNews,
    loadMore,
    setFilter,
    clearFilters,
} = useNews();

// Track which cards have animated in
const animatedCards = ref(new Set());

onMounted(() => {
    fetchNews();
});

/**
 * Patterns that indicate a logo/placeholder image rather than article content
 * This is a fallback in case server-side enhancement missed something
 */
const LOGO_PATTERNS = [
    'marketwatch.com/images/logo',
    'mw3.wsj.net/mw5/content/logos',
    '/logos/',
    '/logo.',
    'default-image',
    'placeholder',
    '/icons/',
    'favicon',
];

/**
 * Check if an image URL is likely a logo/placeholder
 */
const isLogoImage = (url) => {
    if (!url) return true;
    const lowerUrl = url.toLowerCase();
    return LOGO_PATTERNS.some(pattern => lowerUrl.includes(pattern));
};

/**
 * Get a valid image URL or null if it's a logo
 */
const getValidImageUrl = (article) => {
    if (!article.image_url) return null;
    if (isLogoImage(article.image_url)) return null;
    return article.image_url;
};

/**
 * Format relative time
 */
const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

/**
 * Get sentiment accent class
 */
const getSentimentClass = (sentiment) => {
    if (sentiment === 'bullish') return 'sentiment-bullish';
    if (sentiment === 'bearish') return 'sentiment-bearish';
    return '';
};

/**
 * Get stagger delay for animation
 */
const getAnimationDelay = (index) => {
    return `${index * 0.05}s`;
};

/**
 * Handle card enter animation
 */
const onCardEnter = (el, done) => {
    const index = parseInt(el.dataset.index);
    el.style.animationDelay = `${index * 0.05}s`;
    done();
};

/**
 * Open article in new tab
 */
const openArticle = (url) => {
    window.open(url, '_blank');
};
</script>

<template>
    <div class="news-container">
        <!-- Header with filters -->
        <div class="news-header">
            <div class="header-info">
                <h2 class="header-title">Market News</h2>
                <p class="header-subtitle">{{ total }} articles</p>
            </div>
            
            <!-- Filter Pills -->
            <div class="filter-pills">
                <button
                    @click="clearFilters"
                    class="filter-pill"
                    :class="{ active: !sentimentFilter }"
                >
                    All
                </button>
                <button
                    @click="setFilter('sentiment', 'bullish')"
                    class="filter-pill"
                    :class="{ 'active-bullish': sentimentFilter === 'bullish' }"
                >
                    <i class="pi pi-arrow-up text-[10px]"></i>
                    Bullish
                </button>
                <button
                    @click="setFilter('sentiment', 'bearish')"
                    class="filter-pill"
                    :class="{ 'active-bearish': sentimentFilter === 'bearish' }"
                >
                    <i class="pi pi-arrow-down text-[10px]"></i>
                    Bearish
                </button>
                <button
                    @click="setFilter('sentiment', 'neutral')"
                    class="filter-pill"
                    :class="{ active: sentimentFilter === 'neutral' }"
                >
                    Neutral
                </button>
            </div>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading && articles.length === 0" class="card-grid">
            <div v-for="n in 6" :key="n" class="news-card skeleton-card">
                <div class="skeleton-image skeleton"></div>
                <div class="skeleton-content">
                    <div class="skeleton-line skeleton" style="width: 40%"></div>
                    <div class="skeleton-line skeleton" style="width: 90%"></div>
                    <div class="skeleton-line skeleton" style="width: 70%"></div>
                </div>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-state">
            <div class="error-icon">
                <i class="pi pi-exclamation-circle"></i>
            </div>
            <h3>Failed to load news</h3>
            <p>{{ error }}</p>
            <button @click="fetchNews" class="retry-btn">
                <i class="pi pi-refresh"></i>
                Try Again
            </button>
        </div>

        <!-- Empty State -->
        <div v-else-if="articles.length === 0" class="empty-state">
            <div class="empty-icon">
                <i class="pi pi-inbox"></i>
            </div>
            <h3>No news yet</h3>
            <p>News articles will appear here once fetched.</p>
        </div>

        <!-- Uniform Card Grid -->
        <TransitionGroup 
            v-else 
            name="card" 
            tag="div" 
            class="card-grid"
            appear
        >
            <article 
                v-for="(article, index) in articles" 
                :key="article.id"
                class="news-card"
                :class="getSentimentClass(article.ai_sentiment)"
                :style="{ '--delay': getAnimationDelay(index) }"
                :data-index="index"
                @click="openArticle(article.url)"
            >
                <!-- Sentiment indicator dot -->
                <div class="sentiment-indicator" v-if="article.ai_sentiment && article.ai_sentiment !== 'neutral'">
                    <i :class="article.ai_sentiment === 'bullish' ? 'pi pi-arrow-up' : 'pi pi-arrow-down'"></i>
                </div>

                <!-- Thumbnail -->
                <div class="card-thumbnail">
                    <img 
                        v-if="getValidImageUrl(article)"
                        :src="getValidImageUrl(article)" 
                        :alt="article.headline"
                        @error="$event.target.style.display = 'none'; $event.target.nextElementSibling.style.display = 'flex'"
                    />
                    <div class="thumbnail-placeholder" :style="{ display: getValidImageUrl(article) ? 'none' : 'flex' }">
                        <i class="pi pi-chart-line"></i>
                    </div>
                    <div class="thumbnail-overlay"></div>
                </div>
                
                <!-- Content -->
                <div class="card-body">
                    <div class="card-meta">
                        <span class="card-source">{{ article.source }}</span>
                        <span class="card-dot">·</span>
                        <span class="card-time">{{ formatRelativeTime(article.published_at) }}</span>
                    </div>
                    
                    <h3 class="card-headline">{{ article.headline }}</h3>
                    
                    <div class="card-footer">
                        <div class="card-tickers">
                            <span 
                                v-for="ticker in (article.ai_tickers || article.related_tickers || []).slice(0, 2)" 
                                :key="ticker"
                                class="ticker-badge"
                            >
                                {{ ticker }}
                            </span>
                        </div>
                        <div class="card-action">
                            <i class="pi pi-arrow-up-right"></i>
                        </div>
                    </div>
                </div>
            </article>
        </TransitionGroup>

        <!-- Load More -->
        <div v-if="hasMore && !isLoading" class="load-more">
            <button @click="loadMore" class="load-more-btn">
                Load more articles
                <i class="pi pi-chevron-down"></i>
            </button>
        </div>
        
        <!-- Loading indicator -->
        <div v-if="isLoading && articles.length > 0" class="loading-more">
            <i class="pi pi-spin pi-spinner"></i>
        </div>
    </div>
</template>

<style scoped>
.news-container {
    max-width: 100%;
}

/* Header */
.news-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.25rem;
}

@media (min-width: 640px) {
    .news-header {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}

.header-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
}

.header-subtitle {
    font-size: 0.8125rem;
    color: #6b7280;
    margin: 0.125rem 0 0 0;
}

/* Filter Pills */
.filter-pills {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.filter-pill {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: #6b7280;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.15s ease;
}

.filter-pill:hover {
    border-color: rgba(99, 102, 241, 0.3);
    color: #4f46e5;
}

.filter-pill.active {
    background: #4f46e5;
    border-color: #4f46e5;
    color: white;
}

.filter-pill.active-bullish {
    background: #16a34a;
    border-color: #16a34a;
    color: white;
}

.filter-pill.active-bearish {
    background: #dc2626;
    border-color: #dc2626;
    color: white;
}

/* Card Grid */
.card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.875rem;
}

@media (min-width: 640px) {
    .card-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .card-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* News Card */
.news-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 0.875rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    animation: cardEnter 0.4s cubic-bezier(0.4, 0, 0.2, 1) backwards;
    animation-delay: var(--delay, 0s);
}

@keyframes cardEnter {
    from {
        opacity: 0;
        transform: translateY(16px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.news-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
    border-color: rgba(99, 102, 241, 0.25);
}

/* Sentiment accent glow */
.news-card.sentiment-bullish {
    box-shadow: inset 0 1px 0 0 rgba(22, 163, 74, 0.3);
}

.news-card.sentiment-bullish:hover {
    box-shadow: 0 20px 40px -12px rgba(22, 163, 74, 0.2),
                inset 0 1px 0 0 rgba(22, 163, 74, 0.4);
}

.news-card.sentiment-bearish {
    box-shadow: inset 0 1px 0 0 rgba(220, 38, 38, 0.3);
}

.news-card.sentiment-bearish:hover {
    box-shadow: 0 20px 40px -12px rgba(220, 38, 38, 0.2),
                inset 0 1px 0 0 rgba(220, 38, 38, 0.4);
}

/* Sentiment Indicator */
.sentiment-indicator {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.625rem;
    z-index: 10;
    transition: transform 0.2s ease;
}

.sentiment-bullish .sentiment-indicator {
    background: rgba(22, 163, 74, 0.9);
    color: white;
}

.sentiment-bearish .sentiment-indicator {
    background: rgba(220, 38, 38, 0.9);
    color: white;
}

.news-card:hover .sentiment-indicator {
    transform: scale(1.1);
}

/* Card Thumbnail */
.card-thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 2.5 / 1;
    overflow: hidden;
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    flex-shrink: 0;
}

/* Even more compact on mobile */
@media (max-width: 639px) {
    .card-thumbnail {
        aspect-ratio: 3 / 1;
    }
}

.card-thumbnail img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.news-card:hover .card-thumbnail img {
    transform: scale(1.08);
}

.thumbnail-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    font-size: 1.5rem;
}

.thumbnail-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
}

/* Card Body */
.card-body {
    flex: 1;
    padding: 0.875rem;
    display: flex;
    flex-direction: column;
}

.card-meta {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin-bottom: 0.5rem;
}

.card-source {
    font-size: 0.6875rem;
    font-weight: 600;
    color: #6366f1;
}

.card-dot {
    color: #d1d5db;
    font-size: 0.5rem;
}

.card-time {
    font-size: 0.6875rem;
    color: #9ca3af;
}

.card-headline {
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
    line-height: 1.45;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.2s ease;
    flex: 1;
}

.news-card:hover .card-headline {
    color: #4f46e5;
}

/* Card Footer */
.card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.card-tickers {
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
}

.ticker-badge {
    padding: 0.1875rem 0.375rem;
    background: rgba(99, 102, 241, 0.08);
    border-radius: 0.25rem;
    font-size: 0.625rem;
    font-weight: 600;
    font-family: ui-monospace, monospace;
    color: #4f46e5;
    transition: all 0.15s ease;
}

.news-card:hover .ticker-badge {
    background: rgba(99, 102, 241, 0.12);
}

.card-action {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(99, 102, 241, 0.08);
    color: #6366f1;
    font-size: 0.625rem;
    opacity: 0;
    transform: translateX(-8px) rotate(-45deg);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.news-card:hover .card-action {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
}

/* Vue TransitionGroup animations */
.card-enter-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
}

.card-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.card-move {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Skeleton Loading */
.skeleton-card {
    pointer-events: none;
}

.skeleton-image {
    height: 140px;
    border-radius: 0;
}

.skeleton-content {
    padding: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.skeleton-line {
    height: 0.75rem;
    border-radius: 0.25rem;
}

.skeleton {
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.04) 25%,
        rgba(0, 0, 0, 0.08) 50%,
        rgba(0, 0, 0, 0.04) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* Error State */
.error-state {
    text-align: center;
    padding: 3rem 1.5rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 1rem;
}

.error-icon {
    width: 3rem;
    height: 3rem;
    background: rgba(239, 68, 68, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: #ef4444;
    font-size: 1.25rem;
}

.error-state h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 0.375rem 0;
}

.error-state p {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0 0 1.25rem 0;
}

.retry-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #4f46e5;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
    transition: background 0.15s ease;
}

.retry-btn:hover {
    background: #4338ca;
}

/* Empty State */
.empty-state {
    text-align: center;
    padding: 3rem 1.5rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 1rem;
}

.empty-icon {
    width: 3rem;
    height: 3rem;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: #6366f1;
    font-size: 1.25rem;
}

.empty-state h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 0.375rem 0;
}

.empty-state p {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0;
}

/* Load More */
.load-more {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
}

.load-more-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 9999px;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.15s ease;
}

.load-more-btn:hover {
    border-color: rgba(99, 102, 241, 0.3);
    color: #4f46e5;
}

.loading-more {
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    color: #6366f1;
}
</style>

<!-- Dark mode styles -->
<style>
/* Header - Dark */
.app-dark .header-title {
    color: #f9fafb;
}

.app-dark .header-subtitle {
    color: #9ca3af;
}

/* Filter Pills - Dark */
.app-dark .filter-pill {
    background: rgba(31, 41, 55, 0.9);
    border-color: rgba(255, 255, 255, 0.08);
    color: #9ca3af;
}

.app-dark .filter-pill:hover {
    border-color: rgba(129, 140, 248, 0.4);
    color: #a5b4fc;
}

.app-dark .filter-pill.active {
    background: #6366f1;
    border-color: #6366f1;
    color: white;
}

.app-dark .filter-pill.active-bullish {
    background: #16a34a;
    border-color: #16a34a;
}

.app-dark .filter-pill.active-bearish {
    background: #dc2626;
    border-color: #dc2626;
}

/* News Card - Dark */
.app-dark .news-card {
    background: rgba(17, 24, 39, 0.9);
    border-color: rgba(255, 255, 255, 0.06);
}

.app-dark .news-card:hover {
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.5);
    border-color: rgba(129, 140, 248, 0.3);
}

.app-dark .news-card.sentiment-bullish {
    box-shadow: inset 0 1px 0 0 rgba(22, 163, 74, 0.4);
}

.app-dark .news-card.sentiment-bullish:hover {
    box-shadow: 0 20px 40px -12px rgba(22, 163, 74, 0.25),
                inset 0 1px 0 0 rgba(22, 163, 74, 0.5);
}

.app-dark .news-card.sentiment-bearish {
    box-shadow: inset 0 1px 0 0 rgba(220, 38, 38, 0.4);
}

.app-dark .news-card.sentiment-bearish:hover {
    box-shadow: 0 20px 40px -12px rgba(220, 38, 38, 0.25),
                inset 0 1px 0 0 rgba(220, 38, 38, 0.5);
}

.app-dark .card-thumbnail {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
}

.app-dark .thumbnail-placeholder {
    color: #4b5563;
}

.app-dark .card-source {
    color: #818cf8;
}

.app-dark .card-dot {
    color: #4b5563;
}

.app-dark .card-time {
    color: #6b7280;
}

.app-dark .card-headline {
    color: #f9fafb;
}

.app-dark .news-card:hover .card-headline {
    color: #a5b4fc;
}

.app-dark .card-footer {
    border-color: rgba(255, 255, 255, 0.05);
}

.app-dark .ticker-badge {
    background: rgba(99, 102, 241, 0.15);
    color: #a5b4fc;
}

.app-dark .news-card:hover .ticker-badge {
    background: rgba(99, 102, 241, 0.2);
}

.app-dark .card-action {
    background: rgba(99, 102, 241, 0.15);
    color: #a5b4fc;
}

/* Skeleton - Dark */
.app-dark .skeleton {
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.03) 25%,
        rgba(255, 255, 255, 0.06) 50%,
        rgba(255, 255, 255, 0.03) 75%
    );
    background-size: 200% 100%;
}

/* Error State - Dark */
.app-dark .error-state {
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(255, 255, 255, 0.06);
}

.app-dark .error-icon {
    background: rgba(239, 68, 68, 0.15);
}

.app-dark .error-state h3 {
    color: #f9fafb;
}

.app-dark .error-state p {
    color: #9ca3af;
}

/* Empty State - Dark */
.app-dark .empty-state {
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(255, 255, 255, 0.06);
}

.app-dark .empty-icon {
    background: rgba(99, 102, 241, 0.15);
}

.app-dark .empty-state h3 {
    color: #f9fafb;
}

.app-dark .empty-state p {
    color: #9ca3af;
}

/* Load More - Dark */
.app-dark .load-more-btn {
    border-color: rgba(255, 255, 255, 0.1);
    color: #9ca3af;
}

.app-dark .load-more-btn:hover {
    border-color: rgba(129, 140, 248, 0.4);
    color: #a5b4fc;
}
</style>
