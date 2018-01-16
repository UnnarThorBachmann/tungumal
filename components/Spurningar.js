import React from 'react';
import { StyleSheet, Text, ListView,View, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {db} from '../database';

export default class Spurningar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listi: db,
      index: 0
    };
  }
  componentDidMount() {
    this.setState({listi: db, index: 0});
  }

  haekka = ()=> {

    this.setState((state) => {
      return {...state, index: state.index + 1};
    });
  }
  render() {
    const {index,listi} = this.state;
    
    let fylki = [];
    const n = listi.length;
    

    if (index < this.state.listi.length) {
      return (
        <View style={styles.container}>
          <View>
            <Icon name={this.state.listi[index].mynd} size={80} color="#900" />
          </View>
          <View>
            <TouchableOpacity style={styles.btnBack} onPress={this.haekka}>
             <Text style={styles.btnText}>{this.state.listi[index].svar}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );

    }
    else {
      return (
        <View style={styles.container}>
          <View>
            <Text style={styles.greeting}>Takk fyrir!</Text>
          </View>
        </View>
      )
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBack: {
     marginTop: 50,
     backgroundColor: 'green',
     paddingLeft: 70,
     paddingRight: 70,
     paddingTop: 10,
     paddingBottom: 10,
     borderWidth: 1
   },
   btnText: {
    color: 'white'
   },
   greeting: {
    fontSize: 50
   }
});
