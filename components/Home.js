import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Spurningar')}>
          <Text style={[styles.btnStart]}>Nafnorð</Text>
        </TouchableOpacity>
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
  btnStart: {
     backgroundColor: 'black',
     paddingTop: 10,
     paddingBottom: 10,
     paddingLeft: 70,
     paddingRight: 70,
     borderWidth: 1,
     color: 'white',
     fontSize: 24,
     borderRadius: 10
   },
});