import { Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import Slider from "@react-native-community/slider";

const defaultMinHumid = 20;
const defaultMaxHumid = 92;
const defaultMinTemp = 20;
const defaultMaxTemp = 49;

export default function ControlScreen() {
  const [text, onChangeText] = useState("");
  const [minHumid, setMinHumid] = useState(10);
  const [maxHumid, setMaxHumid] = useState(100);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(100);
  const [stateButton, setStateButton] = useState(0);
  const [data, setData] = useState({});

  const updateDefautData = async () => {
    setMinHumid(defaultMinHumid);
    setMaxHumid(defaultMaxHumid);
    setMinTemp(defaultMinTemp);
    setMaxTemp(defaultMaxTemp);
    await setDoc(doc(db, "Data", "userData"), {
      maxHumid: defaultMaxHumid,
      minHumid: defaultMinHumid,
      maxTemp: defaultMaxTemp,
      minTemp: defaultMinTemp,
    });
  };
  const updateData = async (string, value) => {
    if (string == "minHumid") {
      await setDoc(doc(db, "Data", "userData"), {
        maxHumid: maxHumid,
        minHumid: value,
        maxTemp: maxTemp,
        minTemp: minTemp,
      });
    }
    if (string == "maxHumid") {
      await setDoc(doc(db, "Data", "userData"), {
        maxHumid: value,
        minHumid: minHumid,
        maxTemp: maxTemp,
        minTemp: minTemp,
      });
    }
    if (string == "minTemp") {
      await setDoc(doc(db, "Data", "userData"), {
        maxHumid: maxHumid,
        minHumid: minHumid,
        maxTemp: maxTemp,
        minTemp: value,
      });
    }
    if (string == "maxTemp") {
      await setDoc(doc(db, "Data", "userData"), {
        maxHumid: maxHumid,
        minHumid: minHumid,
        maxTemp: value,
        minTemp: minTemp,
      });
    }
  };
  useEffect(() => {
    const getData = async () => {
      const tempData = await getDoc(doc(db, "Data", "userData"));
      setData(tempData.data());
    };
    getData();
  }, []);

  useEffect(() => {
    setMinHumid(data.minHumid);
    setMinTemp(data.minTemp);
    setMaxHumid(data.maxHumid);
    setMaxTemp(data.maxTemp);
  }, [data]);

  const checkNotDefault = () => {
    return !(
      defaultMinHumid != minHumid ||
      defaultMaxHumid != maxHumid ||
      defaultMinTemp != minTemp ||
      defaultMaxTemp != maxTemp
    );
  };

  return (
    <View style={styles.setup}>
      <TouchableOpacity
        style={[
          checkNotDefault() ? { display: "none" } : {},
          {
            backgroundColor: "#81B8D4",
            width: 150,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginLeft: 160,
            borderRadius: 30,
          },
        ]}
        onPress={() => {
          updateDefautData();
        }}
      >
        <Text>Reset to default</Text>
      </TouchableOpacity>
      <Text
        style={{
          padding: 13,
          fontSize: 15,
          fontWeight: "700",
          paddingLeft: 26,
        }}
      >
        ????? ???m (%):{" "}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ paddingLeft: 13, flex: 4 }}>????? ???m t???i ??a: </Text>
        <Text>{maxHumid}</Text>
        <Slider
          style={{ width: 200, height: 40, flex: 6 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#E889F3"
          maximumTrackTintColor="#000000"
          value={maxHumid}
          onSlidingComplete={(value) => {
            setMaxHumid(value | 0);
            updateData("maxHumid", value | 0);
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ paddingLeft: 13, flex: 4 }}>????? ???m t???i thi???u: </Text>
        <Text>{minHumid}</Text>
        <Slider
          style={{ width: 200, height: 40, flex: 6 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#E889F3"
          maximumTrackTintColor="#000000"
          value={minHumid}
          onSlidingComplete={(value) => {
            setMinHumid(value | 0);
            updateData("minHumid", value | 0);
            fetch(
              "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-humi/data"
            )
              .then((response) => response.json())
              .then((json) => {
                if (json[0].value < value) {
                  setStateButton(1);
                  fetch(
                    "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-pump/data",
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "X-AIO-Key": "aio_FULZ74KxSOt8nMyOf1O9ndTu71gS",
                      },
                      body: JSON.stringify({
                        value: 1,
                      }),
                    }
                  );
                } else {
                  setStateButton(0);
                  fetch(
                    "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-pump/data",
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "X-AIO-Key": "aio_FULZ74KxSOt8nMyOf1O9ndTu71gS",
                      },
                      body: JSON.stringify({
                        value: 0,
                      }),
                    }
                  );
                }
              });
          }}
        />
      </View>
      <Text
        style={{
          padding: 13,
          fontSize: 15,
          fontWeight: "700",
          paddingLeft: 26,
        }}
      >
        Nhi???t ????? (??C):
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ paddingLeft: 13, flex: 4 }}>Nhi???t ????? t???i ??a: </Text>
        <Text>{maxTemp}</Text>
        <Slider
          style={{ width: 200, height: 40, flex: 6 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#E889F3"
          maximumTrackTintColor="#000000"
          value={maxTemp}
          onSlidingComplete={(value) => {
            setMaxTemp(value | 0);
            updateData("maxTemp", value | 0);
            fetch(
              "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-temp/data"
            )
              .then((response) => response.json())
              .then((json) => {
                if (json[0].value > value) {
                  setStateButton(1);
                  fetch(
                    "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-pump/data",
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "X-AIO-Key": "aio_FULZ74KxSOt8nMyOf1O9ndTu71gS",
                      },
                      body: JSON.stringify({
                        value: 1,
                      }),
                    }
                  );
                } else {
                  setStateButton(0);
                  fetch(
                    "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-pump/data",
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "X-AIO-Key": "aio_FULZ74KxSOt8nMyOf1O9ndTu71gS",
                      },
                      body: JSON.stringify({
                        value: 0,
                      }),
                    }
                  );
                }
              });
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ paddingLeft: 13, flex: 4 }}>Nhi???t ????? t???i thi???u: </Text>
        <Text>{minTemp}</Text>
        <Slider
          style={{ width: 200, height: 40, flex: 6 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#E889F3"
          maximumTrackTintColor="#000000"
          value={minTemp}
          onSlidingComplete={(value) => {
            setMinTemp(value | 0);
            updateData("minTemp", value | 0);
          }}
        />
      </View>
      <View style={styles.control}>
        <Text>??ang t?????i: {stateButton ? "C??" : "Kh??ng"}</Text>
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
              fetch(
                "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-pump/data",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-AIO-Key": "aio_FULZ74KxSOt8nMyOf1O9ndTu71gS",
                  },
                  body: JSON.stringify({
                    value: 0,
                  }),
                }
              );
            }}
          >
            <Text>T???t</Text>
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
              fetch(
                "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-pump/data",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-AIO-Key": "aio_FULZ74KxSOt8nMyOf1O9ndTu71gS",
                  },
                  body: JSON.stringify({
                    value: 1,
                  }),
                }
              );
            }}
          >
            <Text>B???t</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
