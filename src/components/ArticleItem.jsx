import React from 'react';

const ArticleItem = ({ article }) => {
    return (
        <div className="article-item">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p><strong>Source:</strong> {article.source}</p>
            <p><strong>Category:</strong> {article.category}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
};

export default ArticleItem;
