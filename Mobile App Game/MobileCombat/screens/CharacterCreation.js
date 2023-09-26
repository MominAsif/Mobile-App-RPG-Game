import React, {useReducer, useState} from "react";
import { Button, View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import PointCounter from "../components/PointCounter";
import background2 from '../assets/background2.jpg'
import { StatusBar } from "expo-status-bar";



const POINT_INCREMENT = 1;
const pointsRemaining = 15;
const reducer = (state, action) => {
   switch(action.pointsToChange) {
      case "strength":
         return state.strength + action.amount < 1 || state.strength + action.amount > 15
         ? state
         : {...state, strength: state.strength + action.amount};
      case "health":
         return state.health + action.amount < 85 || state.health + action.amount > 100
         ? state
         : {...state, health: state.health + action.amount};
      case "utility":
         return state.utility + action.amount < 1 || state.utility + action.amount > 10
         ? state
         : {...state, utility: state.utility + action.amount};
      default:
         return state;
      
   }
}

const CharacterCreation = (props) => {

   const [state, dispatch] = useReducer(reducer, {strength: 5, health: 90, utility: 5});
   const {strength, health, utility} = state;
   const [counter, setCounter] = useState(5);
   const [counter2, setCounter2] = useState(90);
   const [counter3, setCounter3] = useState(5);
   const [pointsTotal, pointsRemaining] = useState(15);

   return <View style = {styles.root}>
         <StatusBar hidden />
         <Text style = {styles.text3}>🦇 Suit up in the Batcave 🦇</Text>
         <ImageBackground
            style = {styles.container}
            imageStyle={styles.image}
            source = {background2}
            resizeMode = 'cover'
         >
        <Text style={styles.text2}>Points Remaining: {pointsTotal} {"\n"}</Text>
        <Text style={styles.text}>Current Strength: {counter} </Text> 
        <PointCounter points = ""
            onIncrease={ () => {dispatch({pointsToChange: "strength", amount: POINT_INCREMENT}), setCounter(counter + 1), pointsRemaining(pointsTotal - 1); }} 
            onDecrease={ () => {dispatch({pointsToChange: "strength", amount: -1 * POINT_INCREMENT}), setCounter(counter - 1),  pointsRemaining(pointsTotal + 1); }}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.text}>Current Health: {counter2} </Text>
        <PointCounter points=""
           onIncrease={ () => {dispatch({pointsToChange: "health", amount: POINT_INCREMENT}), setCounter2(counter2 + 1), pointsRemaining(pointsTotal - 1); }}
           onDecrease={ () => {dispatch({pointsToChange: "health", amount: -1 * POINT_INCREMENT}), setCounter2(counter2 - 1), pointsRemaining(pointsTotal + 1);}}
        />
        <Text>{"\n"}</Text>
        <Text style={styles.text}>Current Utility: {counter3} </Text>
        <PointCounter points=""
           onIncrease={ () => {dispatch({pointsToChange: "utility", amount: POINT_INCREMENT}), setCounter3(counter3 + 1), pointsRemaining(pointsTotal - 1); }}
           onDecrease={ () => {dispatch({pointsToChange: "utility", amount: -1 * POINT_INCREMENT}), setCounter3(counter3 - 1), pointsRemaining(pointsTotal + 1); }}
        />
       <Text>{"\n"}</Text>
      

       {pointsTotal != 0 ? <Text style = {styles.text4}>🚨 You must use up all your points to go onto the next screen! 🚨</Text> : 
       <View style={styles.button}>
       <Button 
       onPress = {function() {props.navigation.navigate("Combat")}}
       title = {"Ready for Battle!"} />
       </View>
     }
       </ImageBackground>
  </View>
  
}


const styles = StyleSheet.create({
   root: {
      flex: 1
    },
    container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    image: {
      opacity: .5
    },
    text: {
      textAlign: 'center', 
      fontSize: 15, 
      fontWeight: 'bold', 
      color: 'cyan',
      textShadowColor: 'black', textShadowRadius: 10,
    },
    text2: {
      textAlign: 'center', 
      fontSize: 30, 
      fontWeight: 'bold', 
      color: 'purple',
      textShadowColor: 'black', textShadowRadius: 10,
    },
    text3: {
      textAlign: 'center', 
      fontSize: 30, 
      fontWeight: 'bold', 
      color: 'white',
      textShadowColor: 'blue', textShadowRadius: 20,
    },
    text4: {
      textAlign: 'center', 
      fontSize: 13, 
      fontWeight: 'bold', 
      color: 'yellow',
      textShadowColor: 'red', textShadowRadius: 20,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'purple',
      textShadowColor: 'yellow',
      textShadowRadius: 20
    }
});

export default CharacterCreation;