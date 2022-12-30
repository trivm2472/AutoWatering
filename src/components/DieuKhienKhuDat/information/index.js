import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";

export const plantData = [
  {
    type: "Cây táo",
    stage1: 30,
    stage2: 40,
    stage3: 20,
    minTemp1: 20,
    minTemp2: 15,
    minTemp3: 15,
    maxTemp1: 30,
    maxTemp2: 25,
    maxTemp3: 28,
    minHumid1: 20,
    minHumid2: 15,
    minHumid3: 15,
    maxHumid1: 30,
    maxHumid2: 25,
    maxHumid3: 28,
  },
  {
    type: "Cây chuối",
    stage1: 15,
    stage2: 20,
    stage3: 25,
    minTemp1: 15,
    minTemp2: 20,
    minTemp3: 20,
    maxTemp1: 30,
    maxTemp2: 35,
    maxTemp3: 28,
    minHumid1: 30,
    minHumid2: 25,
    minHumid3: 25,
    maxHumid1: 40,
    maxHumid2: 35,
    maxHumid3: 38,
  },
  {
    type: "Cây dâu",
    stage1: 10,
    stage2: 15,
    stage3: 20,
    minTemp1: 22,
    minTemp2: 17,
    minTemp3: 18,
    maxTemp1: 32,
    maxTemp2: 28,
    maxTemp3: 30,
    minHumid1: 40,
    minHumid2: 35,
    minHumid3: 40,
    maxHumid1: 60,
    maxHumid2: 65,
    maxHumid3: 70,
  },
];

