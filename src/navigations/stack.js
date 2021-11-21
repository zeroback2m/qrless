import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Join from 'src/Join.js';
import Login from './src/Login';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "LOGIN" component = {Login}/>
            <Stack.Screen name = "JOIN" component = {Join}/>
        </Stack.Navigator>
    )
}
export default StackNavigation;