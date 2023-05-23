import { Image, StyleSheet, Text, View } from "react-native"
import React, { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// import { FavoritesContext } from "../store/context/favorites-context"
import IconButton from "../components/shared/IconButton"
import { MEALS } from "../data/dummy_data"
import MealDetails from "../components/shared/MealDetails"
import MealIngredients from "../components/screens/meal-details/MealIngredients"
import MealSteps from "../components/screens/meal-details/MealSteps"
import TitleWrapper from "../components/shared/Title"
import { favoriteActions } from "../store/redux/favorites"
import { useNavigation } from "@react-navigation/native"

export default function MealDetailsScreen({ route }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

  const dispatch = useDispatch()

  // const favoritesContext = useContext(FavoritesContext)

  const navigation = useNavigation()

  const mealItem = MEALS.find((meal) => meal.id === route.params.meal_id)

  const isFavorited = favoriteMealIds.includes(mealItem.id)

  const headerRightHandler = () => {
    if (isFavorited) {
      dispatch(favoriteActions.removeFavorite({ id: mealItem.id }))
      // favoritesContext.removeFromFavorite(mealItem.id)
    } else {
      dispatch(favoriteActions.addFavorite({ id: mealItem.id }))
      // favoritesContext.addToFavorite(mealItem.id)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealItem.title,
      headerRight: () => {
        return (
          <IconButton
            name={!isFavorited ? "bookmark-outline" : "bookmark"}
            size={24}
            color="white"
            onPress={headerRightHandler}
          />
        )
      }
    })
  }, [mealItem, navigation, isFavorited])

  if (!mealItem)
    return (
      <View>
        <Text>Meal item is not exists!</Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imageStyle} source={{ uri: mealItem.imageUrl }} />
      </View>
      <View style={styles.detailsWrapper}>
        <View style={styles.mealTitleWrapper}>
          <Text style={styles.mealTitle}>{mealItem.title}</Text>
        </View>
        <MealDetails
          duration={mealItem.duration}
          complexity={mealItem.complexity}
          affordability={mealItem.affordability}
        />
        <TitleWrapper title="Ingredients">
          <MealIngredients ingredients={mealItem.ingredients} />
        </TitleWrapper>
        <TitleWrapper title="Steps">
          <MealSteps steps={mealItem.steps} />
        </TitleWrapper>

        {/* <View>
          <Text>
            {mealItem.isGlutenFree ? "Gluten free" : "Gluten not free"}
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
