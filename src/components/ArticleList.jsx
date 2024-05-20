import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
    console.log("articles", articles)
    return (
        <div className="article-list">
            {articles.map((article, index) => (
                <div key={index} className="article-item">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    <p><strong>Source:</strong> {article.source}</p>
                    {article.category && (
                        <p><strong>Category:</strong> {article.category}</p>
                    )}
                    <p><strong>Published:</strong> {new Date(article.date).toLocaleDateString()}</p>
                </div>
            ))
            }
        </div >
    );
};

export default ArticleList;
