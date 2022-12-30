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

function Humidity(){
  const [isLoading, setLoading] = React.useState(false);
  const [datass, setDatass] = React.useState([]);
  const [d, setD] = React.useState(['#379237','#16CFDB', '#16CFDB','#16CFDB']);
  const [maxY, setMaxY] = React.useState(100);

  function loadData(time){
    setLoading(true);
    var endTime = new Date();
    var startTime = new Date(endTime);
    startTime.setDate(startTime.getDate() - time);
    fetch('https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-humi/data/chart?start_time=' + startTime.toISOString() + '&end_time='+ endTime.toISOString())
      .then((response) => response.json())
      .then((json) => {var datag = [];
        var max = -100;
        for ( var item of json.data){
          if (max < item[1]) max = item[1];
          datag.push({'value': item[1], 'date': item[0]});
          }
        setMaxY(max);
        setDatass(datag);})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  var end = new Date();
  var start = new Date(end);
  start.setDate(start.getDate() - 1);
  React.useEffect(() => {
    fetch('https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-humi/data/chart?start_time=' + start.toISOString() + '&end_time='+ end.toISOString())
      .then((response) => response.json())
      .then((json) => {var datag = [];
        var max = -100;
        for ( var item of json.data){
          if (max < item[1]) max = item[1];
          datag.push({'value': item[1], 'date': item[0]});
          }
        setMaxY(max);
        setDatass(datag);})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return(
    <View>
      
        <View
        style={{
          paddingVertical: 0.05*HEIGHT,
          paddingLeft: 0,
          backgroundColor: '#E7FEFF',
          marginHorizontal: 0,
          marginTop: 0.02*HEIGHT,
          borderRadius: 10,
        }}>
          {isLoading ? <View style={{height: 0.305*HEIGHT, alignItems:'center'}}><Text style={{fontWeight: 'medium', fontSize: 20, color: '#16CFDB'}}>Loading...</Text></View>:
            <LineChart
            areaChart
            data={datass}
            rotateLabel
            width={WIDTH*0.7}
            hideDataPoints
            color="#16CFDB"
            thickness={2}
            startFillColor="#89F8FF"
            endFillColor="#B5F3F8"
            spacing={0.68*WIDTH/(datass.length-1)}
            startOpacity={1}
            endOpacity={0}
            initialSpacing={0.03*WIDTH}
            noOfSections={4}
            stepValue={maxY*0.275}
            maxValue={maxY*1.1}
            adjustToWidth={true}
            yAxisColor="#16CFDB"
            yAxisThickness={1}
            rulesType="none"
            rulesColor="none"
            yAxisTextStyle={{color: '#004475', fontWeight: 'bold'}}
            yAxisSide='right'
            xAxisColor="#16CFDB"
            pointerConfig={{
              pointerStripHeight: 0.2*HEIGHT,
              pointerStripColor: '#16CFDB',
              pointerStripWidth: 2,
              pointerColor: '#16CFDB',
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 100,
              activatePointersOnLongPress: false,
              autoAdjustPointerLabelPosition: true,
              pointerStripUptoDataPoint: false,
              stripOverPointer: false,
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
                    <Text style={{color: '#004475', fontSize: 14, marginBottom:6,textAlign:'center'}}>
                      {new Date(items[0].date).toLocaleString()}
                    </Text>
    
                    <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'none'}}>
                      <Text style={{fontWeight: 'bold',textAlign:'center', color: '#004475'}}>
                        {Number(items[0].value).toFixed(2) + '%'}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
          }
        </View>
      <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
      <TouchableOpacity
        onPress={()=> {setD(['#379237','#16CFDB', '#16CFDB','#16CFDB']); loadData(1);}}
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
        onPress={()=> {setD(['#16CFDB','#379237', '#16CFDB','#16CFDB']); loadData(7);}}
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
        onPress={()=> {setD(['#16CFDB', '#16CFDB','#379237','#16CFDB']); loadData(30);}}
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
        onPress={()=> {setD(['#16CFDB', '#16CFDB','#16CFDB', '#379237']); loadData(365);}}
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
  const [isLoading, setLoading] = React.useState(false);
  const [datass, setDatass] = React.useState([]);
  const [d, setD] = React.useState(['#379237','#FF8616', '#FF8616','#FF8616']);
  const [maxY, setMaxY] = React.useState(100);

  function loadData(time){
    setLoading(true);
    var endTime = new Date();
    var startTime = new Date(endTime);
    startTime.setDate(startTime.getDate() - time);
    fetch('https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-temp/data/chart?start_time=' + startTime.toISOString() + '&end_time='+ endTime.toISOString())
      .then((response) => response.json())
      .then((json) => {var datag = [];
        var max = -100;
        for ( var item of json.data){
          if (max <  item[1]) max = item[1];
          if(item[1]>=0)
            datag.push({'value': item[1], 'date': item[0]});
          }
        setMaxY(max);
        setDatass(datag);})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  var end = new Date();
  var start = new Date(end);
  start.setDate(start.getDate() - 1);
  React.useEffect(() => {
    fetch('https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-temp/data/chart?start_time=' + start.toISOString() + '&end_time='+ end.toISOString())
      .then((response) => response.json())
      .then((json) => {var datag = [];
        var max = -100;
        for ( var item of json.data){
          if (max <  item[1]) max = item[1];
          if (item[1] >=0)
            datag.push({'value': item[1], 'date': item[0]});
          }
        setMaxY(max);
        setDatass(datag);})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return(
    <View>
      
        <View
        style={{
          paddingVertical: 0.05*HEIGHT,
          paddingLeft: 0,
          backgroundColor: '#FFE5D1',
          marginHorizontal: 0,
          marginTop: 0.02*HEIGHT,
          borderRadius: 10,
        }}>
          {isLoading ? <View style={{height: 0.305*HEIGHT, alignItems:'center'}}><Text style={{fontWeight: 'medium', fontSize: 20, color: '#16CFDB'}}>Loading...</Text></View>:
            <LineChart
            areaChart
            data={datass}
            rotateLabel
            width={WIDTH*0.7}
            hideDataPoints
            color='#FF8125'
            thickness={2}
            startFillColor="#FF8125"
            endFillColor="#FF8125"
            spacing={0.68*WIDTH/(datass.length-1)}
            startOpacity={0.9}
            endOpacity={0}
            initialSpacing={0.03*WIDTH}
            noOfSections={4}
            stepValue={maxY*0.275}
            maxValue={maxY*1.1}
            adjustToWidth={true}
            yAxisColor='#FF8125'
            yAxisThickness={1}
            rulesType="none"
            rulesColor="none"
            yAxisTextStyle={{color: '#004475', fontWeight: 'bold'}}
            yAxisSide='right'
            xAxisColor='#FF8125'
            pointerConfig={{
              pointerStripHeight: 0.2*HEIGHT,
              pointerStripColor: '#FF8125',
              pointerStripWidth: 2,
              pointerColor: '#FF8125',
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 100,
              activatePointersOnLongPress: false,
              autoAdjustPointerLabelPosition: true,
              pointerStripUptoDataPoint: false,
              stripOverPointer: false,
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
                    <Text style={{color: '#004475', fontSize: 14, marginBottom:6,textAlign:'center'}}>
                      {new Date(items[0].date).toLocaleString()}
                    </Text>
    
                    <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'none'}}>
                      <Text style={{fontWeight: 'bold',textAlign:'center', color: '#004475'}}>
                        {Number(items[0].value).toFixed(2) + '°C'}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
          }
        </View>
      <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
      <TouchableOpacity
        onPress={()=> {setD(['#379237','#FF8616', '#FF8616','#FF8616']); loadData(1);}}
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
        onPress={()=> {setD(['#FF8616','#379237', '#FF8616','#FF8616']); loadData(7);}}
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
        onPress={()=> {setD(['#FF8616', '#FF8616', '#379237' ,'#FF8616']); loadData(30);}}
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
        onPress={()=> {setD(['#FF8616', '#FF8616','#FF8616', '#379237']); loadData(365);}}
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
    width: 0.17*WIDTH,
    marginLeft: 0.08*WIDTH,
    backgroundColor: '#00A455'
  },
  tabLabel: {
    fontSize: 12
  }
});
