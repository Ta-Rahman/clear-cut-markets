import { fetchAllNews } from '../../lib/news-sources.js';
import { insertArticles, logFetchRun } from '../../lib/news-db.js';

/**
 * News Fetch API
 * 
 * POST /api/news/fetch
 * 
 * Triggers a news fetch from all configured sources.
 * Can be called by:
 * - Trigger.dev scheduled job
 * - Vercel Cron
 * - Manual trigger for testing
 * 
 * Optional auth via API key for production
 */

export default async function handler(request, response) {
    // Set CORS headers
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    // Optional: Verify API key for production
    // const apiKey = request.headers['x-api-key'];
    // if (process.env.NODE_ENV === 'production' && apiKey !== process.env.NEWS_FETCH_API_KEY) {
    //     return response.status(401).json({ error: 'Unauthorized' });
    // }

    const startTime = Date.now();
    
    try {
        console.log('[News Fetch] Starting fetch from all sources...');
        
        // Fetch from all sources
        const { articles, errors } = await fetchAllNews();
        
        console.log(`[News Fetch] Fetched ${articles.length} articles, ${errors.length} errors`);
        
        // Insert into database
        const insertResults = await insertArticles(articles);
        
        console.log(`[News Fetch] Inserted ${insertResults.inserted}, Duplicates: ${insertResults.duplicates}`);
        
        // Log the fetch run
        await logFetchRun('finnhub', {
            fetched: articles.length,
            inserted: insertResults.inserted,
            duplicates: insertResults.duplicates,
            status: 'completed',
        });
        
        const duration = Date.now() - startTime;
        
        return response.status(200).json({
            success: true,
            duration: `${duration}ms`,
            stats: {
                fetched: articles.length,
                inserted: insertResults.inserted,
                duplicates: insertResults.duplicates,
                errors: errors.length + insertResults.errors.length,
            },
            sourceErrors: errors,
            insertErrors: insertResults.errors.slice(0, 5), // Limit error details
        });
        
    } catch (error) {
        console.error('[News Fetch] Critical error:', error);
        
        // Log failed run
        await logFetchRun('finnhub', {
            status: 'failed',
            error: error.message,
        });
        
        return response.status(500).json({
            success: false,
            error: error.message,
        });
    }
}
