import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
export default function ControlScreen() {
  const [text, onChangeText] = useState("");
  const [stateButton, setStateButton] = useState(0);
  return (
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
              backgroundColor: `${!stateButton ? "#81B8D4" : "#F6F6F6"}`,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
            onPress={() => {
              setStateButton(0);
            }}
          >
            <Text>Tắt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              backgroundColor: `${stateButton ? "#81B8D4" : "#F6F6F6"}`,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
            onPress={() => {
              setStateButton(1);
            }}
          >
            <Text>Bật</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
