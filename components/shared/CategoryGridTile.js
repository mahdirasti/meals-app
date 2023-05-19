import { Platform, Pressable, StyleSheet, Text, View } from "react-native"

import React from "react"
import { useNavigation } from "@react-navigation/native"

export default function CategoryGridTile({ title, color, id }) {
  const navigator = useNavigation()

  const pressHandler = () => {
    navigator.navigate("MealsOverView", {
      categoryId: id
    })
  }

  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
        anroid_ripple={"#ccc"}
        onPress={pressHandler}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 4,
    overflow: Platform.select({ android: "hidden" })
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    borderRadius: 8,
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: Platform.select({ ios: "hidden" })
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  }
})
