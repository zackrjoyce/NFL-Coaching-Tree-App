import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './UserPage.css'; // Import the CSS file
import { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import ScrollHeader from './ScrollHeader'; // Import the Header component
import ScrollMatchup from './ScrollMatchup'; // Import the Header component
import { listMatchups } from './graphql/queries';

const UserPage = () => {
    // Define a state variable to hold the data from the database
    const [selectedOption1, setSelectedOption1] = useState(''); // State to store the selected option 1
    const [selectedOption2, setSelectedOption2] = useState(''); // State to store the selected option 2
    const [coachTreeData1, setCoachTreeData1] = useState([]);
    const [coachTreeData2, setCoachTreeData2] = useState([]);
    const [scannedMatchups, setScannedMatchups] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchScannedMatchups = async (param, coach) => {
        const getCoachingTreeQuery = /* GraphQL */ `
query MyQuery {
  listMatchups(filter: {${param}: {contains: "${coach}"}}, limit: 4000) {
    items {
      id
      injury
      tanking
      team1
      team2_oc
      team2_hc
      team2
      team2_dc
      team1_score
      team1_oc
      team1_hc
      team1_dc
      team2_score
      turnover_dif
    }
  }
}

`;

        try {
            const result = await API.graphql(graphqlOperation(getCoachingTreeQuery));
            return result.data.listMatchups.items;
        } catch (error) {
            console.error('Error fetching scanned matchups:', error);
            return []
        }
    };


    const runCoachGraphQLQuery = async (id) => {
        // Define your GraphQL query here
        const getCoachingTreeQuery = /* GraphQL */ `
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
            const result = await API.graphql(graphqlOperation(getCoachingTreeQuery));
            console.log("Success");

            return result.data.getCoachingTree;
        } catch (error) {
            console.error('Error running GraphQL query: ', error);

            return null;
        }
    };

    // Handle button click
    const handleGenerateMatchupsClick = async () => {
        if (selectedOption1 && selectedOption2) {
            setLoading(true);

            const coach_tree_1 = await runCoachGraphQLQuery(selectedOption1, setCoachTreeData1);
            const coach_tree_2 = await runCoachGraphQLQuery(selectedOption2, setCoachTreeData2);

            let hc_matchups_hc = await fetchScannedMatchups("team1_hc", coach_tree_1["hc"]);
            let hc_matchups_oc = await fetchScannedMatchups("team1_oc", coach_tree_1["hc"]);
            let hc_matchups_dc = await fetchScannedMatchups("team1_dc", coach_tree_1["hc"]);

            let oc_matchups_hc = await fetchScannedMatchups("team1_hc", coach_tree_1["oc"]);
            let oc_matchups_oc = await fetchScannedMatchups("team1_oc", coach_tree_1["oc"]);
            let oc_matchups_dc = await fetchScannedMatchups("team1_dc", coach_tree_1["oc"]);

            let dc_matchups_hc = await fetchScannedMatchups("team1_hc", coach_tree_1["dc"]);
            let dc_matchups_oc = await fetchScannedMatchups("team1_oc", coach_tree_1["dc"]);
            let dc_matchups_dc = await fetchScannedMatchups("team1_dc", coach_tree_1["dc"]);

            const hc_matchups = hc_matchups_hc.concat(hc_matchups_oc, hc_matchups_dc);
            const oc_matchups = oc_matchups_hc.concat(oc_matchups_oc, oc_matchups_dc);
            const dc_matchups = dc_matchups_hc.concat(dc_matchups_oc, dc_matchups_dc);

            const opponent_coaches = [coach_tree_2["hc"], coach_tree_2["oc"], coach_tree_2["dc"]];
            let query = [];

            let match_ids = [];

            for (const hc_matchup of hc_matchups) {
                if (opponent_coaches.includes(hc_matchup["team2_hc"]) || opponent_coaches.includes(hc_matchup["team2_oc"]) || opponent_coaches.includes(hc_matchup["team2_dc"])) {
                    if (!match_ids.includes(hc_matchup["id"])) {
                        query.push(hc_matchup);
                        match_ids.push(hc_matchup["id"]);
                    }
                }
            }

            for (const oc_matchup of oc_matchups) {
                if (opponent_coaches.includes(oc_matchup["team2_hc"]) || opponent_coaches.includes(oc_matchup["team2_oc"]) || opponent_coaches.includes(oc_matchup["team2_dc"])) {
                    if (!match_ids.includes(oc_matchup["id"])) {
                        query.push(oc_matchup);
                        match_ids.push(oc_matchup["id"]);
                    }
                }
            }

            for (const dc_matchup of dc_matchups) {
                if (opponent_coaches.includes(dc_matchup["team2_hc"]) || opponent_coaches.includes(dc_matchup["team2_oc"]) || opponent_coaches.includes(dc_matchup["team2_dc"])) {
                    if (!match_ids.includes(dc_matchups["id"])) {
                        query.push(dc_matchup);
                        match_ids.push(dc_matchups["id"]);
                    }
                }
            }

            console.log("Complete!");
            console.log(query.length);
            console.log(hc_matchups.length);
            console.log(oc_matchups.length);
            console.log(dc_matchups.length);

            setScannedMatchups(query);

            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="inputContainer">
                {/* Left String Selector Box */}
                <select className="stringSelector" onChange={(e) => setSelectedOption1(e.target.value)}>
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
            </div>
            <div className="centerText">
                {/* Center Text */}
                @
            </div>
            <div className="inputContainer">
                {/* Right String Selector Box */}
                <select className="stringSelector" onChange={(e) => setSelectedOption2(e.target.value)}>
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
            </div>
            <div className="buttonContainer">
                {/* Button on the right */}
                <button className="button" onClick={handleGenerateMatchupsClick} disabled={loading}>
                    {loading
                        ? 'Loading...'
                        : 'Generate Coach Matchups'}
                </button>
            </div>
            <div className="scrollViewContainer">
                {/* Scroll View */}
                <div className="scrollView">                  
                    <h2>Past Matchups Between Coach Trees</h2>
                    <ul>
                        {scannedMatchups.map((matchup) => (
                            <li key={matchup.id}>
                                <strong>{matchup.team1} vs {matchup.team2}</strong>, Score: <strong>{matchup.team1_score}-{matchup.team2_score}</strong>, Turnover Dif: {matchup.turnover_dif}, Major Injury: {matchup.injury !== "" ? matchup.injury : "N/A"}, Tanking: {matchup.tanking !== "" ? matchup.tanking : "N/A"}, 
                                Team HC: {matchup.team1_hc}, Team OC: {matchup.team1_oc}, Team DC: {matchup.team1_dc}, Opponent HC: {matchup.team2_hc}, Opponent OC: {matchup.team2_oc}, Opponent DC: {matchup.team2_dc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserPage;