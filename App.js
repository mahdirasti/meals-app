import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverView" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({})
