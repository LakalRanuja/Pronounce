import React, { Component } from "react"
import { View, Text, Label, StyleSheet } from 'react-native';

import {
    Appbar,
    Avatar,
    Button,
    TextInput,
    Card,
    DefaultTheme,
    IconButton,
    Paragraph,
    Provider as PaperProvider,
    Title
} from 'react-native-paper';

export default class SearchWords extends Component {

    render() {
        return (
            <PaperProvider style={
                { backgroundColor: 'lightblue' }
              }>

                <Text style={{ fontFamily: 'fantasy', position:'relative', left: '40%', fontSize: 30, marginTop: 50, marginBottom: 40, color: "black" }} >Search Words</Text>
                <TextInput
                    label="Search . . ."
                    style={{ width: 320, alignSelf: 'center' }}
                />

                <Button mode="outlined" onPress={ () => console.log('Hellow')} color="#3498db"
                    style={{ width: 320, alignSelf: 'center', marginTop: 10 }}>
                    Search
                </Button>

            </PaperProvider>

        )
    }
}