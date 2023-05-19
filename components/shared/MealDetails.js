import { StyleSheet, Text, View } from "react-native"

import React from "react"

export default function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.detailItems}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  detailItems: {
    flexDirection: "row",
    gap: 8
  },
  detailItem: {
    opacity: 0.7
  }
})
