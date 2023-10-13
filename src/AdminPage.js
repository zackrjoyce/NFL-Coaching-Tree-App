import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { createOrUpdateCoachingTree } from './graphql/mutations';
import { getCoachTree } from './graphql/queries';
import './AdminPage.css'; // Import the CSS file

const AdminPage = () => {

    // Create state variables for dropdown and text entry values
    const [selectedTeam, setSelectedTeam] = useState('');
    const [hcValue, setHcValue] = useState('');
    const [ocValue, setOcValue] = useState('');
    const [dcValue, setDcValue] = useState('');
    const [coachingTreeData, setCoachingTreeData] = useState(null);
    const [coachTreeData, setCoachTreeData] = useState(null);

    useEffect(() => {
        console.log("DEBUG");
        const id = 'Titans'; // Replace with the desired ID
        const fetchCoachTreeData = async () => {
            try {
                // Retrieve data by ID using a GraphQL query
                const response = await API.graphql({
                    query: `
                       query GetCoachTree {
                           getCoachTree(id: "${id}") {
                               hc
                               oc
                               dc
                           }
                       }
                   `
                });

                const coachTree = response.data.getCoachTree;
                setCoachTreeData(coachTree);
            } catch (error) {
                console.error('Error fetching coach tree data:', error);
            }
        };

        fetchCoachTreeData();
    }, []);

    /*
    useEffect(() => {
        fetchCoachingTreeData();
    }, [selectedTeam]);


    const fetchCoachingTreeData = async () => {
        if (!selectedTeam) {
            return; // No team selected
        }

        try {
            const response = await API.graphql({
                query: getCoachTree,
                variables: {
                    id: selectedTeam, // Replace with the actual ID
                },
            });

            const coachingTree = response.data.getCoachTree;
            if (coachingTree) {
                // Update state with the fetched coaching tree data
                alert('Data retreived: ' + coachingTree.hc + ' ' + coachingTree.oc + ' ' + coachingTree.dc);
                setCoachingTreeData(coachingTree);
                setHcValue(coachingTree.hc);
                setOcValue(coachingTree.oc);
                setDcValue(coachingTree.dc);
            }
        } catch (error) {
            alert('Error fetching coaching tree data:', error);
        }
    };
    */

    const handleTeamChange = (event) => {
        console.log("DEBUG");
        setSelectedTeam(event.target.value);
    };

    const handleSetCoachingTree = async () => {
        console.log("DEBUG");
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
                query: createOrUpdateCoachingTree, // Define the mutation query
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
                        placeholder={coachingTreeData ? coachingTreeData.hc : ''}
                        value={hcValue}
                        onChange={(e) => setHcValue(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="oc">Offensive Coordinator:</label>
                    <input
                        type="text"
                        id="oc"
                        placeholder={coachingTreeData ? coachingTreeData.oc : ''}
                        value={ocValue}
                        onChange={(e) => setOcValue(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="dc">Defensive Coordinator:</label>
                    <input
                        type="text"
                        id="dc"
                        placeholder={coachingTreeData ? coachingTreeData.dc : ''}
                        value={dcValue}
                        onChange={(e) => setDcValue(e.target.value)}
                    />
                </div>
            </div>
            <div>
                {coachTreeData ? (
                    <div>
                        <p>Head Coach: {coachTreeData.hc}</p>
                        <p>Offensive Coordinator: {coachTreeData.oc}</p>
                        <p>Defensive Coordinator: {coachTreeData.dc}</p>
                    </div>
                ) : (
                    <p>Loading coach tree data...</p>
                )}
            </div>
        </div>
    );
};

export default AdminPage;