export default async function handler(req, res) {
    const { query, type } = req.query; 

    if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
    }

    const apiKey = process.env.VITE_ALPHA_VANTAGE_KEY;
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.bestMatches && Array.isArray(data.bestMatches)) {
            const formattedResults = data.bestMatches.map(match => ({
                symbol: match['1. symbol'],
                name: match['2. name'],
                type: match['3. type'],
                region: match['4. region']
            }));
            res.status(200).json(formattedResults);
        } else {
            res.status(200).json([]);
        }
    } catch (error) {
        console.error('Error fetching from Alpha Vantage:', error);
        res.status(500).json({ error: 'Failed to fetch asset data' });
    }
}