import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class NafnordScreen extends React.Component {
  static navigationOptions = {
    title: 'Nafnorð',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});