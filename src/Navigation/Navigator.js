import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import Home from "../Screen/Home";
import Calendar from "../Screen/Calendar";
import Library from "../Screen/Library";
import Mypage from "../Screen/Mypage";

const Stack = createBottomTabNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return focused ? (
            <Icon name="home" size={size} />
          ) : (
            <Icon name="home-outline" size={size} />
          );
        },
      }}
    />
    <Stack.Screen
      name="Calendar"
      component={Calendar}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return focused ? (
            <Icon name="calendar" size={size} />
          ) : (
            <Icon name="calendar-outline" size={size} />
          );
        },
      }}
    />
    <Stack.Screen
      name="Library"
      component={Library}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return focused ? (
            <Icon name="bar-chart" size={size} />
          ) : (
            <Icon name="bar-chart-outline" size={size} />
          );
        },
      }}
    />
    <Stack.Screen
      name="Mypage"
      component={Mypage}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return focused ? (
            <FontAwesomeIcon name="user-circle" size={size} />
          ) : (
            <FontAwesomeIcon name="user-circle-o" size={size} />
          );
        },
      }}
    />
  </Stack.Navigator>
);
