import axios from 'axios';

const NEWS_API_KEY = '387646102e6e442bbe4265ce73f539a2';
const BASE_URL = 'https://newsapi.org/v2';


export const fetchNewsAPI = async (query = '', category = '', startDate = '', endDate = '') => {
    const response = await axios.get(`${BASE_URL}/everything`, {
        params: {
            q: query || 'tesla',
            // category: category,
            source: 'News Api',
            from: startDate,
            to: endDate,
            apiKey: NEWS_API_KEY,
        },
    });
    return response.data.articles.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        source: article.source.name,
        category: category,
        date: article.publishedAt,
    }));
};