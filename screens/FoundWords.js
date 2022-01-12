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

export default class FoundWords extends Component {
    render() {
        return (
            <PaperProvider>
                <Text style={{ fontFamily: 'fantasy', position: 'relative', left: '40%', fontSize: 30, marginTop: 50, marginBottom: 90, color: "black" }} >Found Words</Text>
                <Card.Title
                    title="Humble"
                    titleStyle=''
                />
                <Card.Title
                    title="Employee"
                    style={{ border: "1px solid black" }}
                />
                <Card.Title
                    title="Carpenter"
                    style={{ border: "1px solid black" }}
                />
                <Card.Title
                    title="Demolish"
                    style={{ border: "1px solid black" }}
                />
                <Card.Title
                    title="Stethoscope "
                    style={{ border: "1px solid black" }}
                />
                <Card.Title
                    title="Chest"
                    style={{ border: "1px solid black" }}
                />
                <Button mode="outlined" onPress={() => console.log('Hellow')} color="#3498db"
                    style={{ width: 320, alignSelf: 'center', marginTop: 20 }}>
                    Search New word
                </Button>
            </PaperProvider>
        )
    }
}