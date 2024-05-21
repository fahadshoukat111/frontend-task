import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/preferences">Preferences</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;