function PlantConfig({ setModalVisible, plantData, setPlant }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState({});
  const plant = plantData.map((data) => {
    return { label: data.type, value: data.type };
  });
  const [items, setItems] = useState(plant);

  useEffect(() => {
    plantData.forEach((element) => {
      if (element.type == value) {
        setData({
          stage1: element.stage1,
          stage2: element.stage2,
          stage3: element.stage3,
          minTemp1: element.minTemp1,
          minTemp2: element.minTemp2,
          minTemp3: element.minTemp3,
          maxTemp1: element.maxTemp1,
          maxTemp2: element.maxTemp2,
          maxTemp3: element.maxTemp3,
          minHumid1: element.minHumid1,
          minHumid2: element.minHumid2,
          minHumid3: element.minHumid3,
          maxHumid1: element.maxHumid1,
          maxHumid2: element.maxHumid2,
          maxHumid3: element.maxHumid3,
        });
      }
    });
  }, [value]);
  return (
    <View style={{ marginTop: 150 }}>
      <View style={styles.modalView}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={"Hãy chọn loại cây bạn muốn trồng"}
        />
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Giai đoạn 1: {data.stage1} ngày
          </Text>
          <Text style={{ marginLeft: 20 }}>
            Nhiệt độ: {data.minTemp1} - {data.maxTemp1} °C
          </Text>
          <Text style={{ marginLeft: 20 }}>
            Độ ẩm: {data.minHumid1} - {data.maxHumid1} %
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Giai đoạn 2: {data.stage2} ngày
          </Text>
          <Text style={{ marginLeft: 20 }}>
            Nhiệt độ: {data.minTemp2} - {data.maxTemp2} °C
          </Text>
          <Text style={{ marginLeft: 20 }}>
            Độ ẩm: {data.minHumid2} - {data.maxHumid2} %
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Giai đoạn 3: {data.stage3} ngày
          </Text>
          <Text style={{ marginLeft: 20 }}>
            Nhiệt độ: {data.minTemp3} - {data.maxTemp3} °C
          </Text>
          <Text style={{ marginLeft: 20 }}>
            Độ ẩm: {data.minHumid3} - {data.maxHumid3} %
          </Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonClose, { marginTop: 20 }]}
          onPress={async () => {
            setModalVisible(false);
            setPlant(value);
            await setDoc(doc(db, "Data", "plant"), {
              name: value,
            });
          }}
        >
          <Text style={styles.textStyle}>Xác nhận</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function InfomationScreen({ changePage }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [plant, setPlant] = useState("");
  const [temp, setTemp] = useState(0);
  const [humid, setHumid] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const tempData = await getDoc(doc(db, "Data", "plant"));
      setPlant(tempData.data().name);
    };
    getData();
    const getTempHumidData = () => {
      try{
        fetch(
          "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-temp/data"
        )
          .then((response) => response.json())
          .then((json) => {
            setTemp(Math.round(json[0].value*100)/100)
          });
        fetch(
          "https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-humi/data"
        )
          .then((response) => response.json())
          .then((json) => {
            setHumid(Math.round(json[0].value*100)/100)
            
          });
      } catch {

      }
    };
    
    getTempHumidData();
    const tempDataInterval = setInterval(() => getTempHumidData(), 2 * 1000);
    return () => clearInterval(tempDataInterval);
    
  }, []);
  return (
    <View style={styles.contain}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <PlantConfig
          setModalVisible={setModalVisible}
          plantData={plantData}
          setPlant={setPlant}
        />
      </Modal>
      <Text style={styles.info}>Thông tin chi tiết</Text>
      <View style={styles.infomation}>
        <View style={styles.parent}>
          <View style={styles.child}>
            <Text style={styles.name}>Vườn</Text>
            <Text style={styles.data}>A</Text>
          </View>
          {/* <View style={styles.child}>
            <Button title="Open" onPress={() => setShowDatePicker(true)} />
              {showDatePicker ? <DateTimePicker
                mode="date"
                value={new Date()}
                onChange={(value) => {
                  setDate(new Date(value.nativeEvent.timestamp));
                  setShowDatePicker(!showDatePicker);
                }}
                style={{display: 'none'}}
              /> : null}
          </View> */}
          <View style={styles.child}>
            <Text style={styles.name}>Tên</Text>
            <Text style={styles.data}>S1</Text>
          </View>
          <View style={styles.child}>
            <Text style={styles.name}>Loại cây trồng</Text>
            <Text style={[styles.data, { paddingRight: 10 }]}>{plant}</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image
                source={require("../../../../assets/edit.png")}
                style={[styles.tinyLogo, { marginLeft: 0 }]}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.child}>
            <Text style={styles.name}>Ngày bắt đầu tưới: </Text>
            <Text style={[styles.data, { paddingRight: 10 }]}>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
            <TouchableOpacity
              onPress={() => {
                setShowDatePicker(true);
              }}
            >
              <Image
                source={require("../../../../assets/edit.png")}
                style={[styles.tinyLogo, { marginLeft: 0 }]}
              />
            </TouchableOpacity>
          </View> */}
          <View style={styles.child_four}>
            <View style={styles.content4}>
              <Text style={styles.name}>Thiết bị cảm biến</Text>
              <View style={styles.child4}>
                <Text style={styles.text}>Nhiệt độ</Text>
                <Text style={styles.state}>{plant}</Text>
              </View>
              <View style={styles.child4}>
                <Text style={styles.text}>Độ ẩm</Text>
                <Text style={styles.state}>{plant}</Text>
              </View>
            </View>
          </View>
          <View style={styles.child}>
            <Text style={styles.name}>Nhiệt độ</Text>
            <Text style={styles.data}>{temp}°C</Text>
          </View>
          <View style={styles.child}>
            <Text style={styles.name}>Độ ẩm</Text>
            <Text style={styles.data}>{humid}%</Text>
          </View>
          <View style={styles.child}>
            <Text style={styles.name}>Đang tưới</Text>
            <Text style={styles.data}>Không</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          changePage(1);
        }}
        style={[styles.link, { backgroundColor: "none" }]}
      >
        <View style={styles.history}>
          <Entypo style={styles.icon} name="water" size={27} color="#699BF7" />
          <Text style={{}}>Xem lịch sử tưới</Text>
          <Image
            style={[styles.tinyLogo, { marginRight: 30 }]}
            source={require("../../../../assets/button.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
