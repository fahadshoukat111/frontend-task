import React, { useState, useEffect } from 'react';
import "./Prefarace.css"
import PrefraceArticleList from '../PrefaraceArticleList/PrefaraceArticleList';
const Preferences = ({ articles, status }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSource, setSelectedSource] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [prefArticles, setPrefArticles] = useState([]);

    /**
     * remove duplicate/same value from array/list
     */
    const getUniqueValues = (key) => {
        return [...new Set(articles.map(article => article[key]).filter(value => value))];
    };

    const uniqueCategories = getUniqueValues('category');
    const uniqueSources = getUniqueValues('source');
    const uniqueAuthors = getUniqueValues('author');

    useEffect(() => {
        const filterArticles = () => {
            let filtered = articles;

            if (selectedCategory) {
                // Filter by selected category
                filtered = filtered.filter(article => article.category === selectedCategory);

            }
            else if (selectedSource) {
                // Filter by selected source
                filtered = filtered.filter(article => article.source === selectedSource);

            }
            else if (selectedAuthor) {

                // Filter by selected author
                filtered = filtered.filter(article => article.author === selectedAuthor);


            }

            setPrefArticles(filtered);
        };

        filterArticles();
    }, [selectedCategory, selectedSource, selectedAuthor, articles]);

    return (
        <>
            <div className="main-select">
                <select
                    id="categories"
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setSelectedSource(''); // Clear selected source
                        setSelectedAuthor(''); // Clear selected author
                    }}
                >
                    <option value="">Select a Category</option>
                    {uniqueCategories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <select
                    id="sources"
                    value={selectedSource}
                    onChange={(e) => {
                        setSelectedSource(e.target.value);
                        setSelectedCategory(''); // Clear selected category
                        setSelectedAuthor(''); // Clear selected author
                    }}
                >
                    <option value="">Select a Source</option>
                    {uniqueSources.map((source, index) => (
                        <option key={index} value={source}>
                            {source}
                        </option>
                    ))}
                </select>

                <select
                    id="authors"
                    value={selectedAuthor}
                    onChange={(e) => {
                        setSelectedAuthor(e.target.value);
                        setSelectedCategory(''); // Clear selected category
                        setSelectedSource(''); // Clear selected source
                    }}
                >
                    <option value="">Select an Author</option>
                    {uniqueAuthors.map((author, index) => (
                        <option key={index} value={author}>
                            {author}
                        </option>
                    ))}
                </select>

            </div>
            <div>
                {status === 'loading' && <div style={{ display: "flex", justifyContent: "center" }}>Loading...</div>}
                <PrefraceArticleList prefArticles={prefArticles} />
            </div>
        </>
    );
};

export default Preferences;
