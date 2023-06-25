import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1C1B1E"
  },
  teclado: {
    flexDirection: "row",
    gap: 12
  },
  left: {
    maxWidth: 240,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 12
  },
  right: {
    flexDirection: "column",
    gap: 12
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#24f593",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4
  },
  container: {
    paddingLeft: 18,
    paddingRight: 22,
    marginBottom: 20,
    alignSelf: "flex-end",
    width: "100%"
  },
  textDisplay: {
    alignItems: "center",
    textAlign: "right",
    color: "#6B6B6B",
    fontWeight: "400",
    fontSize: 20,
    fontStyle: "normal",
    marginBottom: 8,
    fontFamily: "Rubik_400Regular"
  },
  textDisplayFocus: {
    alignItems: "center",
    textAlign: "right",
    color: "#fff",
    fontWeight: "400",
    fontSize: 20,
    fontStyle: "normal",
    marginBottom: 8,
    fontFamily: "Rubik_400Regular"
  },
  resultText: {
    fontSize: 36,
    color: "#EBEBEB"
  },
  result: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})
