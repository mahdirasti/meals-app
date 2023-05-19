import { StyleSheet, Text, View } from "react-native"

import React from "react"

export default function TitleWrapper({ title, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    gap: 4
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  wrapper: {
    flex: 1
  }
})
