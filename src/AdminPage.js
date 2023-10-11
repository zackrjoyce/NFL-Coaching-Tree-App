import React, { useState } from 'react';
import { API } from 'aws-amplify';
import './AdminPage.css'; // Import the CSS file

const AdminPage = () => {

    // Create state variables for dropdown and text entry values
    const [selectedTeam, setSelectedTeam] = useState('');
    const [hcValue, setHcValue] = useState('');
    const [ocValue, setOcValue] = useState('');
    const [dcValue, setDcValue] = useState('');

    const handleTeamChange = (event) => {
        setSelectedTeam(event.target.value);
    };

    const handleSetCoachingTree = async () => {
        // Validate that the selectedTeam is not empty
        if (!selectedTeam) {
            alert('Please select a team.');
            return;
        }

        // Create a DynamoDB document to update/create
        const coachingTree = {
            id: selectedTeam, // Use the selected team as the document ID
            hc: hcValue,
            oc: ocValue,
            dc: dcValue,
        };

        try {
            // Make an API call to update/create the coachingTree document
            await API.graphql({
                query: createOrUpdateCoachingTreeMutation, // Define the mutation query
                variables: { input: coachingTree },
            });

            // Clear the text entry boxes after a successful update
            setHcValue('');
            setOcValue('');
            setDcValue('');

            alert('Coaching tree updated successfully!');
        } catch (error) {
            console.error('Error updating coaching tree:', error);
        }
    };

    return (
        <div>
            <h1>Select file to upload to database</h1>
            <div>
                <input type="file" id="fileInput" accept=".xlsx, .xls" /> {/* Restrict to Excel files */}
                <button>Upload</button>
            </div>
            <h1 className="centered-header" style={{ marginTop: '20px' }}>
                Select team to change coaching tree
            </h1>
            <div className="centered-elements" style={{ marginTop: '20px' }}>
                <select
                    value={selectedTeam}
                    onChange={handleTeamChange}
                >
                    <option value="">Select Team</option>
                    <option value="Cardinals">Arizona Cardinals</option>
                    <option value="Falcons">Atlanta Falcons</option>
                    <option value="Ravens">Baltimore Ravens</option>
                    <option value="Bills">Buffalo Bills</option>
                    <option value="Panthers">Carolina Panthers</option>
                    <option value="Bears">Chicago Bears</option>
                    <option value="Bengals">Cincinnati Bengals</option>
                    <option value="Browns">Cleveland Browns</option>
                    <option value="Cowboys">Dallas Cowboys</option>
                    <option value="Broncos">Denver Broncos</option>
                    <option value="Lions">Detroit Lions</option>
                    <option value="Packers">Green Bay Packers</option>
                    <option value="Texans">Houston Texans</option>
                    <option value="Colts">Indianapolis Colts</option>
                    <option value="Jaguars">Jacksonville Jaguars</option>
                    <option value="Chiefs">Kansas City Chiefs</option>
                    <option value="Raiders">Las Vegas Raiders</option>
                    <option value="Chargers">Los Angeles Chargers</option>
                    <option value="Rams">Los Angeles Rams</option>
                    <option value="Dolphins">Miami Dolphins</option>
                    <option value="Vikings">Minnesota Vikings</option>
                    <option value="Patriots">New England Patriots</option>
                    <option value="Saints">New Orleans Saints</option>
                    <option value="Giants">New York Giants</option>
                    <option value="Jets">New York Jets</option>
                    <option value="Eagles">Philadelphia Eagles</option>
                    <option value="Steelers">Pittsburgh Steelers</option>
                    <option value="49ers">San Francisco 49ers</option>
                    <option value="Seahawks">Seattle Seahawks</option>
                    <option value="Buccaneers">Tampa Bay Buccaneers</option>
                    <option value="Titans">Tennessee Titans</option>
                    <option value="Commanders">Washington Commanders</option>
                </select>
                <button onClick={handleSetCoachingTree}>Set Coaching Tree</button>
            </div>
            <div className="text-entry-boxes" style={{ marginTop: '20px' }}>
                <div>
                    <label htmlFor="hc">Head Coach:</label>
                    <input
                        type="text"
                        id="hc"
                        value={hcValue}
                        onChange={(e) => setHcValue(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="oc">Offensive Coordinator:</label>
                    <input
                        type="text"
                        id="oc"
                        value={ocValue}
                        onChange={(e) => setOcValue(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="dc">Defensive Coordinator:</label>
                    <input
                        type="text"
                        id="dc"
                        value={dcValue}
                        onChange={(e) => setDcValue(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;