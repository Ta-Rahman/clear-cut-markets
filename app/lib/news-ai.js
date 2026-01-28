/**
 * AI Analysis Module
 * 
 * PLACEHOLDER - To be implemented when OpenAI credits are available
 * 
 * This module will handle:
 * - Sentiment analysis (bullish/bearish/neutral)
 * - Article summarization
 * - Ticker/entity extraction
 * - Sector classification
 * - Impact assessment
 */

// const OpenAI = require('openai');
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Analyze a single article using AI
 * @param {Object} article - Article from database
 * @returns {Object} - Analysis results
 * 
 * PLACEHOLDER - Returns mock data for now
 */
export async function analyzeArticle(article) {
    // TODO: Implement with OpenAI when ready
    // 
    // const prompt = `Analyze this financial news article:
    // 
    // Headline: ${article.headline}
    // Summary: ${article.summary}
    // 
    // Respond in JSON format:
    // {
    //   "sentiment": "bullish" | "bearish" | "neutral",
    //   "sentimentScore": -1.0 to 1.0,
    //   "summary": "1-2 sentence summary",
    //   "tickers": ["AAPL", "MSFT"],
    //   "sectors": ["technology", "finance"],
    //   "impact": "high" | "medium" | "low"
    // }`;
    //
    // const response = await openai.chat.completions.create({
    //     model: 'gpt-4o-mini',
    //     messages: [{ role: 'user', content: prompt }],
    //     response_format: { type: 'json_object' },
    // });
    
    console.log(`[AI PLACEHOLDER] Would analyze: ${article.headline.substring(0, 50)}...`);
    
    // Return null to indicate no analysis performed
    // When AI is implemented, this will return the analysis object
    return null;
}

/**
 * Batch analyze multiple articles
 * @param {Array} articles - Array of articles
 * @returns {Array} - Array of { articleId, analysis } objects
 */
export async function analyzeArticlesBatch(articles) {
    const results = [];
    
    for (const article of articles) {
        try {
            const analysis = await analyzeArticle(article);
            if (analysis) {
                results.push({
                    articleId: article.id,
                    analysis,
                });
            }
        } catch (error) {
            console.error(`Error analyzing article ${article.id}:`, error.message);
        }
    }
    
    return results;
}

/**
 * Check if AI analysis is available
 */
export function isAIEnabled() {
    return !!process.env.OPENAI_API_KEY;
}

/**
 * Estimated cost for analyzing an article
 * GPT-4o-mini: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
 * Average article: ~500 input tokens, ~200 output tokens
 * Cost per article: ~$0.0002
 */
export const ESTIMATED_COST_PER_ARTICLE = 0.0002;
