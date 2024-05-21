import React from 'react';
import {  Route } from 'react-router-dom';

const ArticleList = ({ articles }) => {
    return (
        <div className="article-list">
            {articles.map((article, index) => (
                <div key={index} className="article-item">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p><strong>Source:</strong> {article.source}</p>
                {article.category && (
                    <p><strong>Category:</strong> {article.category}</p>
                )}
                {article.author && (
                    <p><strong>Author:</strong> {article.author}</p>
                )}
                <p><strong>Published:</strong> {new Date(article.date).toLocaleDateString()}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>

            </div>
            ))
            }
        </div >
    );
};

export default ArticleList;
