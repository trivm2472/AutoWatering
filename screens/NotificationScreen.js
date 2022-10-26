import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import Notification from "../components/Notification";
import { useState } from "react";

export default function NotificationScreen() {
  const [tab, setTab] = useState(0);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 32,
          marginTop: 20,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Thông báo
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "5%",
        }}
      >
        <TextInput placeholder="Nhấp vào đây để tìm kiếm" style={styles.input}></TextInput>
        <View style={{ flex: 2, alignItems: "center" }}>
          <Image
            source={require("../assets/filter_icon2.png")}
            style={{ width: 20 }}
          />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => {
              setTab(0);
            }}
            style={[styles.button, { borderColor: `${tab == 0 ? 'green' : 'black'}`, borderWidth: tab == 0 ? 3 : 1}]}
            underlayColor="gray"
          >
            <Text style={{ fontSize: 13 }}>Tất cả</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => {
              setTab(1);
            }}
            style={[styles.button, { borderColor: `${tab == 1 ? 'green' : 'black'}`, borderWidth: tab == 1 ? 3 : 1}]}
            underlayColor="gray"
          >
            <Text style={{ fontSize: 13 }}>Tưới nước</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => {
              setTab(2);
            }}
            style={[styles.button, { borderColor: `${tab == 2 ? 'green' : 'black'}`, borderWidth: tab == 2 ? 3 : 1}]}
            underlayColor="gray"
          >
            <Text style={{ fontSize: 13 }}>Tưới xong</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => {
              setTab(3);
            }}
            style={[styles.button, { borderColor: `${tab == 3 ? 'green' : 'black'}`, borderWidth: tab == 3 ? 3 : 1}]}
            underlayColor="gray"
          >
            <Text style={{ fontSize: 13 }}>Thiết bị</Text>
          </TouchableHighlight>
        </View>
      </View>

      <ScrollView style={{ marginTop: 20 }}>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  input: {
    height: 44,
    backgroundColor: "#f8f8f8",
    borderWidth: 2,
    borderColor: "#1bc47d",
    borderRadius: 30,
    paddingLeft: 20,
    flex: 8,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderColor: "gray",
  },
});
