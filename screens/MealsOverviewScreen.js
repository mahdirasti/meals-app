import { CATEGORIES, MEALS } from "../data/dummy_data"
import { FlatList, StyleSheet, View } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

import MealItem from "../components/screens/meals-overview/MealItem"

export default function MealsOverviewScreen() {
  const route = useRoute()
  const { setOptions } = useNavigation()

  const { categoryId } = route.params

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0
  })

  const categoryItem = CATEGORIES.find((item) => item.id === categoryId)

  useLayoutEffect(() => {
    if (categoryItem && categoryItem.title)
      setOptions({
        title: categoryItem.title
      })
  }, [categoryItem, categoryId])

  function renderMealItem({ item }) {
    const mealDataItem = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    }

    return <MealItem {...mealDataItem} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    paddingVertical: 16,
    gap: 16
  }
})
