import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FeedScreen = () => (
  <View style={styles.wrapper}>
    <Text>Feed</Text>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default FeedScreen
