import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contain: {
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    height: 30,
    marginTop: 11,
    marginBottom: 5,
    fontSize: 18,
    fontStyle: "medium",
    letterSpacing: 0.5,
    fontWeight: "500",
  },
  infomation: {
    height: 418,
    width: 324,
    borderColor: "#AFAFAF",
    borderWidth: 0.5,
    borderStyle: "solid",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  history: {
    height: 45,
    width: 324,
    marginTop: 20,
    borderColor: "#AFAFAF",
    borderWidth: 0.5,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  parent: {
    width: 301,
    height: 399,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  child: {
    flex: 1,
    width: "100%",
    borderBottomWidth: 0.5,
    borderColor: "#AFAFAF",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  child_four: {
    flex: 2,
    width: "100%",
    borderBottomWidth: 0.5,
    borderColor: "#AFAFAF",
    borderStyle: "solid",
    justifyContent: "center",
  },
  name: {
    paddingLeft: 10,
    color: "#646464",
    fontStyle: "regular",
    fontsize: 15,
    letterSpacing: 0.5,
    fontWeight: "400",
  },
  data: {
    padding: 10,
    paddingRight: 40,
  },
  child4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 55,
  },
  text: {
    color: "#646464",
  },
  state: {
    paddingRight: 40,
  },

  tinyLogo: {
    width: 25,
    height: 25,
    marginLeft: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  icon: {
    paddingLeft: 30
  }
});

export default styles;