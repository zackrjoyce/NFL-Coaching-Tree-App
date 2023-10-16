import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import awsconfig from './aws-exports';

function GraphQLComponent() {
    const [data, setData] = useState(null);

    const getCoachingTreeQuery = /* GraphQL */ `
  query MyQuery {
    getCoachingTree(id: "Lions") {
      id
      hc
      oc
      dc
    }
  }
`;
    const fetchData = async () => {
        try {
            const response = await API.graphql(graphqlOperation(getCoachingTreeQuery));
            const responseData = response.data.getCoachingTree;

            // Handle the data (in this case, we're logging it)
            console.log(responseData);
            setData(responseData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Call the fetchData function to execute the query

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                // Data is available, display it
                <div>
                    <h2>Coaching Tree</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Head Coach (HC)</th>
                                <th>Offensive Coordinator (OC)</th>
                                <th>Defensive Coordinator (DC)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.hc}</td>
                                <td>{data.oc}</td>
                                <td>{data.dc}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                // Data is loading
                <p>Loading...</p>
            )}
        </div>
    );
}

export default GraphQLComponent;