import { StyleSheet, Text, View, Image } from "react-native";

export default function Notification(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStyle}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/Notification/watering.png")}
        />
      </View>
      <View style={styles.notificationContent}>
        <Text style={{ fontSize: 13, fontWeight: "700" }}>
          Tuới nước vườn {"A1"}, khu đất số {1}
        </Text>
        <Text
          style={{
            fontSize: 8,
            fontWeight: "400",
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          21:47 - 11/09/2022
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ flex: 1, fontSize: 10, fontWeight: "500" }}>
            Môi trường
          </Text>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 9, fontWeight: "400" }}>Độ ẩm: {50}%</Text>
            <Text style={{ fontSize: 9, fontWeight: "400" }}>
              Nhiệt độ: {28} °C{" "}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginBottom: 25,
  },
  imageStyle: {
    width: 30,
    height: 30,
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationContent: {
    flex: 6,
  },
});
