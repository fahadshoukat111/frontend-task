import { useState, useEffect } from 'react';
import { fetchNewsAPI } from '../services/newsAPI';
import { fetchNYTNews } from '../services/nytAPI';
import { fetchGuardianNews } from '../services/guardianAPI';

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [preferences, setPreferences] = useState({
    sources: [],
    categories: [],
    authors: [],
  });

  const fetchArticles = async (query = '', category = '', source = '', startDate = '', endDate = '') => {
    setStatus('loading');
    try {
      const newsAPIArticles = await fetchNewsAPI(query, category, source, startDate, endDate);
      const nytArticles = await fetchNYTNews(query, category, startDate, endDate);
      const guardianArticles = await fetchGuardianNews(query, category, startDate, endDate);

      const combinedArticles = [
        ...newsAPIArticles,
        ...nytArticles,
        ...guardianArticles,
      ];

      setArticles(combinedArticles);
      setFilteredArticles(combinedArticles);
      setStatus('succeeded');
    } catch (err) {
      setError(err.message);
      setStatus('failed');
    }
  };

  const handleSearch = (query, category, source, startDate, endDate) => {
    fetchArticles(query, category, source, startDate, endDate);
  };

  const handleFilter = (category, source, startDate, endDate) => {
    setFilteredArticles(articles.filter(article => {
      const articleDate = new Date(article.date);
      const isCategoryMatch = category ? article.category === category : true;
      const isSourceMatch = source ? article.source === source : true;
      const isDateMatch = (startDate ? articleDate >= new Date(startDate) : true) &&
                          (endDate ? articleDate <= new Date(endDate) : true);

      return isCategoryMatch && isSourceMatch && isDateMatch;
    }));
  };

  const handlePreferencesChange = (newPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('preferences', JSON.stringify(newPreferences));
    fetchArticles('', newPreferences.categories.join(','), newPreferences.sources.join(','), '', '');
  };

  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem('preferences'));
    if (savedPreferences) {
      setPreferences(savedPreferences);
      fetchArticles('', savedPreferences.categories?.join(','), savedPreferences.sources.join(','), '', '');
    } else {
      fetchArticles();
    }
  }, []);

  return {
    articles: filteredArticles,
    status,
    error,
    preferences,
    handleSearch,
    handleFilter,
    handlePreferencesChange,
  };
};

export default useArticles;
