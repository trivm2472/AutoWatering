import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const styles = StyleSheet.create({
  navbar: {
    marginTop: 23,
    height: 50,
    width: 329,
    backgroundColor: "#ECECEC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  link: {
    height: "100%",
    flex: 1,
    backgroundColor: "#ECECEC",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default function TabMenu() {
  const [tab, setTab] = useState(0);
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        onPress={() => {
          setTab(0);
        }}
        style={[
          styles.link,
          { backgroundColor: `${tab == 0 ? "#00A455" : "#ECECEC"}` },
        ]}
      >
        <Text style={{ color: `${tab == 0 ? "white" : "black"}` }}>
          Thông tin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTab(1);
        }}
        style={[
          styles.link,
          { backgroundColor: `${tab == 1 ? "#00A455" : "#ECECEC"}` },
        ]}
      >
        <Text style={{ color: `${tab == 1 ? "white" : "black"}` }}>
          Biểu đồ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTab(2);
        }}
        style={[
          styles.link,
          { backgroundColor: `${tab == 2 ? "#00A455" : "#ECECEC"}` },
        ]}
      >
        <Text style={{ color: `${tab == 2 ? "white" : "black"}` }}>
          Điều khiển
        </Text>
      </TouchableOpacity>
      <View style={styles.infomation}></View>
    </View>
  );
}
