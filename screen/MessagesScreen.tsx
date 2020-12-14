import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MessagesScreen = () => (
  <View style={styles.wrapper}>
    <Text>Messages</Text>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  }
})

export default MessagesScreen
