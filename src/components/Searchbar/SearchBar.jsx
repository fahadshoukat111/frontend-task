import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, onFilter, getArticlesList }) => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [source, setSource] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    /**
     * search function use here which get from parent component
        */
    const handleSearch = () => {
        onSearch(query, category, source, startDate, endDate);
    };

    /**
     * filter function use here which get from parent component
     */
    const handleFilter = () => {
        onFilter(category, source, startDate, endDate);
    };

    /**
     * useEffect for when input make empty after filter 
     */
    useEffect(() => {
        if (category === "" || source === "") {
            getArticlesList();
        }
    }, [category,source]);

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                type="text"
                placeholder="Source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
            />
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default SearchBar;
