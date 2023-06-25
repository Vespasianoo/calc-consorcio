import { useState } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"

import { styles } from "./styles"
import { ButtonIn } from "../../components/ButtonIn"

export function Home() {
  const [result, setResult] = useState("0")

  const [focusedView, setFocusedView] = useState("credito")
  const [inputValues, setInputValues] = useState({
    credito: "",
    entrada: "",
    mes: ""
  })

  const handleViewPress = view => {
    setFocusedView(view)
  }
  const handlePress = num => {
    if (focusedView) {
      setInputValues(prevInputValues => ({
        ...prevInputValues,
        [focusedView]:
          prevInputValues[focusedView] === "0"
            ? num
            : prevInputValues[focusedView] + num
      }))
    }
  }

  const calc = () => {
    let creditoValue = Number.parseFloat(inputValues.credito)
    let entradaValue = Number.parseFloat(inputValues.entrada)
    let mesValue = Number(inputValues.mes)

    if (creditoValue == "0" || entradaValue == "0" || mesValue == "0") {
      return
    }
    const taxaAdm = 25 / 100
    creditoValue += creditoValue * taxaAdm - entradaValue

    const resultFinal = creditoValue / mesValue
    setResult(resultFinal.toFixed(2))
  }

  const clear = () => {
    setResult("0")
    setInputValues({ credito: "", entrada: "", mes: "" })
  }
  const clearLast = num => {
    if (focusedView && inputValues.hasOwnProperty(focusedView)) {
      const currentValue = inputValues[focusedView]

      if (currentValue.length > 0) {
        const updatedValue = currentValue.slice(0, -1)

        setInputValues(prevInputValues => ({
          ...prevInputValues,
          [focusedView]: updatedValue
        }))
      }
    }
  }
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => handleViewPress("credito")}>
            <Text
              style={
                focusedView === "credito"
                  ? styles.textDisplayFocus
                  : styles.textDisplay
              }
            >
              VALOR DO CRÉDITO {inputValues.credito}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleViewPress("entrada")}>
            <Text
              style={
                focusedView === "entrada"
                  ? styles.textDisplayFocus
                  : styles.textDisplay
              }
            >
              VALOR DA ENTRADA {inputValues.entrada}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleViewPress("mes")}>
            <Text
              style={
                focusedView === "mes"
                  ? styles.textDisplayFocus
                  : styles.textDisplay
              }
            >
              QUANTOS MESES {inputValues.mes}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.result}>
          <Image
            source={require("../../../assets/equals.png")}
            style={{ width: 19, height: 20.5 }}
          />
          <Text style={styles.resultText}>{result}</Text>
        </View>
      </View>
      <View style={styles.teclado}>
        <View style={styles.left}>
          <ButtonIn onPress={handlePress} number={"7"} />
          <ButtonIn onPress={handlePress} number={"8"} />
          <ButtonIn onPress={handlePress} number={"9"} />
          <ButtonIn onPress={handlePress} number={"4"} />
          <ButtonIn onPress={handlePress} number={"5"} />
          <ButtonIn onPress={handlePress} number={"6"} />
          <ButtonIn onPress={handlePress} number={"1"} />
          <ButtonIn onPress={handlePress} number={"2"} />
          <ButtonIn onPress={handlePress} number={"3"} />
          <ButtonIn onPress={clear} number={"CE"} />
          <ButtonIn onPress={handlePress} number={"0"} />
          <ButtonIn onPress={handlePress} number={","} />
        </View>
        <View style={styles.right}>
          <ButtonIn number={"C"} onPress={clearLast} />
          <TouchableOpacity onPress={calc} style={styles.button}>
            <Text style={{ fontSize: 24, color: "#fff" }}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
