import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import InfomationScreen from "../information";
import ControlScreen from "../control";
import TabMenu from "../TabMenu";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
      </View>
      <View style={styles.content}>
        <TabMenu />
        <InfomationScreen />
        {/* <ControlScreen /> */}
      </View>
    </View>
  );
}