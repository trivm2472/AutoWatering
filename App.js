import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTabNavigation from "./src/navigations/MainTabNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <MainTabNavigation/>
      </NavigationContainer>

  );
}
