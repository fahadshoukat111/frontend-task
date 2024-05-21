import axios from 'axios';

const GUARDIAN_API_KEY = 'test'; // Replace 'YOUR_API_KEY' with your actual API key
const BASE_URL = 'https://content.guardianapis.com';

/**
 * fetch api and normalize data to match other
 * @param {*} query 
 * @param {*} category 
 * @param {*} startDate 
 * @param {*} endDate 
 * @returns 
 */
export const fetchGuardianNews = async (query = '', category = '', startDate = '', endDate = '') => {
    try {
        const queryParams = new URLSearchParams({
            q: query,
            'api-key': GUARDIAN_API_KEY,
        });
        if (category) {
            queryParams.append('section', category);
        }
        if (startDate) {
            queryParams.append('from-date', startDate);
        }
        if (endDate) {
            queryParams.append('to-date', endDate);
        }
        const url = `${BASE_URL}/search?${queryParams.toString()}`;
        const response = await axios.get(url);
        return response.data.response.results.map(article => ({
            title: article.webTitle,
            description: article.fields?.trailText || '',
            url: article.webUrl,
            source: 'The Guardian',
            category: article.sectionName,
            date: article.webPublicationDate,
        }));
    } catch (error) {
        console.error("Error fetching articles from The Guardian API:", error.message);
        return [];
    }
};
