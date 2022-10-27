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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: "red",
  },
});

export default styles;
