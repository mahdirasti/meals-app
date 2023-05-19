import { FlatList, StyleSheet, Text, View } from "react-native"

import { CATEGORIES } from "../data/dummy_data"
import CategoryGridTile from "../components/CategoryGridTile"
import React from "react"

function renderCategoryItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />
}
export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  )
}
