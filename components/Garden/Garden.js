import { StyleSheet, Text, View, Image } from "react-native";

export default function Garden(props) {
  return (
    <View style={[styles.container]}>
      <View style={[styles.imageStyle]}>
        <Image
          style={{}}
          source={require("../../assets/Garden/garden.png")}
        />
      </View>
      <View style={styles.gardenContent}>
        <Text style={{ fontSize: 13, fontWeight: "700" }}>
          Vườn {"A1"}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "400",
            marginTop: 6,
            marginBottom: 6,
          }}
        >
          Số khu đất: {'4'}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ flex: 1, fontSize: 10, fontWeight: "500" }}>
            Tình trạng:
          </Text>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 9, fontWeight: "400", marginBottom: 4}}>Đang tưới: {8}</Text>
            <Text style={{ fontSize: 9, fontWeight: "400" }}>
              Thiết bị mất kết nối: {4}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.option}>
          <Image source={require('../../assets/Garden/screw.png')} style={{marginBottom: 7}}/>
          <Image source={require('../../assets/Garden/trash-can.png')} style={{marginTop: 7}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#018E18',
    marginLeft: '7.5%',
    marginRight: '7.5%',
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    
    paddingRight: "5%",
    marginBottom: 25,
  },
  imageStyle: {
    // width: 30,
    // height: 30,
    // display: 'flex',
    // backgroundColor: 'red',
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  gardenContent: {
    flex: 8,
  },
  option: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: "center",
  }
});
