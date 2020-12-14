import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import NotificationNavigator from "./NotificationNavigator";

import FeedScreen from "../screen/FeedScreen";
import SearchScreen from "../screen/SearchScreen";
import MessagesScreen from "../screen/MessagesScreen";
import {STACK_NAVIGATOR_SCREEN_OPTIONS} from "../constants/stackNavigator";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const _FeedScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={FeedScreen} options={STACK_NAVIGATOR_SCREEN_OPTIONS} />
  </Stack.Navigator>
)

const _SearchScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} options={STACK_NAVIGATOR_SCREEN_OPTIONS} />
  </Stack.Navigator>
)

const _MessagesScreen = () => (
  <Stack.Navigator>
    <Tab.Screen name="Message" component={MessagesScreen} options={STACK_NAVIGATOR_SCREEN_OPTIONS} />
  </Stack.Navigator>
)

const Test = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName='Feed' >
      <Tab.Screen name="Feed" component={_FeedScreen} />
      <Tab.Screen name="Search" component={_SearchScreen} />
      <Tab.Screen name="Message" component={_MessagesScreen} />
      <Tab.Screen name='Notification' component={NotificationNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
)


export default Test
