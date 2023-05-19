import { Image, Pressable, StyleSheet, Text, View } from "react-native"

import MealDetails from "../../shared/MealDetails"
import React from "react"
import { useNavigation } from "@react-navigation/native"

export default function MealItem(props) {
  const { title, imageUrl, duration, complexity, affordability, id } = props

  const navigation = useNavigation()
  const openMealPageHandler = () => {
    navigation.navigate("MealDetailsPage", { meal_id: id })
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.container, styles.containerPressed]
            : styles.container
        }
        android_ripple="#eee"
        onPress={openMealPageHandler}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 16,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: "#000000",
    shadowRadius: 8,
    shadowOpacity: 0.24
  },
  container: {
    backgroundColor: "#ffffff",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden"
  },
  containerPressed: {
    opacity: Platform.select({ ios: 0.5 })
  },
  image: {
    width: "100%",
    height: 200
  },
  details: {
    padding: 16,
    gap: 8
  },

  title: {
    fontWeight: "bold",
    fontSize: 18
  }
})
