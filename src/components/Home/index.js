import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import styles from './styles'

const Home=({navigation}) =>{
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("DangTuoi")
        }}
      >
        <View style={styles.DangTuoiButton}> 
          <Text>Dang Tuoi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Home;