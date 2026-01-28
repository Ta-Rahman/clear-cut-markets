import crypto from 'crypto';

/**
 * News Sources Library
 * Handles fetching from various news sources and normalizing the data
 */

const finnhubApiKey = process.env.FINNHUB_API_KEY;

/**
 * Generate a hash for deduplication
 */
export function generateHeadlineHash(headline) {
    const normalized = headline.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Fetch general market news from Finnhub
 */
export async function fetchFinnhubGeneralNews() {
    const url = `https://finnhub.io/api/v1/news?category=general&token=${finnhubApiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Finnhub API error: ${response.status}`);
        }
        
        const articles = await response.json();
        
        // Normalize to our schema
        // article.source contains the actual publisher (Yahoo Finance, Reuters, etc.)
        return articles.map(article => ({
            headline: article.headline,
            summary: article.summary || null,
            url: article.url,
            source: article.source || 'Unknown',
            source_id: article.id?.toString() || null,
            image_url: article.image || null,
            category: article.category || 'general',
            related_tickers: article.related ? [article.related] : [],
            published_at: new Date(article.datetime * 1000).toISOString(),
            headline_hash: generateHeadlineHash(article.headline),
        }));
    } catch (error) {
        console.error('Finnhub fetch error:', error.message);
        throw error;
    }
}

/**
 * Fetch company-specific news from Finnhub
 * @param {string} ticker - Stock ticker symbol
 */
export async function fetchFinnhubCompanyNews(ticker, daysBack = 7) {
    const today = new Date();
    const fromDate = new Date(today);
    fromDate.setDate(fromDate.getDate() - daysBack);
    
    const from = fromDate.toISOString().split('T')[0];
    const to = today.toISOString().split('T')[0];
    
    const url = `https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=${from}&to=${to}&token=${finnhubApiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Finnhub API error: ${response.status}`);
        }
        
        const articles = await response.json();
        
        return articles.map(article => ({
            headline: article.headline,
            summary: article.summary || null,
            url: article.url,
            source: article.source || 'Unknown',
            source_id: article.id?.toString() || null,
            image_url: article.image || null,
            category: 'company',
            related_tickers: [ticker],
            published_at: new Date(article.datetime * 1000).toISOString(),
            headline_hash: generateHeadlineHash(article.headline),
        }));
    } catch (error) {
        console.error(`Finnhub company news error for ${ticker}:`, error.message);
        throw error;
    }
}

/**
 * Parse RSS feed (for Reuters, Yahoo Finance, etc.)
 * Note: You'll need to add an RSS parser package: npm install rss-parser
 */
export async function fetchRSSFeed(feedUrl, sourceName) {
    // Placeholder - implement when adding RSS sources
    // const Parser = require('rss-parser');
    // const parser = new Parser();
    // const feed = await parser.parseURL(feedUrl);
    
    console.log(`RSS fetching not yet implemented for ${sourceName}`);
    return [];
}

/**
 * Fetch from all active sources
 */
export async function fetchAllNews() {
    const results = {
        articles: [],
        errors: [],
    };
    
    // Fetch general news
    try {
        const generalNews = await fetchFinnhubGeneralNews();
        results.articles.push(...generalNews);
    } catch (error) {
        results.errors.push({ source: 'finnhub', error: error.message });
    }
    
    // Add more sources here as needed
    // try {
    //     const reutersNews = await fetchRSSFeed('https://...', 'reuters');
    //     results.articles.push(...reutersNews);
    // } catch (error) {
    //     results.errors.push({ source: 'reuters', error: error.message });
    // }
    
    return results;
}
