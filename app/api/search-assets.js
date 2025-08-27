import 'dotenv/config';

const polygonApiKey = process.env.POLYGON_API_KEY;

export default async function handler(req, res) {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
    }

    const url = `https://api.polygon.io/v3/reference/tickers?search=${query}&active=true&limit=10&apiKey=${polygonApiKey}`;

    try {
        const response = await fetch(url);

        // --- THIS IS THE FIX ---
        // If the request to Polygon fails, handle it gracefully
        if (!response.ok) {
            // Specifically check for the rate limit error
            if (response.status === 429) {
                return res.status(429).json({ error: 'Rate limit exceeded. Please wait a moment and try again.' });
            }
            // For any other error, send a generic server error
            throw new Error(`Polygon.io API request failed: ${response.status}`);
        }
        
        const data = await response.json();

        if (data.results && Array.isArray(data.results)) {
            const formattedResults = data.results.map(match => ({
                symbol: match.ticker,
                name: match.name,
                type: match.market,
                region: match.primary_exchange
            }));
            res.status(200).json(formattedResults);
        } else {
            res.status(200).json([]);
        }
    } catch (error) {
        console.error('Error fetching from Polygon.io:', error);
        res.status(500).json({ error: 'Failed to fetch asset data' });
    }
}