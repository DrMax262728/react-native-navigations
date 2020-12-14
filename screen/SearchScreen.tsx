import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchScreen = () => (
  <View style={styles.wrapper}>
    <Text>Search</Text>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  }
})

export default SearchScreen
