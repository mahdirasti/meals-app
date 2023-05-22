import { Ionicons } from "@expo/vector-icons"
import { Pressable } from "react-native"
import React from "react"
import { StyleSheet } from "react-native"
export default function IconButton({ name, color, size = 24, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.iconPressed : {})}
    >
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  iconPressed: {
    opacity: 0.7
  }
})
