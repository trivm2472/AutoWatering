import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTabNavigation from "./src/navigations/MainTabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const homeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
  <homeStack.Navigator initialRouteName="HomePage" screenOptions={{headerShown: false}}>
    <homeStack.Screen name="HomePage" component={HomePage} />
    <homeStack.Screen name="DangTuoi" component={DangTuoi} />  
  </homeStack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MainTabNavigation/>
      </NavigationContainer>

  );
}