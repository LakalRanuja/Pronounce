import React from 'react'
import { Component } from 'react';
import { View, Text, Label } from 'react-native';
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    Provider,
    DefaultTheme
} from 'react-native-paper';

import FoundWords from "./FoundWords"
import SearchWords from "./SearchWords"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'white',
        accent: 'black',
    },
};

export default class Dashboard extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Provider theme={theme}>
                <Tab.Navigator initialRouteName="SearchWords">
                    <Tab.Screen name="Search" component={SearchWords} options={{
                        tabBarLabel: 'Search',
                        tabBarBadge: 3,
                        header: () => null
                    }}/>
                    <Tab.Screen name="Home" component={FoundWords} options={{
                        tabBarLabel: 'Found Words',
                        tabBarBadge: 3,
                        header: () => null
                    }}/>

                </Tab.Navigator>
            </Provider>
        )
    }
}
