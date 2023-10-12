import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
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

const App = ({ signOut }) => {

    return (
        <AppRouter signOut={signOut} />
    );
};

export default withAuthenticator(App);