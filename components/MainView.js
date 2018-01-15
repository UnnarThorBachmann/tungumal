import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Spurningar} from 'Spurningar.js'
import {Home} from 'Home.js'

export const MainView = StackNavigator({
   
   Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Íslenska',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white'
    }),
  },
  Nafnord: {
    screen: Spurningar,
    navigationOptions: ({navigation}) => ({
      title: 'Spurningar',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white'
    }),
  }
 })