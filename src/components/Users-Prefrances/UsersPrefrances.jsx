import React from 'react';

import Navigation from '../Navigation/Navigation';
import useArticles from '../../hooks/useArticles';
import Preferences from '../Prefrance/Preferences';

const UsersPrefrances = () => {
    const { articles, status } = useArticles();

    return (
        <>
            <Navigation />
            <header className="header">
                <h1>Customize News Feed</h1>
            </header>
            <main className="main">
                <Preferences articles={articles} status={status} />
            </main>
        </>
    )
}

export default UsersPrefrances