import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import KhuDat from '../KhuDat/index';
import { firebase } from '../../config';
import {useState, useEffect} from 'react'

const KhuDats=() =>{
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);
  const todoRef = firebase.firestore().collection('NhaVuon');

  useEffect(() => {
    todoRef.onSnapshot((querySnapshot) => {
      const todos = [];
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
      //console.log(users)
    });
  }, []);
        
        
  // const handChange=()=>{

  // }
  return (
      <View  style={styles.khudats}>
        
        <View style={styles.search}>
          <TextInput
            placeholder="Tim kiem" 
            style={styles.input}
          >
          </TextInput>
          <TouchableOpacity>
            <View style={styles.iconWrapper}>
              <Image 
                source={require('../../assets/filter_icon.png')} 
                style={{ width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>    
        </View>
        <ScrollView>
          {todos.map((item) => {
            return (
              item.dangtuoi?<KhuDat id={item.id} nhietdo={item.nhietdo} doam={item.doam} dangtuoi={item.dangtuoi}/>:<View/>
            )
          })}
        </ScrollView>
        
      </View>
  );
}
export default KhuDats;
