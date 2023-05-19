import { SafeAreaView, StyleSheet, Text, View } from "react-native"

import CategoriesScreen from "./screens/CategoriesScreen"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.rootScreen}>
        <CategoriesScreen />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
})
