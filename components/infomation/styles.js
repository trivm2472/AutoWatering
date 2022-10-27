import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00A455",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  header: {
    height: 124,
    width: "100%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    marginTop: 56,
    marginLeft: 45,
    color: "white",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 0.5,
    textTransform: "capitalize",
  },

  content: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  navbar: {
    marginTop: 33,
    height: 50,
    width: 329,
    backgroundColor: "#ECECEC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  link: {
    height: "100%",
    flex: 1,
    backgroundColor: "#ECECEC",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  selectedLink: {
    backgroundColor: "#00A455",
    color: "white",
  },
  info: {
    height: 30,
    marginTop: 11,
    fontStyle: "medium",
    fontsize: 20,
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
});

export default styles;
