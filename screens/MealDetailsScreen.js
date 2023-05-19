import { Image, StyleSheet, Text, View } from "react-native"
import React, { useLayoutEffect } from "react"

import { MEALS } from "../data/dummy_data"
import MealDetails from "../components/shared/MealDetails"
import MealIngredients from "../components/screens/meal-details/MealIngredients"
import MealSteps from "../components/screens/meal-details/MealSteps"
import TitleWrapper from "../components/shared/Title"
import { useNavigation } from "@react-navigation/native"

export default function MealDetailsScreen({ route }) {
  const navigation = useNavigation()

  const categoryItem = MEALS.find((meal) => meal.id === route.params.meal_id)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryItem.title
    })
  }, [categoryItem, navigation])

  if (!categoryItem)
    return (
      <View>
        <Text>Meal item is not exists!</Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.imageStyle}
          source={{ uri: categoryItem.imageUrl }}
        />
      </View>
      <View style={styles.detailsWrapper}>
        <View style={styles.mealTitleWrapper}>
          <Text style={styles.mealTitle}>{categoryItem.title}</Text>
        </View>
        <MealDetails
          duration={categoryItem.duration}
          complexity={categoryItem.complexity}
          affordability={categoryItem.affordability}
        />
        <TitleWrapper title="Ingredients">
          <MealIngredients ingredients={categoryItem.ingredients} />
        </TitleWrapper>
        <TitleWrapper title="Steps">
          <MealSteps steps={categoryItem.steps} />
        </TitleWrapper>

        {/* <View>
          <Text>
            {categoryItem.isGlutenFree ? "Gluten free" : "Gluten not free"}
          </Text>
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageStyle: {
    width: "100%",
    height: 300
  },
  detailsWrapper: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff"
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: "bold"
  }
})
