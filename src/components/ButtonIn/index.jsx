import { TouchableOpacity, Text } from "react-native"

import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"

export function ButtonIn({ number, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(number)} style={styles.button}>
      <LinearGradient
        colors={["#212022", "#272628"]}
        style={{
          width: 70,
          height: 70,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={styles.textTitle}>{number}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
