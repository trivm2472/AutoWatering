import React from 'react';
import { StyleSheet, Text, Button, View, SectionList, ActivityIndicator, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import {styles} from './IrrigationHistoryStyle';

function Mode(item){
  if(item.mode == 'auto') {
    return 'tự động';
  }
  else{
    return 'thủ công';
  }
}

export function Screen({changePage}) {

  const [day, setDay] = React.useState([]);
  const [lis, setLis] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-pump/data/chart')
      .then((response) => response.json())
      .then(async (json) => {var datag = [];
        var timeH = '';
        for ( var i in json.data){
          if(i >= 1){
            if(json.data[i][1] == '0.0' && json.data[i-1][1] == '1.0'){
              var time = new Date(json.data[i][0]);
              var dd = time.getDay().toString();
              var mm = time.getMonth().toString();
              var hh = time.getHours().toString();
              var MM = time.getMinutes().toString();
              if(dd.length < 2) dd = '0'+dd;
              if(mm.length < 2) mm = '0'+mm;
              if(hh.length < 2) hh = '0'+hh;
              if(MM.length < 2) MM = '0'+MM;
              if(dd + '/' + mm + '/' + time.getFullYear().toString() != timeH){
                datag.push({'day': dd + '/' + mm + '/' + time.getFullYear().toString(),'data': []});
                timeH = dd + '/' + mm + '/' + time.getFullYear().toString();
              }
              var humi;
              var temp;
              const resHu = await fetch('https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-humi/data/chart?start_time=' +new Date(time.getTime() - 1000*60*5).toISOString() +'&end_time='+time.toISOString());
              const hu = await resHu.json();
              if(hu.data.length>0)
                humi = await Number(hu.data[hu.data.length-1][1]).toFixed(2).toString() + '%';
              else 
                humi = await 'Không xác định';
              const resTe = await fetch('https://io.adafruit.com/api/v2/HungLe0101/feeds/irrigationsystem-temp/data/chart?start_time=' +new Date(time.getTime() - 1000*60*5).toISOString() +'&end_time='+time.toISOString());
              const te = await resTe.json();
              if(te.data.length>0)
                temp = await Number(te.data[te.data.length-1][1]).toFixed(2).toString()+'°C';
              else
                temp = await 'Không xác định';
              var environment = await {
                  humidity: humi,
                  temperature: temp
                }
              datag[datag.length-1].data.push({'mode': 'auto', 'time': hh+':'+MM+' - '+timeH, 
              'long': ((time.getTime()-new Date(json.data[i-1][0]).getTime())/(1000*60)).toFixed(2), environment});
              i+=1;
            }
          }
        }
        setLis(datag);
        setDay(datag);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => {setSearchQuery(query);
    if(query.length <10){
      setDay(lis);
      return;
    }
    for (var item of lis){
      if (item.day == query){
        setDay([item]);
        return;
      }
    }
    setDay([]);
  }

  return (
  <View style={styles.listInfo}>
  <View style={styles.back}>
        <View style={{flex:1, height: 50}}>
          <TouchableOpacity onPress={() => {changePage(0);}} style={styles.appButtonContainer}>
            <Feather name='chevron-left' size={35} style={styles.appButtonIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitles} > Lịch sử tưới</Text>
      </View>
  
  <View style={styles.searchbar}>
    <Searchbar style={styles.subsearchbar}
      placeholder="dd/mm/yyyy"
      placeholderTextColor={'#6D6C6C'}
      backgroundColor={'#F8F8F8'}
      icon={() =><Feather name='search' size={25} color='#6D6C6C' />}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  </View>
  {loading ?<View style={{alignItems: 'center'}}><Text style={{fontSize: 20}}>Loading...</Text></View>:
  <SectionList
    sections={day}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Entypo style={styles.icon} name='water' size={34} color='#699BF7' />
        <View style={styles.info}>
          <Text style={styles.itemTitle}>
            Tưới nước, chế độ {Mode(item)}
          </Text>
          <Text style={styles.itemTime}>
            {item.time}
          </Text>
          <Text style={styles.itemTime}>
            Thời gian tưới: {item.long} phút
          </Text>
          <Text style={styles.itemEnvironment}>
            Môi trường:
          </Text>
          <Text style={styles.itemEnvironmentItem}>
            Độ ẩm: {item.environment.humidity}
          </Text>
          <Text style={styles.itemEnvironmentItem}>
            Nhiệt độ: {item.environment.temperature}
          </Text>
        </View>
      </View>
    )}
    renderSectionHeader={ ({section}) => (
      <Text style={styles.day}>Ngày {section.day}</Text>
    )}
    stickySectionHeadersEnabled
  />
    }
</View>
  );
} 
function IrrigationHistoryScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <View style={{flex:1, height: 50}}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.appButtonContainer}>
            <Feather name='chevron-left' size={35} style={styles.appButtonIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.mainTitle}>
          Lịch Sử Tưới
        </Text>
      </View>
      <Screen />
    </View>
  );
}



