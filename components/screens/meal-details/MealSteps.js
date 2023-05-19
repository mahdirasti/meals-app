import { Text, View } from "react-native"

import MealStep from "../../shared/MealStep"
import React from "react"

export default function MealSteps({ steps = [] }) {
  if (!steps.length) return null

  return (
    <View>
      {steps.map((step, index) => (
        <MealStep key={step} index={index + 1} item={step} />
      ))}
    </View>
  )
}
