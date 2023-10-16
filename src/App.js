import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import {
    Button,
    Flex,
    Heading,
    Text,
    TextField,
    View,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import AppRouter from './AppRouter';
import awsconfig from './aws-exports';

// Configure Amplify
API.configure({
    aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
    aws_appsync_region: awsconfig.aws_appsync_region,
});

const App = ({ signOut }) => {

    return (
        <AppRouter signOut={signOut} />
    );
};

export default withAuthenticator(App);