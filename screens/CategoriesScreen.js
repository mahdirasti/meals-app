import { FlatList, StyleSheet } from "react-native"

import { CATEGORIES } from "../data/dummy_data"
import CategoryGridTile from "../components/shared/CategoryGridTile"
import React from "react"

function renderCategoryItem({ item }) {
  return <CategoryGridTile {...item} />
}

export default function CategoriesScreen() {
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
