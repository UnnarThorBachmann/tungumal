import React from 'react';
import {Animated,StyleSheet, Text, ListView,View, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {db,shuffle, random3} from '../database';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnView:  {
    width: '50%',
    
  },
  btnBack: {
     marginBottom: 15,
     backgroundColor: 'blue',
     borderRadius: 10
   },
   btnText: {
    color: 'white',
    width: '100%',
    fontSize: 24,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: '10%',
    paddingRight: '10%',
   },
   greeting: {
    fontSize: 50
   },
   feedback: {
    fontSize: 40,
   }
});


export default class Spurningar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listi: shuffle(db),
      index: 0,
      score: 0,
      svar: '',
      face: 'smile-o',
      feedback: new Animated.Value(0),
      question: new Animated.Value(1)
    };
  }
  componentDidMount() {
    this.setState({listi: shuffle(db), index: 0, score: 0, feedback: new Animated.Value(0), question: new Animated.Value(1)});
  }

  haekka = (b) => {
    
    if (b)
      this.setState({svar: 'Rétt svar!', feedColor: 'green',face: 'smile-o'});
    else
      this.setState({svar: 'Rangt svar', feedColor: 'red',face: 'frown-o'});
    Animated.sequence([
      Animated.timing(                  
        this.state.question,            
        {
          toValue: 0,
          duration: 500
        }
      ),
      Animated.timing(                  
        this.state.feedback,            
        {
          toValue: 1,
          duration: 1000
        }
      ),
      Animated.timing(                  
        this.state.feedback,            
        {
          toValue: 0,
          duration: 1000
        }
      ),
      Animated.timing(                  
        this.state.question,            
        {
          toValue: 1,
          duration: 1,
        }
      ),       
    ]).start(()=>
      this.setState((state) => {
      return {...state, index: state.index + 1,
                        score: b? state.score+1:state.score,
              };
      })
    ); 
    
    
  }
  
  render() {
    const {index,listi,feedback,question,svar,feedColor,face} = this.state;
    const n = listi.length;
    

    let randIndices = random3(index, n);
    if (index < n) {
      return (
        <View style={styles.container}>
          <Animated.View                 
            style={{opacity: feedback}}
          >
            <Icon name={face} style={[styles.feedback, {color: feedColor}, {fontSize: 84}]} />
          </Animated.View>
          <Animated.View style={{marginBottom: 20, opacity: question}}>
            <Icon name={listi[index].mynd} size={80} color="#900" />
            
          </Animated.View>
          {
            randIndices.map((item,key)=>
              <Animated.View key={key} style={[styles.btnView,{opacity: question}]}>
                <TouchableOpacity style={styles.btnBack} onPress={()=> this.haekka(item===index)}>
                  <Text style={styles.btnText}>{listi[item].svar}</Text>
                </TouchableOpacity>
              </Animated.View>

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


