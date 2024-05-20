import React from 'react';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import useArticles from './hooks/useArticles';
import './App.css';

const App = () => {
  const { articles, status, error, preferences, handleSearch, handleFilter, handlePreferencesChange } = useArticles();
  return (
    <div className="app">
      <header className="header">
        <h1>News Aggregator</h1>
      </header>
      <main className="main">
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>{error}</div>}
        <ArticleList articles={articles} />
      </main>
    </div>
  );
};

export default App;
