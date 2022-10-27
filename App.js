import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image } from "react-native";
import HomePage from "./screens/HomePage";
import Onboarding from "./screens/Onboarding";
import NotificationScreen from "./screens/NotificationScreen";
import InformationScreen from "./screens/InformationScreen";
import ActiveScreen from "./screens/ActiveScreen";
import DangTuoi from "./components/DangTuoi";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => (
            {
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return !focused ? <Image source={require("./assets/Footer/home.png")}/> : <Image source={require("./assets/Footer/home-green.png")}/>;
              } else if (route.name === "Notification") {
                return !focused ? <Image source={require("./assets/Footer/notification.png")}/> : <Image source={require("./assets/Footer/notification-green.png")}/>;
              } else if (route.name === "Active") {
                return !focused ? <Image source={require("./assets/Footer/activate.png")}/> : <Image source={require("./assets/Footer/activate-green.png")}/>;
              } else if (route.name === "Information") {
                return !focused ? <Image source={require("./assets/Footer/information.png")}/> : <Image source={require("./assets/Footer/information-green.png")}/>;
              } 
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            // tabBarLabelStyle: {display: 'none'}
          })}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Notification" component={NotificationScreen} />
          <Tab.Screen name="Active" component={ActiveScreen} />
          <Tab.Screen name="Information" component={InformationScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}