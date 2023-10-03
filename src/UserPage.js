import React from 'react';
import './UserPage.css'; // Import the CSS file

const UserPage = () => {
    return (
        <div className="container">
            <div className="inputContainer">
                {/* Left String Selector Box */}
                <select className="stringSelector">
                    {/* Add options for the left selector */}
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
            <div className="centerText">
                {/* Center Text */}
                @
            </div>
            <div className="inputContainer">
                {/* Right String Selector Box */}
                <select className="stringSelector">
                    {/* Add options for the right selector */}
                    <option>Option A</option>
                    <option>Option B</option>
                    <option>Option C</option>
                </select>
            </div>
            <div className="buttonContainer">
                {/* Button on the right */}
                <button className="button">Generate Coach Matchups</button>
            </div>
            <div className="scrollViewContainer">
                {/* Scroll View */}
                <div className="scrollView">
                    {/* Add content for the scroll view */}
                    <p>Scroll View Content Here</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>More Content</p>
                    <p>Even More Content</p>
                    {/* You can add more elements as needed */}
                </div>
            </div>
        </div>
    );
};

export default UserPage;