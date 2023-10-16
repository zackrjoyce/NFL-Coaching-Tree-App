import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as XLSX from 'xlsx';

class ExcelReader extends Component {
    state = {
        data: [],
        uploading: false,
        retrieving: false,
    };

    handleFileUpload = (e) => {
        this.setState({ retrieving: true });
        console.log('Start.');

        const file = e.target.files[0];
        const reader = new FileReader();

        this.matchups = [];

        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });

            // Iterate through each sheet in the Excel file
            workbook.SheetNames.forEach(sheetName => {
                const worksheet = workbook.Sheets[sheetName];
                const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                let weekindex = 0;

                // Iterate through rows in the sheet
                for (let i = 1; i < excelData.length; i++) {
                    const row = excelData[i];

                    // Process the row data
                    if (row.includes("Week")) {
                        //console.log("Week Found at index " + row.indexOf("Week"));
                        weekindex = row.indexOf("Week");
                    }
                    else {
                        //console.log("Processing row for: " + sheetName + ", week index: " + weekindex + " " + row[weekindex]);
                        //console.log(row);
                        if (weekindex != 0) {
                            const matchup = {};
                            matchup["team1"] = sheetName;
      
                            matchup["team2"] = row[weekindex + 1] !== undefined ? row[weekindex + 1] : "";
                            matchup["team1_hc"] = row[weekindex + 2] !== undefined ? row[weekindex + 2] : "";
                            matchup["team1_oc"] = row[weekindex + 3] !== undefined ? row[weekindex + 3] : "";
                            matchup["team1_dc"] = row[weekindex + 4] !== undefined ? row[weekindex + 4] : "";
                            matchup["team2_hc"] = row[weekindex + 5] !== undefined ? row[weekindex + 5] : "";
                            matchup["team2_oc"] = row[weekindex + 6] !== undefined ? row[weekindex + 6] : "";
                            matchup["team2_dc"] = row[weekindex + 7] !== undefined ? row[weekindex + 7] : "";
                            matchup["injury"] = row[weekindex + 8] !== undefined ? row[weekindex + 8] : "";
                            matchup["tanking"] = row[weekindex + 9] !== undefined ? row[weekindex + 9] : "";
                            matchup["team1_score"] = row[weekindex + 11] !== undefined ? row[weekindex + 11] : "";
                            matchup["team2_score"] = row[weekindex + 12] !== undefined ? row[weekindex + 12] : "";
                            matchup["turnover_dif"] = row[weekindex + 13] !== undefined ? row[weekindex + 13] : "";

                            //console.log(matchup["team1"] + " vs " + matchup["team2"] + ": " + matchup["team1_score"] + "-" + matchup["team2_score"]);

                            if (matchup["team1"] != "" && matchup["team2"] != "" && matchup["team1_score"] != "" && matchup["team2_score"] != "") {
                                console.log(matchup["team1"] + " vs " + matchup["team2"] + ": " + matchup["team1_score"] + "-" + matchup["team2_score"]);
                                this.matchups.push(matchup);
                            }
                        }
                    }
                }
            });
            console.log("finished");
            this.setState({ retrieving: false });
        };

        reader.readAsBinaryString(file);
    }

    handleUploadData = async () => {
        if (this.matchups.length === 0) {
            console.error('No data to upload.');
            return;
        }

        // Set the uploading state to true
        this.setState({ uploading: true });

        try {
            let uid = 0;

            for (const matchup of this.matchups) {
                console.log(uid + " " + matchup["injury"] + " " + matchup["tanking"] + " " + matchup["team1"] + " " + matchup["team1_dc"] + " " + matchup["team2"]);
                const createMatchup = /* GraphQL */ `
  mutation MyMutation {
    createMatchup(input: {id: "${uid.toString()}", injury: "${matchup["injury"]}", tanking: "${matchup["tanking"]}", team1: "${matchup["team1"]}", team1_dc: "${matchup["team1_dc"]}", team1_hc: "${matchup["team1_hc"]}", team1_oc: "${matchup["team1_oc"]}", team1_score: "${matchup["team1_score"]}", team2: "${matchup["team2"]}", team2_dc: "${matchup["team2_dc"]}", team2_hc: "${matchup["team2_hc"]}", team2_oc: "${matchup["team2_oc"]}", team2_score: "${matchup["team2_score"]}", turnover_dif: "${matchup["turnover_dif"]}"}) {
      id
    }
  }
`;
                const response = await API.graphql(graphqlOperation(createMatchup));

                uid++;
            }

            // Data uploaded successfully, you can perform additional actions here
            console.log('All data uploaded successfully');
        } catch (error) {
            console.error('Error uploading data:', error);
        } finally {
            // Set the uploading state to false
            this.setState({ uploading: false });
        }
    }

    render() {
        return (
            <div>
                <h1>Upload Excel File</h1>
                <input type="file" accept=".xlsx, .xls" onChange={this.handleFileUpload} />
                <button onClick={this.handleUploadData} disabled={this.state.uploading, this.state.retreiving}>
                    {this.state.retrieving
                        ? 'Retrieving data...'
                        : this.state.uploading
                            ? 'Uploading...'
                            : 'Upload Data'}
                </button>
            </div>
        );
    }
}

export default ExcelReader;