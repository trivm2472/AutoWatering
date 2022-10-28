import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ActiveScreen from '../views/ActiveScreen'
import NewGarden from '../views/NewGarden'

export default function ActiveStackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="active" component={ActiveScreen}/>
            <Stack.Screen name="newGarden" component={NewGarden}/>

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})