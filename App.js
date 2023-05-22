import "react-native-gesture-handler"

import CategoriesScreen from "./screens/CategoriesScreen"
import FavoritesScreen from "./screens/FavoritesScreen"
import MealDetailsScreen from "./screens/MealDetailsScreen"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigators = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FirstPageDrawer" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
            name="Home"
            component={DrawerNavigators}
          />
          <Stack.Screen name="MealsOverView" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetailsPage" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({})
