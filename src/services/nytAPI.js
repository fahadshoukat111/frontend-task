import axios from 'axios';

const NYT_API_KEY = 'GThoxPuq4dSmhGCkW2IpUgSFqGiySUDx';

export const fetchNYTNews = async (query, category, startDate, endDate) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${category}&api-key=${NYT_API_KEY}`;
    try {
        const response = await axios.get(url);
        const articles = response.data.response.docs.map(doc => ({
            title: doc.headline.main,
            description: doc.abstract,
            url: doc.web_url,
            source: 'New York Times',
            category: doc.news_desk,
            date: doc.pub_date,
        }));
        return articles;
    } catch (error) {
        console.error("Error fetching articles from NYT API:", error);
        return [];
    }
};
