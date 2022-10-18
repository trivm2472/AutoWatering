import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import DangTuoi from './components/DangTuoi/index'
import Home from './components/Home/index'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="DangTuoi" component={DangTuoi}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}
