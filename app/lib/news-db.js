import { createClient } from '@supabase/supabase-js';

/**
 * News Database Operations
 * Handles storing and retrieving news articles from Supabase
 */

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY
);

/**
 * Insert articles, skipping duplicates based on headline_hash
 * @param {Array} articles - Array of normalized article objects
 * @returns {Object} - { inserted: number, duplicates: number, errors: Array }
 */
export async function insertArticles(articles) {
    const results = {
        inserted: 0,
        duplicates: 0,
        errors: [],
    };
    
    for (const article of articles) {
        try {
            const { data, error } = await supabase
                .from('news_articles')
                .upsert(article, {
                    onConflict: 'headline_hash',
                    ignoreDuplicates: true,
                })
                .select('id');
            
            if (error) {
                // Check if it's a duplicate error
                if (error.code === '23505') {
                    results.duplicates++;
                } else {
                    results.errors.push({ headline: article.headline, error: error.message });
                }
            } else if (data && data.length > 0) {
                results.inserted++;
            } else {
                results.duplicates++;
            }
        } catch (error) {
            results.errors.push({ headline: article.headline, error: error.message });
        }
    }
    
    return results;
}

/**
 * Get articles that haven't been analyzed by AI yet
 * @param {number} limit - Max articles to return
 */
export async function getUnanalyzedArticles(limit = 50) {
    const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .is('ai_analyzed_at', null)
        .order('published_at', { ascending: false })
        .limit(limit);
    
    if (error) {
        console.error('Error fetching unanalyzed articles:', error);
        throw error;
    }
    
    return data || [];
}

/**
 * Update article with AI analysis results
 * @param {string} id - Article UUID
 * @param {Object} analysis - AI analysis results
 */
export async function updateArticleAnalysis(id, analysis) {
    const { error } = await supabase
        .from('news_articles')
        .update({
            ai_sentiment: analysis.sentiment,
            ai_sentiment_score: analysis.sentimentScore,
            ai_summary: analysis.summary,
            ai_tickers: analysis.tickers,
            ai_sectors: analysis.sectors,
            ai_impact: analysis.impact,
            ai_analyzed_at: new Date().toISOString(),
            ai_model: analysis.model || 'gpt-4o-mini',
        })
        .eq('id', id);
    
    if (error) {
        console.error(`Error updating article ${id}:`, error);
        throw error;
    }
}

/**
 * Get recent news articles for the frontend
 * @param {Object} options - Query options
 */
export async function getNewsArticles(options = {}) {
    const {
        limit = 50,
        offset = 0,
        sentiment = null,      // 'bullish', 'bearish', 'neutral'
        category = null,
        onlyAnalyzed = false,  // Only return AI-analyzed articles
        ticker = null,         // Filter by ticker
    } = options;
    
    let query = supabase
        .from('news_articles')
        .select('*', { count: 'exact' })
        .order('published_at', { ascending: false })
        .range(offset, offset + limit - 1);
    
    if (sentiment) {
        query = query.eq('ai_sentiment', sentiment);
    }
    
    if (category) {
        query = query.eq('category', category);
    }
    
    if (onlyAnalyzed) {
        query = query.not('ai_analyzed_at', 'is', null);
    }
    
    if (ticker) {
        query = query.or(`related_tickers.cs.{${ticker}},ai_tickers.cs.{${ticker}}`);
    }
    
    const { data, error, count } = await query;
    
    if (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
    
    return {
        articles: data || [],
        total: count || 0,
        limit,
        offset,
    };
}

/**
 * Log a fetch run
 */
export async function logFetchRun(sourceId, stats) {
    const { error } = await supabase
        .from('news_fetch_logs')
        .insert({
            source_id: sourceId,
            articles_fetched: stats.fetched || 0,
            articles_new: stats.inserted || 0,
            articles_duplicate: stats.duplicates || 0,
            status: stats.status || 'completed',
            error: stats.error || null,
            completed_at: new Date().toISOString(),
        });
    
    if (error) {
        console.error('Error logging fetch run:', error);
    }
}

/**
 * Update news source status
 */
export async function updateSourceStatus(sourceId, stats) {
    const { error } = await supabase
        .from('news_sources')
        .update({
            last_fetched_at: new Date().toISOString(),
            last_article_count: stats.fetched || 0,
            error_count: stats.error ? supabase.sql`error_count + 1` : 0,
            last_error: stats.error || null,
        })
        .eq('id', sourceId);
    
    if (error) {
        console.error('Error updating source status:', error);
    }
}
