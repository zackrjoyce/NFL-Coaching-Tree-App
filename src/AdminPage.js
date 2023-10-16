import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import './AdminPage.css'; // Import the CSS file
import ExcelReader from './ExcelReader';

const AdminPage = () => {
    const [data, setData] = useState(null);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [hcValue, setHcValue] = useState('');
    const [ocValue, setOcValue] = useState('');
    const [dcValue, setDcValue] = useState('');

    const handleTeamChange = (event) => {
        const team = event.target.value;
        setSelectedTeam(team);
        if (team) {
            fetchData(team);
        }
    };

    const fetchData = async (id) => {
        let getCoachingTreeQuery = /* GraphQL */ `
  query MyQuery {
    getCoachingTree(id: "${id}") {
      id
      hc
      oc
      dc
    }
  }
`;

        try {
            const response = await API.graphql(graphqlOperation(getCoachingTreeQuery));
            const responseData = response.data.getCoachingTree;

            // Handle the data (in this case, we're logging it)
            console.log(responseData);
            setData(responseData);

            // Set placeholder values for hc, oc, and dc
            setHcValue(responseData.hc || '');
            setOcValue(responseData.oc || '');
            setDcValue(responseData.dc || '');
        } catch (error) {
            console.error("Error fetching data:", error);
            // Set placeholder values for hc, oc, and dc
            setHcValue('');
            setOcValue('');
            setDcValue('');
        }
    };

    // Call the fetchData function to execute the query

    const handleSetCoachingTree = async () => {
        if (selectedTeam) {
            const input = {
                id: selectedTeam,
                hc: hcValue,
                oc: ocValue,
                dc: dcValue,
            };

            let createOrUpdateCoachingTreeMutation = /* GraphQL */ `
  mutation MyMutation {
    updateCoachingTree(input: {dc: "${input.dc}", hc: "${input.hc}", id: "${input.id}", oc: "${input.oc}"}) {
  	  id
    }
  }`;
            console.log(createOrUpdateCoachingTreeMutation);

            try {
                const response = await API.graphql(graphqlOperation(createOrUpdateCoachingTreeMutation));

                console.log('Mutation response:', response);

                // You can choose to update the data state if needed
                fetchData(selectedTeam);
            } catch (error) {
                console.error("Error updating data:", error);
            }
        }
    };

    useEffect(() => {
        fetchData(selectedTeam); // Load initial data if a team is pre-selected
    }, [selectedTeam]);

    return (
        <div>
            <h1>Select file to upload to database</h1>
            <div>
                <ExcelReader /> {/* Render the ExcelReader component here */}
            </div>
            <h1 className="centered-header" style={{ marginTop: '20px' }}>
                Select team to change coaching tree
            </h1>
            <div className="centered-elements" style={{ marginTop: '20px' }}>
                <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
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
                    <input type="text" id="hc" value={hcValue} onChange={(e) => setHcValue(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="oc">Offensive Coordinator:</label>
                    <input type="text" id="oc" value={ocValue} onChange={(e) => setOcValue(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="dc">Defensive Coordinator:</label>
                    <input type="text" id="dc" value={dcValue} onChange={(e) => setDcValue(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;