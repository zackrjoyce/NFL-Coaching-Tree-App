import React from 'react';

class ScrollMatchup extends React.Component {
    render() {
        const {
            team1,
            team2,
            team1_hc,
            team1_oc,
            team1_dc,
            team2_hc,
            team2_oc,
            team2_dc,
            team1_score,
            team2_score,
            injury,
            tanking,
            turnover_dif,
        } = this.props;

        return (
            <div className="matchup-info">
                <p>{team1}</p>
                <p>{team1_hc}</p>
                <p>{team1_oc}</p>
                <p>{team1_dc}</p>
                <p>{team1_score}</p>
                <p>{team2}</p>
                <p>{team2_hc}</p>
                <p>{team2_oc}</p>
                <p>{team2_dc}</p>
                <p>{team2_score}</p>
                <p>{injury}</p>
                <p>{tanking}</p>
                <p>{turnover_dif}</p>
            </div>
        );
    }
}

export default ScrollMatchup;