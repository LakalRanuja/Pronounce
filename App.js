import React,{Component} from "react";

import SignIn from "./screens/SignIn"
import SearchWords from "./screens/SearchWords";
import FoundWords from "./screens/FoundWords"
import Dashboard from "./screens/Dashboard"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default class App extends Component{
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} options={{header:() => null}}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{header:() => null}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}