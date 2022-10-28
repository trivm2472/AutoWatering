import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import styles from './styles'
import {useState} from 'react'
const KhuDat=(props) =>{
  // const [count, setCount] = useState(0)
  // firebase.firestore()
  // .collection('Users')
  // .get()
  // .then((querySnapshot) => {
  //   setCount(querySnapshot.size)
  // });
  return (
        <TouchableOpacity
        >
          <View style={styles.item}>
            <View style={styles.square}>
              <Image 
                source={require('../../../assets/iswatering_icon.png')} 
                style={{ width: 50, height: 50 }}
              />
            </View>
            
            <View style={styles.content}>
              <Text>Khu đất: {props.id}</Text>
              <Text >Nhà vườn A2</Text>
              <View style={styles.tinhtrang}>
                <Text>Tình trạng </Text>
                <Text style={styles.tinhtrangDetails}>Đang tưới</Text>
              </View>
              <View style={styles.moitruong}>
                <Text >Môi trường</Text>
                <View style={styles.moitruongDetails}> 
                  <View style={{flexDirection:'row'}}>
                    <Text>Nhiệt độ: </Text>
                    <Text>{props.nhietdo}</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text>Độ ẩm: </Text>
                    <Text>{props.doam}</Text>
                  </View>    
                </View>  
              </View>      
            </View>  
          </View>
        </TouchableOpacity>
  );
}
export default KhuDat;