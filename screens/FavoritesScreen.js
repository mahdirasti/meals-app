import { FlatList, StyleSheet, Text, View } from "react-native"
import React, { useContext } from "react"

import { FavoritesContext } from "../store/context/favorites-context"
import { MEALS } from "../data/dummy_data"
import MealItem from "../components/screens/meals-overview/MealItem"
import { useSelector } from "react-redux"

export default function FavoritesScreen() {
  // const favoritesContext = useContext(FavoritesContext)
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

  const displayedMeals = MEALS.filter((mealItem) => {
    return favoriteMealIds.includes(mealItem.id)
  })

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

  if (!displayedMeals.length) {
    return (
      <View style={styles.containerNoItems}>
        <Text>There is no meals here!</Text>
      </View>
    )
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
  containerNoItems: {
    flex: 1,
    padding: 16,
    alignItems: "center"
  },
  list: {
    paddingVertical: 16,
    gap: 16
  }
})
