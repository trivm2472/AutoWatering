import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import Notification from "../components/Notification";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";
import { useEffect } from "react";

function Menu({ type, navigation }) {
  let imageSource = null, text = null;
  if (type == "garden") {
    imageSource = require("../../assets/HomePage/garden.png");
    text = "Vườn";
  }
  else if (type == "recently") {
    imageSource = require("../../assets/HomePage/recently.png");
    text = "Tưới gần đây";
  }
  else if (type == "unusual") {
    imageSource = require("../../assets/HomePage/unusual.png");
    text = "Thiết bị bất thường";
  }
  else {
    imageSource = require("../../assets/HomePage/watering.png");
    text = "Đang tưới";
  }

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => {navigation.navigate(type)}}>
        <Image style={{ width: 60 }} source={imageSource} />
        <Text style={{ marginTop: 15, fontSize: 13, textAlign: "center" }}>
          {text}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

export default function HomePage( {navigation}) {
  // useEffect(() => {
  //   const getData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "NhaVuon"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  //     });
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerFont}>Auto Farm</Text>
        <View style={styles.headerImage}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/hamburger-menu.png")}
          />
        </View>
      </View>
      <View style={styles.menuContainer}>

        <Menu type="garden" navigation={navigation}/>
        <Menu type="watering" navigation={navigation}/>
        <Menu type="recently" navigation={navigation}/>
        <Menu type="unusual" navigation={navigation}/>
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
