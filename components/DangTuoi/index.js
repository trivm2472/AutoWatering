import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import styles from './styles'
import KhuDat from '../KhuDat/index'
import KhuDats from '../KhuDats/index'

const DangTuoi=({navigation}) =>{
  return (
    <View style={styles.container}>
      <View  style={styles.header}>
        <TouchableOpacity
          onPress={()=>{
            navigation.goBack("Home")
          }}
        >
          <View style={styles.backIconWrapper}>
            <Image 
                  source={require('../../assets/back_icon.png')} 
                  style={{ width: 20, height: 20}}
                />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerName}>Đang Tưới</Text>
      </View>

      <View style={styles.backGroundKhuDat}></View>
      <KhuDats/>
    </View>
  );
}
export default DangTuoi;
