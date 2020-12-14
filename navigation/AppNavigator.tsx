import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import FeedScreen from "../screen/FeedScreen";
import SearchScreen from "../screen/SearchScreen";
import MessagesScreen from "../screen/MessagesScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const STACK_NAVIGATOR_SCREEN_OPTIONS: StackNavigationOptions = {
  headerTitleAlign: 'center'
}

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
    </Tab.Navigator>
  </NavigationContainer>
)


export default Test
