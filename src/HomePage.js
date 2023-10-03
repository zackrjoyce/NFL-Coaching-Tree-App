import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="centered-container">
            <Link to="/user">
                <button className="button">Look Up Coaching Trees</button>
            </Link>
            <Link to="/admin">
                <button className="button">Upload Data/Update Coaching Trees</button>
            </Link>
        </div>
    );
};

export default HomePage;