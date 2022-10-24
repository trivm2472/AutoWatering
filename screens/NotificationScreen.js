import { StyleSheet, Text, View, Image } from 'react-native';

export default function NotificationScreen () {
  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={require('../assets/logo.png')}/>
      <Text style={styles.textStyle}>Notification Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A455',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: 80,
  },
  textStyle: {
    fontSize: 36,
    color: 'white',
    marginTop: 20,
  },
});