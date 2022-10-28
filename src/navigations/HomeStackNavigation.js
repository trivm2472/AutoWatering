import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "../views/HomePage";
import RecentlyScreen from "../views/RecentlyScreen";
import UnusualScreen from "../views/UnusualScreen";
import GardenScreen from "../views/GardenScreen"
import WateringScreen from "../views/WateringScreen"


export default function HomeStackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomePage" component={HomePage}/>
            <Stack.Screen name="garden" component={GardenScreen}/>
            <Stack.Screen name="watering" component={WateringScreen}/>
            <Stack.Screen name="recently" component={RecentlyScreen}/>
            <Stack.Screen name="unusual" component={UnusualScreen}/>
        </Stack.Navigator>
    );
}
