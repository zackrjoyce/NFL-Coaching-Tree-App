import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createMatchup } from './graphql/mutations';

const initialValues = {
    team1_hc: 'Zack',
    team1_oc: 'Zack OC',
    team1_dc: 'Zack DC',
    team2_hc: 'Mike Vrabel',
    team2_oc: 'Tim Kelly',
    team2_dc: 'Shane Bowen',
    turnover_dif: '0',
    team1_score: '10',
    team2_score: '50',
};

function CreateMatchup() {
    const [matchupData, setMatchupData] = useState(initialValues);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await API.graphql(
                graphqlOperation(createMatchup, { input: matchupData })
            );

            console.log('Matchup created:', data.createMatchup);
            // You can add further logic or redirect to another page on success
        } catch (error) {
            console.error('Error creating matchup:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMatchupData({ ...matchupData, [name]: value });
    };

    return (
        <div>
            <h2>Create a Matchup</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Team 1 HC:
                    <input
                        type="text"
                        name="team1_hc"
                        value={matchupData.team1_hc}
                        onChange={handleChange}
                    />
                </label>
                {/* Repeat similar inputs for other fields */}
                <button type="submit">Create Matchup</button>
            </form>
        </div>
    );
}

export default CreateMatchup;