import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'

const AnotherScreen: React.FC<DrawerScreenProps<any>> = ({ navigation }) => {
  const toggleMenu = () => {
    navigation.toggleDrawer()
  }

  return (
    <View style={styles.wrapper}>
      <Text>Another</Text>
      <Button title='Sidebar' onPress={toggleMenu} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AnotherScreen
