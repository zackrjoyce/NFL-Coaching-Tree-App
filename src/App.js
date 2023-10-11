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
import { listNotes } from "./graphql/queries";
import {
    createNote as createNoteMutation,
    deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import AppRouter from './AppRouter';

const App = ({ signOut }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listNotes });
        const notesFromAPI = apiData.data.listNotes.items;
        setNotes(notesFromAPI);
    }

    async function createNote(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            name: form.get("name"),
            description: form.get("description"),
        };
        await API.graphql({
            query: createNoteMutation,
            variables: { input: data },
        });
        fetchNotes();
        event.target.reset();
    }

    async function deleteNote({ id }) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        await API.graphql({
            query: deleteNoteMutation,
            variables: { input: { id } },
        });
    }

    return (
        <AppRouter signOut={signOut} />
    );
};

export default withAuthenticator(App);