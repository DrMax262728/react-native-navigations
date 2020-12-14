import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {StackScreenProps} from "@react-navigation/stack";


const CommentScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const onClickNotification = () => {
    navigation.navigate('Notification')
  }

  return (
    <View style={styles.wrapper}>
      <Text>Comments</Text>
      <Button title='Notification' onPress={onClickNotification} />
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

export default CommentScreen
