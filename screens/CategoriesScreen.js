import { FlatList, StyleSheet } from "react-native"

import { CATEGORIES } from "../data/dummy_data"
import CategoryGridTile from "../components/CategoryGridTile"
import React from "react"

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    const pressHandler = () => {
      navigation.navigate("MealsOverView")
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 16
  }
})
