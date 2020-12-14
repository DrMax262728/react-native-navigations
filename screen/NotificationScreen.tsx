import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {
  StackScreenProps
} from '@react-navigation/stack';

const NotificationScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const onClickComments = () => {
    navigation.navigate('Comment')
  }

  return (
    <View style={styles.wrapper}>
      <Text>Notification</Text>
      <Button title='Comments' onPress={onClickComments} />
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

export default NotificationScreen
