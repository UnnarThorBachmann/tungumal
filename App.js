import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {MainNavigator} from './components/MainNavigator.js';

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator/>
    );
  }
}

