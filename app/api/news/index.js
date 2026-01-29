import { getNewsArticles } from '../../lib/news-db.js';

/**
 * News GET API
 * 
 * GET /api/news
 * 
 * Returns news articles for the frontend.
 * 
 * Query params:
 * - limit (default: 50)
 * - offset (default: 0)
 * - sentiment: 'bullish' | 'bearish' | 'neutral'
 * - category: 'general' | 'company' | 'market' | 'economy'
 * - analyzed: 'true' to only return AI-analyzed articles
 * - ticker: Filter by ticker symbol
 */

export default async function handler(request, response) {
    // Set CORS headers
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    if (request.method !== 'GET') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const {
            limit = '50',
            offset = '0',
            sentiment,
            category,
            analyzed,
            ticker,
        } = request.query;

        const options = {
            limit: Math.min(parseInt(limit, 10), 100), // Cap at 100
            offset: parseInt(offset, 10),
            sentiment: sentiment || null,
            category: category || null,
            onlyAnalyzed: analyzed === 'true',
            ticker: ticker?.toUpperCase() || null,
        };

        const result = await getNewsArticles(options);

        return response.status(200).json({
            success: true,
            ...result,
        });

    } catch (error) {
        console.error('[News API] Error:', error);
        return response.status(500).json({
            success: false,
            error: error.message,
        });
    }
}
