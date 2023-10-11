import React from 'react';
import './HomePage.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify'; // Import your authentication library

const HomePage = () => {
    const signOut = async () => {
        try {
            await Auth.signOut(); // Sign the user out using your authentication library
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className="centered-container">
            <Link to="/user">
                <button className="button">Look Up Coaching Trees</button>
            </Link>
            <Link to="/admin">
                <button className="button">Upload Data/Update Coaching Trees</button>
            </Link>
            <button className="button" onClick={signOut}>
                Sign Out
            </button>
        </div>
    );
};

export default HomePage;