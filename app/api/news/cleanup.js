import { createClient } from '@supabase/supabase-js';

/**
 * News Cleanup API
 * 
 * POST /api/news/cleanup
 * 
 * Deletes old news articles based on retention policy:
 * - Regular articles: 14 days
 * - High-impact articles: 30 days
 * 
 * Call manually or via daily cron job
 */

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Retention periods in days
const RETENTION_REGULAR = 14;
const RETENTION_HIGH_IMPACT = 30;

export default async function handler(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const startTime = Date.now();
    const stats = {
        regularDeleted: 0,
        highImpactDeleted: 0,
        errors: [],
    };

    try {
        // Calculate cutoff dates
        const regularCutoff = new Date();
        regularCutoff.setDate(regularCutoff.getDate() - RETENTION_REGULAR);
        
        const highImpactCutoff = new Date();
        highImpactCutoff.setDate(highImpactCutoff.getDate() - RETENTION_HIGH_IMPACT);

        // Delete regular articles older than 14 days (not high-impact)
        const { data: regularData, error: regularError } = await supabase
            .from('news_articles')
            .delete()
            .lt('published_at', regularCutoff.toISOString())
            .or('ai_impact.is.null,ai_impact.neq.high')
            .select('id');

        if (regularError) {
            stats.errors.push({ type: 'regular', error: regularError.message });
        } else {
            stats.regularDeleted = regularData?.length || 0;
        }

        // Delete high-impact articles older than 30 days
        const { data: highImpactData, error: highImpactError } = await supabase
            .from('news_articles')
            .delete()
            .lt('published_at', highImpactCutoff.toISOString())
            .eq('ai_impact', 'high')
            .select('id');

        if (highImpactError) {
            stats.errors.push({ type: 'high_impact', error: highImpactError.message });
        } else {
            stats.highImpactDeleted = highImpactData?.length || 0;
        }

        // Get current article count
        const { count } = await supabase
            .from('news_articles')
            .select('*', { count: 'exact', head: true });

        const duration = Date.now() - startTime;

        return response.status(200).json({
            success: true,
            duration: `${duration}ms`,
            deleted: {
                regular: stats.regularDeleted,
                highImpact: stats.highImpactDeleted,
                total: stats.regularDeleted + stats.highImpactDeleted,
            },
            retention: {
                regularDays: RETENTION_REGULAR,
                highImpactDays: RETENTION_HIGH_IMPACT,
            },
            remainingArticles: count,
            errors: stats.errors,
        });

    } catch (error) {
        console.error('[News Cleanup] Critical error:', error);
        return response.status(500).json({
            success: false,
            error: error.message,
        });
    }
}
