import { Text, View, Image, TextInput, Button, Alert } from "react-native";
import React from "react";
import styles from "./styles";

export default function Control() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [stateButton, setStateButton] = React.useState(0);
  const [color, setColor] = React.useState(["#81B8D4", "#F6F6F6"]);
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
            <Text>Đặt thời gian tưới:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <Text>Phút</Text>
          </View>
          <View style={styles.control}>
            <Text>Đang tưới: {text}</Text>
            <View style={styles.list_button}>
              <Button
                title="Bật"
                width="20"
                style={styles.button}
                color={color[0]}
                onPress={() => {
                  if (stateButton) {
                    setStateButton(0);
                    setColor(["#F6F6F6", "#81B8D4"]);
                  } else {
                    setStateButton(1);
                    setColor(["#81B8D4", "#F6F6F6"]);
                  }
                }}
              />
              <Button
                title="Tắt"
                color={color[1]}
                style={styles.button}
                onPress={() => {
                  if (stateButton) {
                    setStateButton(0);
                    setColor(["#F6F6F6", "#81B8D4"]);
                  } else {
                    setStateButton(1);
                    setColor(["#81B8D4", "#F6F6F6"]);
                  }
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
