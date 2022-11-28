import { Text, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import InfomationScreen from "../information";
import ControlScreen from "../control";
import TabMenu from "../TabMenu";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import InformationScreen from "../../../views/InformationScreen";
import { Chart } from "../../chartScreen/Chart";

// const Tab =  createMaterialTopTabNavigator();
export default function Main() {
  const [tab, setTab] = useState(1);

  const changeTab = (num) => {
    setTab(num);
    return;
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <View
          style={{
            backgroundColor: "white",
            width: 40,
            height: 40,
            left: 30,
            top: 54,
            position: "absolute",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Image style={{}} source={require("../../../../assets/back_icon.png")} />
        </View>
        <Text style={styles.title}>Khu đất số 1</Text>
      </View> */}
      <View style={styles.content}>
        <TabMenu changeTab={changeTab}/>
        {/* <Tab.Navigator screenOptions={{swipeEnabled: false, tabBarStyle: styles.tabStyle, tabBarIndicatorStyle: styles.tabIndicator, tabBarPressColor: 'transparent', tabBarLabelStyle: styles.tabLabel}}>
          <Tab.Screen name='Temperature' options={{title:'Nhiệt độ'}} component={InformationScreen}/>
          <Tab.Screen name='Humidity' options={{title:'Độ ẩm'}} component={Chart}/>
        </Tab.Navigator> */}
        {/* <InfomationScreen /> */}
        {tab == 0 ? <InfomationScreen /> : tab == 1 ? <Chart/> : <ControlScreen/>}
        {/* <ControlScreen /> */}
      </View>
    </View>
  );
}