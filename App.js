import { StatusBar, StyleSheet, View } from "react-native"

import { useFonts, Rubik_400Regular } from "@expo-google-fonts/rubik"

import { Home } from "./src/screens/Home"
import { Loading } from "./src/components/Loading"

export default function App() {
  const [fontsLoaded] = useFonts({ Rubik_400Regular })

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1B1E",
    alignItems: "center",
    justifyContent: "center"
  }
})
