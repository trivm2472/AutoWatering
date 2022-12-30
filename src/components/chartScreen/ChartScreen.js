import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions, Button } from 'react-native';
import {  Feather } from '@expo/vector-icons';
import {Chart} from './Chart';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function onPress(){
  alert("quay lai");
}

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const TabTheme = {
  dark: false,
  colors: {
    primary: '#00A455',
    background: 'rgb(255, 255, 255)',
    card: '#FCFCFC',
    text: 'rgb(28, 28, 30)',
    border: 'none',
    notification: 'rgb(255, 69, 58)',
  },
  borderRadius: 20
};


const Tabb = () => {
  return (
      <Chart/>
  );
}
var title = 'Thông tin khu đất'

export default function ChartScreen({navigation}) {
  const [tit, serTit] = useState(title)
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <View style={{flex:1, height: 0.064*HEIGHT}}>
          <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.appButtonContainer}>
            <Feather name='chevron-left' size={0.045*HEIGHT} style={styles.appButtonIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.mainTitle}>
          {title}
        </Text>
      </View>
      <View style={styles.listInfo}>
        <Text style={{marginTop:15}}></Text>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='info' component={Tabb} screenOptions={{borderRadius:30}}/>
        </Stack.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00A455',
    },
    back: {
      flexDirection: 'row',
      //alignItems: 'baseline',
    },
    appButtonContainer: {
      flex: 1,
      backgroundColor: "#fff",
      borderRadius: 15,
      width: 50,
      top: 0.08*HEIGHT,
      left: 0.09*WIDTH,
      padding: 7
    },
    mainTitle: {
      top: 0.09*HEIGHT,
      flex: 2,
      fontSize: 28,
      fontWeight: 'bold',
      color: "#fff"
    },
    appButtonIcon: {
      // top: 8,
      // left: 6,
      },
    listInfo: {
      marginTop: 0.12*HEIGHT,
      backgroundColor: '#fff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      height: 0.9*HEIGHT,
    },
    tabBar: {
      marginTop: 0.01*HEIGHT,
      borderRadius: 20,
      marginLeft: 0.02*WIDTH,
      marginRight: 0.02*WIDTH
    },
    tabLabel: {
      fontWeight: 'medium',
      fontSize: 14
    },
    tabIndicator: {
      paddingTop: 50,
      borderRadius: 20,
    }
  });

