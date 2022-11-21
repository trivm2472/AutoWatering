import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTabNavigation from "./src/navigations/MainTabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const homeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <MainTabNavigation/>
      </NavigationContainer>

  );
}