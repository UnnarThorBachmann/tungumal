import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Spurningar from './Spurningar.js';
import Home from './Home.js';

export const MainNavigator = StackNavigator({
   
   Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Íslenska',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white'
    }),
  },
  Spurningar: {
    screen: Spurningar,
    navigationOptions: ({navigation}) => ({
      title: 'Nafnorð',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white'
    }),
  }
 })