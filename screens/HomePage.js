import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import Notification from "../components/Notification";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import { useEffect } from "react";

function Menu({ type, goToScreen}) {
  if (type == "garden")
    var imageSource = require("../assets/HomePage/garden.png");
  else if (type == "recently")
    var imageSource = require("../assets/HomePage/recently.png");
  else if (type == "unusual")
    var imageSource = require("../assets/HomePage/unusual.png");
  else var imageSource = require("../assets/HomePage/watering.png");

  if (type == "garden") var text = "Vườn";
  else if (type == "recently") var text = "Tưới gần đây";
  else if (type == "unusual") var text = "Thiết bị bất thường";
  else var text = "Đang tưới";

  return (
    <TouchableOpacity style={styles.menu} onPress={()=>{
      goToScreen('DangTuoi');
    }}>
      <Image style={{ width: 60 }} source={imageSource} />
      <Text style={{ marginTop: 15, fontSize: 13, textAlign: "center" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default function HomePage({navigation}) {
  const goToScreen = (name) => {
    navigation.navigate(name);
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerFont}>Auto Farm</Text>
        <View style={styles.headerImage}>
          <Image
            style={styles.headerImage}
            source={require("../assets/hamburger-menu.png")}
          />
        </View>
      </View>
      <View style={styles.menuContainer}>
        <Menu type="garden" goToScreen={goToScreen}/>
        <Menu type="watering" goToScreen={goToScreen}/>
        <Menu type="recently" goToScreen={goToScreen}/>
        <Menu type="unusual" goToScreen={goToScreen}/>
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
        <Text style={{ fontSize: 18, flex: 3, paddingLeft: 15 }}>
          Thông báo mới
        </Text>
        <Text style={{ fontSize: 14, flex: 1, color: "#00A445" }}>
          Xem thêm
        </Text>
      </View>
      <ScrollView style={{ marginTop: 30 }}>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "10%",
  },
  headerFont: {
    flex: 18,
    fontSize: 32,
  },
  headerImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    flex: 2,
    display: "flex",
    alignItems: "center",
  },
  menuContainer: {
    marginTop: 45,
    display: "flex",
    flexDirection: "row",
  },
});
