import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { STACK_NAVIGATOR_SCREEN_OPTIONS } from "../constants/stackNavigator";

import AnotherScreen from "../screen/AnotherScreen";
import GroupsScreen from "../screen/GroupsScreen";
import AudioScreen from "../screen/AudioScreen";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const _AnotherScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Another" component={AnotherScreen} options={STACK_NAVIGATOR_SCREEN_OPTIONS} />
  </Stack.Navigator>
)

const _GroupsScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Groups" component={GroupsScreen} options={STACK_NAVIGATOR_SCREEN_OPTIONS} />
  </Stack.Navigator>
)

const _AudioScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Audio" component={AudioScreen} options={STACK_NAVIGATOR_SCREEN_OPTIONS} />
  </Stack.Navigator>
)

const AnotherNavigator = () => (
  <Drawer.Navigator initialRouteName='Another'>
    <Drawer.Screen name='Another' component={_AnotherScreen} />
    <Drawer.Screen name='Groups' component={_GroupsScreen} />
    <Drawer.Screen name='Audio' component={_AudioScreen} />
  </Drawer.Navigator>
)


export default AnotherNavigator
