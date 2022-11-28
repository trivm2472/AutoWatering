import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Text } from "react-native";

import HomeStackNavigation from "../navigations/HomeStackNavigation";

import NotificationScreen from "../views/NotificationScreen";
import ActiveStackNavigation from "../navigations/ActiveStackNavigation";
import InfomationScreen from "../views/InformationScreen";
import Main from "../components/DieuKhienKhuDat/layout";
import { Chart } from "../components/chartScreen/Chart";
import ChartScreen from "../components/chartScreen/ChartScreen";

const Tab = createBottomTabNavigator();

export default function MainTabNavigation() {
  return (
        <Tab.Navigator
          screenOptions={({ route }) => (
            {
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return !focused ? <Image source={require("../../assets/Footer/home.png")}/> : <Image source={require("../../assets/Footer/home-green.png")}/>;
              } else if (route.name === "Notification") {
                return !focused ? <Image source={require("../../assets/Footer/notification.png")}/> : <Image source={require("../../assets/Footer/notification-green.png")}/>;
              } else if (route.name === "Active") {
                return !focused ? <Image source={require("../../assets/Footer/activate.png")}/> : <Image source={require("../../assets/Footer/activate-green.png")}/>;
              } else if (route.name === "Information") {
                return !focused ? <Image source={require("../../assets/Footer/information.png")}/> : <Image source={require("../../assets/Footer/information-green.png")}/>;
              } 
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            // tabBarLabelStyle: {display: 'none'}
          })}
        >
          <Tab.Screen name="Home" component={HomeStackNavigation} />
          <Tab.Screen name="Notification" component={NotificationScreen} />
          <Tab.Screen name="Active" component={Chart} />
          <Tab.Screen name="Information" component={Main} />
        </Tab.Navigator>

  );
}
