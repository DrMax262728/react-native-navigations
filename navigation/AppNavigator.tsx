import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native'

import FeedScreen from "../screen/FeedScreen";
import SearchScreen from "../screen/SearchScreen";
import MessagesScreen from "../screen/MessagesScreen";

const Tab = createBottomTabNavigator();

const Test = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName='Feed' >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Message" component={MessagesScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)


export default Test
