import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View>
      <SafeAreaView/>
      <Text style={[styles.container]}>
        AmiShop
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "50%",
    fontSize: 50,
    display: "flex",
    backgroundColor: "blue",
    color: "white",
    width: "100%",
    height: "100%",
    textAlign: "center"
  }
})