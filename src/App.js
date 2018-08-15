import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Explorer from './Explorer';
import Saved from './Saved';
import Trips from './Trips';
import Inbox from './Inbox';

export default createBottomTabNavigator({
  Explore: {
    screen: Explorer,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved
  },
  Trips: {
    screen: Trips
  },
  Inbox: {
    screen: Inbox
  }
});
