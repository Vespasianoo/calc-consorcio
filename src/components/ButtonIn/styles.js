import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: "#1c1c1c",
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  textTitle: {
    fontSize: 24,
    color: "#ebebeb",
    fontFamily: "Rubik_400Regular"
  }
})
