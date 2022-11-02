import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
export default function Control() {
  const [text, onChangeText] = useState("");
  const [stateButton, setStateButton] = useState(0);
  const [color, setColor] = useState(["#81B8D4", "#F6F6F6"]);
  const toggleButton = () => {
    if (stateButton) {
      setStateButton(0);
      setColor(["#F6F6F6", "#81B8D4"]);
    } else {
      setStateButton(1);
      setColor(["#81B8D4", "#F6F6F6"]);
    }
  };
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
          <Image style={{}} source={require("../../assets/back.png")} />
        </View>
        <Text style={styles.title}>Khu đất số 1</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.navbar}>
          <View style={[styles.link, 1 && styles.selectedLink]}>
            <Text>Thông tin</Text>
          </View>
          <View style={[styles.link, 0 && styles.selectedLink]}>
            <Text style={styles.link_text}>Biểu đồ</Text>
          </View>
          <View style={[styles.link, 0 && styles.selectedLink]}>
            <Text style={styles.link_text}>Điều khiển</Text>
          </View>
          <View style={styles.infomation}></View>
        </View>
        <View style={styles.setup}>
          <View style={styles.time}>
            <Text style={{ marginRight: 17 }}>Đặt thời gian tưới:</Text>
            <TextInput
              style={{
                width: 70,
                height: 35,
                backgroundColor: "#EFEFEF",
                marginRight: 5,
                textAlign: "center",
              }}
              onChangeText={onChangeText}
              value={text}
            />
            <Text>Phút</Text>
          </View>
          <View style={styles.control}>
            <Text>Đang tưới: Không</Text>
            <View style={styles.list_button}>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 50,
                  backgroundColor: color[0],
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                onPress={toggleButton}
              >
                <Text>Tắt</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 50,
                  backgroundColor: color[1],
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                onPress={toggleButton}
              >
                <Text>Bật</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
