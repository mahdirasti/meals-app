import { StyleSheet, Text, View } from "react-native"

import React from "react"

export default function MealIngredients({ ingredients = [] }) {
  if (!ingredients) return null

  return (
    <View style={styles.container}>
      {ingredients.map((ingredient) => (
        <Text style={styles.ingredientItem} key={ingredient}>
          {ingredient}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})
