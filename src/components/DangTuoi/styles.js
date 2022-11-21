import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1bc47d',
  },
  header: {
    flex: 1,
    backgroundColor: '#1bc47d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerName:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    width: '70%',
    fontSize: 25
  },
  backIconWrapper:{
    backgroundColor: '#fff',
    height:40,
    width:40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:12
  },
  backIcon:{
    fontSize:30
  },
  backGroundKhuDat:{
    backgroundColor: '#1bc47d'
  },
  khudats: {
    flex:4,
    backgroundColor: '#fff',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingTop: 60
  },
  addTask:{
    bottom: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    height:44,
    width: '80%',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1bc47d',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  iconWrapper : {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon : {
    fontSize: 24,
    color: '#fff'
  },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    marginLeft:20,
    height: 100,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1bc47d',
  },
  square: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content:{
    width: '80%',
    fontSize: 16
  },
  tinhtrang:{
    flexDirection:'row',
  },
  moitruong:{
    flexDirection: 'row'
  },
  moitruongDetails:{
    paddingLeft:20
  },
  tinhtrangDetails:{
    paddingLeft: 23
  }
})
export default styles;