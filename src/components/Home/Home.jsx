import React from 'react';

import Navigation from '../Navigation/Navigation';
import SearchBar from '../Searchbar/SearchBar';
import ArticleList from '../ArticleList/ArticleList';
import useArticles from '../../hooks/useArticles';
const Home = () => {
    /**
     * destructuring
     */
    const { articles, status, error, handleSearch, handleFilter, fetchArticles } = useArticles();

    return (
        <>
            <Navigation />
            <header className="header">
                <h1>News Aggregator</h1>
            </header>
            <main className="main">
                <SearchBar onSearch={handleSearch} onFilter={handleFilter} getArticlesList={fetchArticles} />
                {status === 'loading' && <div style={{display:"flex",justifyContent:"center"}}>Loading...</div>}
                {status === 'failed' && <div>{error}</div>}
                <ArticleList articles={articles} />
            </main>
        </>
    )
}

export default Home;