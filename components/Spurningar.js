import React from 'react';
import { StyleSheet, Text, ListView,View, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {db,shuffle, random3} from '../database';

export default class Spurningar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listi: shuffle(db),
      index: 0,
      score: 0
    };
  }
  componentDidMount() {
    this.setState({listi: shuffle(db), index: 0, score: 0});
  }

  haekka = (b) => {

    this.setState((state) => {
      return {...state, index: state.index + 1,score: b? state.score+1:state.score};
    });
  }
  /*
     
  */
  render() {
    const {index,listi} = this.state;
    const n = listi.length;

    let randIndices = random3(index, n);
    if (index < n) {
      return (
        <View style={styles.container}>
          <View style={{marginBottom: 20}}>
            <Icon name={listi[index].mynd} size={80} color="#900" />
            
          </View>
          {
            randIndices.map((item,key)=>
              <View key={key} style={styles.btnView}>
                <TouchableOpacity style={styles.btnBack} onPress={()=> this.haekka(item===index)}>
                  <Text style={styles.btnText}>{listi[item].svar}</Text>
                </TouchableOpacity>
              </View>

            )
            
          }
        </View>
      );

    }
    else {
      return (
        <View style={styles.container}>
          <View>
            <Text style={styles.greeting}>Takk fyrir!</Text>
            <Text style={styles.greeting}>{this.state.score} af {this.state.listi.length}</Text>
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
  btnView:  {
    width: 100
  },
  btnBack: {
     marginBottom: 15,
     backgroundColor: 'blue',
     paddingLeft: 5,
     paddingRight: 5,
     borderWidth: 1
   },
   btnText: {
    color: 'white',
    fontSize: 20
   },
   greeting: {
    fontSize: 50
   }
});
