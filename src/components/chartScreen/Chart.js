import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { LineChart } from "react-native-gifted-charts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// import {
//   LineChart,
// } from "react-native-chart-kit";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

var labels = ["1", "2", "3", "4", "5", "6",'7','8','9','10'];
var datas = [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]

var dataTemperature = {
  data: datas,
  setData(data){
    this.data = data;
  },
  getData(){
    return this.data; 
  }
};

function Humidity(){
  const ptData = [
    {value: 50, date: '1 Apr 2022',
    label: '1 Apr',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
    {value: 56, date: '2 Apr 2022'},
    {value: 57, date: '3 Apr 2022'},
    {value: 58, date: '4 Apr 2022'},
    {value: 50, date: '5 Apr 2022'},
    {value: 16, date: '6 Apr 2022'},
    {value: 32, date: '7 Apr 2022'},
    {value: 34, date: '8 Apr 2022'},
  
    {value: 50, date: '9 Apr 2022'},
    {
      value: 50,
      date: '10 Apr 2022'
    },
    {value: 23, date: '11 Apr 2022'},
    {value: 29, date: '12 Apr 2022'},
    {value: 40, date: '13 Apr 2022'},
    {value: 42, date: '14 Apr 2022'},
    {value: 44, date: '15 Apr 2022'},
    {value: 46, date: '16 Apr 2022'},
  
    {value: 49, date: '17 Apr 2022'},
    {value: 50, date: '18 Apr 2022'},
    {value: 56, date: '19 Apr 2022'},
    {
      value: 30,
      date: '20 Apr 2022'
    },
    {value: 30, date: '21 Apr 2022'},
    {value: 40, date: '22 Apr 2022'},
    {value: 50, date: '23 Apr 2022'},
    {value: 60, date: '24 Apr 2022'},
    {value: 80, date: '25 Apr 2022'},
    {value: 90, date: '26 Apr 2022'},
    {value: 50, date: '27 Apr 2022'},
    {value: 56, date: '28 Apr 2022'},
    {value: 55, date: '29 Apr 2022'},
    {value: 53, date: '30 Apr 2022'},
    {value: 52, date: '1 May 2022'},
    {value: 50, date: '2 May 2022',
    label: '5 May',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
    {value: 63, date: '3 May 2022'},
    {value: 52, date: '4 May 2022'},
    {value: 42, date: '5 May 2022',
    label: '5 May',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
  ];

  const ptata = [
    {value: 10, date: '1 Apr 2022',
    label: '1 Apr',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
    {value: 15, date: '2 Apr 2022'},
    {value: 13, date: '3 Apr 2022'},
    {value: 58, date: '4 Apr 2022'},
    {value: 13, date: '5 Apr 2022'},
    {value: 16, date: '6 Apr 2022'},
    {value: 12, date: '7 Apr 2022'},
    {value: 34, date: '8 Apr 2022'},
  
    {value: 13, date: '9 Apr 2022'},
    {
      value: 50,
      date: '10 Apr 2022'
    },
    {value: 42, date: '11 Apr 2022'},
    {value: 29, date: '12 Apr 2022'},
    {value: 40, date: '13 Apr 2022'},
    {value: 42, date: '14 Apr 2022'},
    {value: 44, date: '15 Apr 2022'},
    {value: 10, date: '16 Apr 2022'},
  
    {value: 49, date: '17 Apr 2022'},
    {value: 50, date: '18 Apr 2022'},
    {value: 56, date: '19 Apr 2022'},
    {
      value: 30,
      date: '20 Apr 2022'
    },
    {value: 30, date: '21 Apr 2022'},
    {value: 40, date: '22 Apr 2022'},
    {value: 50, date: '23 Apr 2022'},
    {value: 60, date: '24 Apr 2022'},
    {value: 80, date: '25 Apr 2022'},
    {value: 10, date: '26 Apr 2022'},
    {value: 50, date: '27 Apr 2022'},
    {value: 56, date: '28 Apr 2022'},
    {value: 55, date: '29 Apr 2022'},
    {value: 53, date: '30 Apr 2022'},
    {value: 52, date: '1 May 2022'},
    {value: 50, date: '2 May 2022',
    label: '5 May',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
    {value: 63, date: '3 May 2022'},
    {value: 52, date: '4 May 2022'},
    {value: 42, date: '5 May 2022',
    label: '5 May',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
  ];
  
  const [datass, setDatass] = React.useState(ptData);
  const [d, setD] = React.useState(['#379237','#16CFDB', '#16CFDB','#16CFDB']);
  const [st, setSt]= React.useState(1);
  return(
    <View>
    <View
      style={{
        paddingVertical: 0.05*HEIGHT,
        paddingLeft: 0,
        backgroundColor: '#E7FEFF',
        marginHorizontal: 0.03*WIDTH,
        marginTop: 0.05*HEIGHT,
        borderRadius: 20,
      }}>
          <LineChart
          areaChart
          data={datass}
          rotateLabel
          width={0.64*WIDTH}
          hideDataPoints
          spacing={((0.64*WIDTH+30)/(ptData.length))}
          color="#16CFDB"
          thickness={2}
          startFillColor="#89F8FF"
          endFillColor="#B5F3F8"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={10}
          maxValue={100}
          yAxisColor="#16CFDB"
          yAxisThickness={1}
          rulesType="none"
          rulesColor="none"
          yAxisTextStyle={{color: '#004475', fontWeight: 'bold'}}
          yAxisSide='right'
          xAxisColor="#16CFDB"
          pointerConfig={{
            pointerStripHeight: 0.24*HEIGHT,
            pointerStripColor: '#16CFDB',
            pointerStripWidth: 2,
            pointerColor: '#16CFDB',
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 1000,
            activatePointersOnLongPress: false,
            autoAdjustPointerLabelPosition: false,
            pointerStripUptoDataPoint: false,
            stripOverPointer: true,
            pointerLabelComponent: items => {
              return (
                <View
                  style={{
                    height: 0.1*HEIGHT,
                    width: 0.3*WIDTH,
                    justifyContent: 'center',
                    marginTop: -30,
                    marginLeft: -40,
                  }}>
                  <Text style={{color: '#16CFDB', fontSize: 14, marginBottom:6,textAlign:'center'}}>
                    {items[0].date}
                  </Text>
  
                  <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'none'}}>
                    <Text style={{fontWeight: 'bold',textAlign:'center', color: '#16CFDB'}}>
                      {items[0].value.toFixed(2) + '%'}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
      
      </View>
      <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
      <TouchableOpacity
        onPress={()=> {setD(['#379237','#16CFDB', '#16CFDB','#16CFDB']); if(st==1) {setSt([2]); setDatass(ptata)} else {setSt(1); setDatass(ptData)}}}
        style={{width: 70,
          height: 45,
          margin: 2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          backgroundColor: d[0],}}
          activeOpacity={1}
        >
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 13}}>1 ngày</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=> {setD(['#16CFDB','#379237', '#16CFDB','#16CFDB']); if(st==1) {setSt([2]); setDatass(ptata)} else {setSt(1); setDatass(ptData)}}}
        style={{width: 70,
          height: 45,
          margin: 2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          backgroundColor: d[1],}}
          activeOpacity={1}
        >
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 13}}>1 tuần</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=> {setD(['#16CFDB', '#16CFDB','#379237','#16CFDB']); if(st==1) {setSt([2]); setDatass(ptata)} else {setSt(1); setDatass(ptData)}}}
        style={{width: 70,
          height: 45,
          margin: 2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          backgroundColor: d[2],}}
          activeOpacity={1}
        >
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 13}}>1 tháng</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=> {setD(['#16CFDB', '#16CFDB','#16CFDB', '#379237']); if(st==1) {setSt([2]); setDatass(ptata)} else {setSt(1); setDatass(ptData)}}}
        style={{width: 70,
          height: 45,
          margin: 2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          backgroundColor: d[3],}}
          activeOpacity={1}
        >
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 13}}>1 năm</Text>
      </TouchableOpacity>
      </View>
      </View>
  );
}
function Temperature(){
  const ptData = [
    {value: 50, date: '1 Apr 2022',
    label: '1 Apr',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
    {value: 56, date: '2 Apr 2022'},
    {value: 57, date: '3 Apr 2022'},
    {value: 58, date: '4 Apr 2022'},
    {value: 50, date: '5 Apr 2022'},
    {value: 16, date: '6 Apr 2022'},
    {value: 32, date: '7 Apr 2022'},
    {value: 34, date: '8 Apr 2022'},
  
    {value: 50, date: '9 Apr 2022'},
    {
      value: 50,
      date: '10 Apr 2022'
    },
    {value: 23, date: '11 Apr 2022'},
    {value: 29, date: '12 Apr 2022'},
    {value: 40, date: '13 Apr 2022'},
    {value: 42, date: '14 Apr 2022'},
    {value: 44, date: '15 Apr 2022'},
    {value: 46, date: '16 Apr 2022'},
  
    {value: 49, date: '17 Apr 2022'},
    {value: 50, date: '18 Apr 2022'},
    {value: 56, date: '19 Apr 2022'},
    {
      value: 30,
      date: '20 Apr 2022'
    },
    {value: 30, date: '21 Apr 2022'},
    {value: 40, date: '22 Apr 2022'},
    {value: 50, date: '23 Apr 2022'},
    {value: 60, date: '24 Apr 2022'},
    {value: 80, date: '25 Apr 2022'},
    {value: 90, date: '26 Apr 2022'},
    {value: 50, date: '27 Apr 2022'},
    {value: 56, date: '28 Apr 2022'},
    {value: 55, date: '29 Apr 2022'},
    {value: 53, date: '30 Apr 2022'},
    {value: 52, date: '1 May 2022'},
    {value: 50, date: '2 May 2022',
    label: '5 May',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
    {value: 63, date: '3 May 2022'},
    {value: 52, date: '4 May 2022'},
    {value: 42, date: '5 May 2022',
    label: '5 May',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
  ];

  const ptata = [
    {value: 10, date: '1 Apr 2022',
    label: '1 Apr',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
    {value: 15, date: '2 Apr 2022'},
    {value: 13, date: '3 Apr 2022'},
    {value: 58, date: '4 Apr 2022'},
    {value: 13, date: '5 Apr 2022'},
    {value: 16, date: '6 Apr 2022'},
    {value: 12, date: '7 Apr 2022'},
    {value: 34, date: '8 Apr 2022'},
  
    {value: 13, date: '9 Apr 2022'},
    {
      value: 50,
      date: '10 Apr 2022'
    },
    {value: 42, date: '11 Apr 2022'},
    {value: 29, date: '12 Apr 2022'},
    {value: 40, date: '13 Apr 2022'},
    {value: 42, date: '14 Apr 2022'},
    {value: 44, date: '15 Apr 2022'},
    {value: 10, date: '16 Apr 2022'},
  
    {value: 49, date: '17 Apr 2022'},
    {value: 50, date: '18 Apr 2022'},
    {value: 56, date: '19 Apr 2022'},
    {
      value: 30,
      date: '20 Apr 2022'
    },
    {value: 30, date: '21 Apr 2022'},
    {value: 40, date: '22 Apr 2022'},
    {value: 50, date: '23 Apr 2022'},
    {value: 60, date: '24 Apr 2022'},
    {value: 80, date: '25 Apr 2022'},
    {value: 10, date: '26 Apr 2022'},
    {value: 50, date: '27 Apr 2022'},
    {value: 56, date: '28 Apr 2022'},
    {value: 55, date: '29 Apr 2022'},
    {value: 53, date: '30 Apr 2022'},
    {value: 52, date: '1 May 2022'},
    {value: 50, date: '2 May 2022',
    label: '5 May',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
    {value: 63, date: '3 May 2022'},
    {value: 52, date: '4 May 2022'},
    {value: 42, date: '5 May 2022',
    label: '5 May',
    labelTextStyle: {width: 60, color: '#004475', fontWeight: 'bold'}},
  ];
  
  const [datass, setDatass] = React.useState(ptData);
  const [d, setD] = React.useState(['#379237','#FF8616', '#FF8616','#FF8616']);
  const [st, setSt]= React.useState(1);
  return(
    <View style={{}}>
    <View
      style={{
        paddingVertical: 0.05*HEIGHT,
        paddingLeft: 0,
        backgroundColor: '#FFE5D1',
        marginHorizontal: 0.03*WIDTH,
        marginTop: 0.05*HEIGHT,
        borderRadius: 20,
      }}>
          <LineChart
          areaChart
          data={datass}
          rotateLabel
          width={0.64*WIDTH}
          hideDataPoints
          spacing={((0.64*WIDTH+30)/(ptData.length))}
          color="#FF8125"
          thickness={2}
          startFillColor="#FFEAD7"
          endFillColor="#FFB775"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={10}
          maxValue={100}
          yAxisColor="#FF8125"
          yAxisThickness={1}
          rulesType="none"
          rulesColor="none"
          yAxisTextStyle={{color: '#004475', fontWeight: 'bold'}}
          yAxisSide='right'
          xAxisColor="#FF8125"
          pointerConfig={{
            pointerStripHeight: 0.24*HEIGHT,
            pointerStripColor: '#FF8125',
            pointerStripWidth: 2,
            pointerColor: '#FF8125',
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 1000,
            activatePointersOnLongPress: false,
            autoAdjustPointerLabelPosition: false,
            pointerStripUptoDataPoint: false,
            stripOverPointer: true,
            pointerLabelComponent: items => {
              return (
                <View
                  style={{
                    height: 0.1*HEIGHT,
                    width: 0.3*WIDTH,
                    justifyContent: 'center',
                    marginTop: -30,
                    marginLeft: -40,
                  }}>
                  <Text style={{color: '#FF8125', fontSize: 14, marginBottom:6,textAlign:'center'}}>
                    {items[0].date}
                  </Text>
  
                  <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'none'}}>
                    <Text style={{fontWeight: 'bold',textAlign:'center', color: '#FF8125'}}>
                      {items[0].value.toFixed(2) + '°C'}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
      
      </View>
      <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
      <TouchableOpacity
        onPress={()=> {setD(['#379237','#FF8616', '#FF8616','#FF8616']); if(st==1) {setSt([2]); setDatass(ptata)} else {setSt(1); setDatass(ptData)}}}
        style={{width: 70,
          height: 45,
          margin: 3,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          backgroundColor: d[0],}}
          activeOpacity={1}
        >
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 13}}>1 ngày</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=> {setD(['#FF8616','#379237', '#FF8616','#FF8616']); if(st==1) {setSt([2]); setDatass(ptata)} else {setSt(1); setDatass(ptData)}}}
        style={{width: 70,
          height: 45,
          margin: 3,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          backgroundColor: d[1],}}
          activeOpacity={1}
        >
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 13}}>1 tuần</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=> {setD(['#FF8616', '#FF8616','#379237','#FF8616']); if(st==1) {setSt([2]); setDatass(ptata)} else {setSt(1); setDatass(ptData)}}}
        style={{width: 70,
          height: 45,
          margin: 3,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          backgroundColor: d[2],}}
          activeOpacity={1}
        >
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 13}}>1 tháng</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=> {setD(['#FF8616', '#FF8616','#FF8616', '#379237']); if(st==1) {setSt([2]); setDatass(ptata)} else {setSt(1); setDatass(ptData)}}}
        style={{width: 70,
          height: 45,
          margin: 3,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          backgroundColor: d[3],}}
          activeOpacity={1}
        >
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 13}}>1 năm</Text>
      </TouchableOpacity>
      </View>
      </View>
  );
}

const Tab =  createMaterialTopTabNavigator();

export function Chart(){
    return (
    <Tab.Navigator screenOptions={{swipeEnabled: false, tabBarStyle: styles.tabStyle, tabBarIndicatorStyle: styles.tabIndicator, tabBarPressColor: 'transparent', tabBarLabelStyle: styles.tabLabel}}>
      <Tab.Screen name='Temperature' options={{title:'Nhiệt độ'}} component={Temperature}/>
      <Tab.Screen name='Humidity' options={{title:'Độ ẩm'}} component={Humidity}/>
    </Tab.Navigator>
    
)}

const styles = StyleSheet.create({
  tabStyle: {
    padding: 0.5,
    borderRadius: 20,
    marginTop: 0.04*HEIGHT,
    marginLeft: 0.1*WIDTH,
    marginRight: 0.1*WIDTH,
  },
  tabIndicator: {
    width: 0.24*WIDTH,
    marginLeft: 0.08*WIDTH
  },
  tabLabel: {
    fontSize: 12
  }
});
