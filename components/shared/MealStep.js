import { Text, View } from "react-native"

import React from "react"

export default function MealStep({ item, index }) {
  return (
    <View>
      <Text>{`${index} - ${item}`}</Text>
    </View>
  )
}
