import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";

export default function InfomationScreen() {
  return (
    <View style={styles.contain}>
      <Text style={styles.info}>Thông tin chi tiết</Text>
      <View style={styles.infomation}>
        <View style={styles.parent}>
          <View style={styles.child}>
            <Text style={styles.name}>Vườn</Text>
            <Text style={styles.data}>A</Text>
          </View>
          <View style={styles.child}>
            <Text style={styles.name}>Tên</Text>
            <Text style={styles.data}>S1</Text>
          </View>
          <View style={styles.child}>
            <Text style={styles.name}>Loại cây trồng</Text>
            <Text style={styles.data}>Cải xanh</Text>
          </View>
          <View style={styles.child_four}>
            <View style={styles.content4}>
              <Text style={styles.name}>Thiết bị cảm biến</Text>
              <View style={styles.child4}>
                <Text style={styles.text}>Nhiệt độ</Text>
                <Text style={styles.state}>Cải xanh</Text>
              </View>
              <View style={styles.child4}>
                <Text style={styles.text}>Độ ẩm</Text>
                <Text style={styles.state}>Cải xanh</Text>
              </View>
            </View>
          </View>
          <View style={styles.child}>
            <Text style={styles.name}>Nhiệt độ</Text>
            <Text style={styles.data}>28°C</Text>
          </View>
          <View style={styles.child}>
            <Text style={styles.name}>Độ ẩm</Text>
            <Text style={styles.data}>50%</Text>
          </View>
          <View style={styles.child}>
            <Text style={styles.name}>Đang tưới</Text>
            <Text style={styles.data}>Không</Text>
          </View>
        </View>
      </View>
      <View style={styles.history}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../../assets/logo.png")}
        />
        <Text style={{}}>Xem lịch sử tưới</Text>
        <Image
          style={[styles.tinyLogo, { marginRight: 30 }]}
          source={require("../../../../assets/button.png")}
        />
      </View>
    </View>
  );
}