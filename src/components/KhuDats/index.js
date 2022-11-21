import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import KhuDat from '../KhuDat/index';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import {useState, useEffect} from 'react'

const KhuDats=() =>{
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);
  // const todoRef = firebase.firestore().collection('NhaVuon');

  useEffect(() => {
    const getData = async () => {
      const todos = [];
      const querySnapshot = await getDocs(collection(db, "NhaVuon"));
      querySnapshot.forEach((doc) => {
        todos.push(
          {
            'id':doc.id,
            'nhietdo':doc.data().nhietdo,
            'doam':doc.data().doam,
            'dangtuoi':doc.data().dangtuoi
          }
        );
      });
      setTodos(todos);
    }
    getData();
  }, []);
        
  return (
      <View  style={styles.khudats}>
        
        <View style={styles.search}>
          <TextInput
            placeholder="Tìm kiếm"   
            style={styles.input}
          >
          </TextInput>
          <TouchableOpacity>
            <View style={styles.iconWrapper}>
              <Image 
                source={require('../../../assets/filter_icon.png')} 
                style={{ width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>    
        </View>
        <ScrollView>
          {todos.map((item, id) => {
            return (
              item.dangtuoi?<KhuDat key={id} id={item.id} nhietdo={item.nhietdo} doam={item.doam} dangtuoi={item.dangtuoi}/>:<View/>
            )
          })}
        </ScrollView>
        
      </View>
  );
}
export default KhuDats;