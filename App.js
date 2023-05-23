import "react-native-gesture-handler"

import CategoriesScreen from "./screens/CategoriesScreen"
import FavoritesProvider from "./store/context/favorites-context"
import FavoritesScreen from "./screens/FavoritesScreen"
import MealDetailsScreen from "./screens/MealDetailsScreen"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { store } from "./store/redux/store"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigators = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "rgb(158, 63, 65)"
              },
              headerTintColor: "#ffffff"
            }}
          >
            <Stack.Screen
              options={{
                headerShown: false
              }}
              name="Categories"
              component={DrawerNavigators}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetailsPage"
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesProvider> */}
    </>
  )
}

const styles = StyleSheet.create({})
