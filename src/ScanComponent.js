import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { listMatchups } from './graphql/queries';

const ScanComponent = () => {
    const [matchups, setMatchups] = useState([]);

    const fetchMatchups = async () => {
        try {
            const response = await API.graphql({
                query: listMatchups,
                filter: {
                    team1_hc: { eq: "Dan Campbell" },
                },
            });

            const items = response.data.listMatchups.items;
            setMatchups(items);
        } catch (error) {
            console.error('Error fetching matchups:', error);
        }
    };

    useEffect(() => {
        fetchMatchups();
    }, []); // Fetch matchups when the component mounts

    return (
        <div>
            <h1>Matchups with team1_hc equal to "Dan Campbell"</h1>
            <ul>
                {matchups.map((matchup) => (
                    <li key={matchup.id}>
                        {matchup.team1} vs {matchup.team2}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScanComponent;