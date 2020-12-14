import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { STACK_NAVIGATOR_SCREEN_OPTIONS } from "../constants/stackNavigator";
import CommentScreen from "../screen/CommentScreen";
import NotificationScreen from "../screen/NotificationScreen";

const Stack = createStackNavigator()

const NotificationNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Notification" component={NotificationScreen} options={STACK_NAVIGATOR_SCREEN_OPTIONS} />
    <Stack.Screen name="Comment" component={CommentScreen} options={STACK_NAVIGATOR_SCREEN_OPTIONS} />
  </Stack.Navigator>
)


export default NotificationNavigator
