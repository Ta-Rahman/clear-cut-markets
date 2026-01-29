import crypto from 'crypto';

/**
 * News Sources Library
 * Handles fetching from various news sources and normalizing the data
 */

const finnhubApiKey = process.env.FINNHUB_API_KEY;
const polygonApiKey = process.env.POLYGON_API_KEY;

/**
 * Patterns that indicate a logo/placeholder image rather than article content
 */
const LOGO_PATTERNS = [
    'marketwatch.com/images/logo',
    'mw3.wsj.net/mw5/content/logos',
    '/logos/',
    '/logo.',
    'brand-assets',
    'default-image',
    'placeholder',
    '/icons/',
    'favicon',
];

/**
 * Domains known to block scrapers (use bot protection like DataDome, Cloudflare, etc.)
 * For these, we won't attempt to scrape and will just clear the logo image
 */
const SCRAPE_BLOCKED_DOMAINS = [
    'marketwatch.com',
    'wsj.com',
    'barrons.com',
    'ft.com',
    'bloomberg.com',
];

/**
 * Check if an image URL is likely a logo/placeholder
 */
function isLogoImage(url) {
    if (!url) return true;
    const lowerUrl = url.toLowerCase();
    return LOGO_PATTERNS.some(pattern => lowerUrl.includes(pattern));
}

/**
 * Check if a URL is from a domain that blocks scrapers
 */
function isScrapingBlocked(url) {
    try {
        const hostname = new URL(url).hostname.toLowerCase();
        return SCRAPE_BLOCKED_DOMAINS.some(domain => hostname.includes(domain));
    } catch {
        return false;
    }
}

/**
 * Scrape the Open Graph image from an article URL
 * @param {string} url - The article URL to scrape
 * @returns {Promise<string|null>} - The OG image URL or null
 */
async function scrapeOgImage(url) {
    // Skip domains that block scrapers
    if (isScrapingBlocked(url)) {
        console.log(`[OG Scrape] Skipping blocked domain: ${url}`);
        return null;
    }
    
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout
        
        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; ClearCutMarkets/1.0; +https://clearcutmarkets.com)',
                'Accept': 'text/html',
            },
        });
        
        clearTimeout(timeout);
        
        if (!response.ok) return null;
        
        // Only read first 50KB to find OG tags (they're in <head>)
        const reader = response.body.getReader();
        let html = '';
        let bytesRead = 0;
        const maxBytes = 50000;
        
        while (bytesRead < maxBytes) {
            const { done, value } = await reader.read();
            if (done) break;
            html += new TextDecoder().decode(value);
            bytesRead += value.length;
            
            // Stop early if we've passed </head>
            if (html.includes('</head>')) break;
        }
        
        reader.cancel();
        
        // Check if we hit a bot protection page
        if (html.includes('captcha-delivery.com') || 
            html.includes('Please enable JS') ||
            html.includes('challenge-platform')) {
            console.log(`[OG Scrape] Bot protection detected for: ${url}`);
            return null;
        }
        
        // Extract og:image using regex (faster than parsing full HTML)
        const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
            || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
        
        if (ogImageMatch && ogImageMatch[1]) {
            const ogImage = ogImageMatch[1];
            // Make sure we didn't just get another logo
            if (!isLogoImage(ogImage)) {
                return ogImage;
            }
        }
        
        // Fallback: try twitter:image
        const twitterImageMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i)
            || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image["']/i);
        
        if (twitterImageMatch && twitterImageMatch[1]) {
            const twitterImage = twitterImageMatch[1];
            if (!isLogoImage(twitterImage)) {
                return twitterImage;
            }
        }
        
        return null;
    } catch (error) {
        // Silently fail - we'll just use the placeholder
        console.log(`[OG Scrape] Failed for ${url}: ${error.message}`);
        return null;
    }
}

/**
 * Enhance article with better image if current one is a logo
 */
async function enhanceArticleImage(article) {
    if (!isLogoImage(article.image_url)) {
        return article; // Image is fine, no change needed
    }
    
    // Try to scrape the real OG image
    const ogImage = await scrapeOgImage(article.url);
    
    return {
        ...article,
        image_url: ogImage, // Will be null if scraping failed
    };
}

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
 * Fetch general market news from Polygon.io
 * Polygon provides better image URLs than Finnhub for many sources
 */
export async function fetchPolygonNews(limit = 50) {
    if (!polygonApiKey) {
        console.log('[Polygon News] No API key configured, skipping');
        return [];
    }
    
    const url = `https://api.polygon.io/v2/reference/news?limit=${limit}&apiKey=${polygonApiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Polygon API error: ${response.status}`);
        }
        
        const data = await response.json();
        const articles = data.results || [];
        
        // Normalize to our schema
        return articles.map(article => ({
            headline: article.title,
            summary: article.description || null,
            url: article.article_url,
            source: article.publisher?.name || 'Unknown',
            source_id: article.id?.toString() || null,
            // Polygon provides actual article images, not logos!
            image_url: article.image_url || null,
            category: 'general',
            related_tickers: article.tickers || [],
            published_at: article.published_utc,
            headline_hash: generateHeadlineHash(article.title),
        }));
    } catch (error) {
        console.error('Polygon fetch error:', error.message);
        throw error;
    }
}

/**
 * Fetch from all active sources
 */
export async function fetchAllNews() {
    const results = {
        articles: [],
        errors: [],
    };
    
    // Fetch from Polygon first - they have better images
    try {
        const polygonNews = await fetchPolygonNews(50);
        results.articles.push(...polygonNews);
        console.log(`[News Fetch] Got ${polygonNews.length} articles from Polygon`);
    } catch (error) {
        results.errors.push({ source: 'polygon', error: error.message });
    }
    
    // Fetch general news from Finnhub
    try {
        const finnhubNews = await fetchFinnhubGeneralNews();
        results.articles.push(...finnhubNews);
        console.log(`[News Fetch] Got ${finnhubNews.length} articles from Finnhub`);
    } catch (error) {
        results.errors.push({ source: 'finnhub', error: error.message });
    }
    
    // Enhance images for articles with logo placeholders (mainly Finnhub)
    // Process in batches to avoid overwhelming servers
    console.log(`[News Fetch] Enhancing images for ${results.articles.length} articles...`);
    
    const batchSize = 5;
    const enhancedArticles = [];
    
    for (let i = 0; i < results.articles.length; i += batchSize) {
        const batch = results.articles.slice(i, i + batchSize);
        const enhanced = await Promise.all(batch.map(enhanceArticleImage));
        enhancedArticles.push(...enhanced);
        
        // Small delay between batches to be respectful
        if (i + batchSize < results.articles.length) {
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }
    
    results.articles = enhancedArticles;
    console.log(`[News Fetch] Image enhancement complete`);
    
    return results;
}
