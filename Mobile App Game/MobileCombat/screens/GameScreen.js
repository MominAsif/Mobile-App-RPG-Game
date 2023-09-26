import React, {useReducer, useState} from "react";
import { Button, View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, Image } from "react-native";
import PointCounter from "../components/PointCounter";
import StrengthCounter from "../components/StrengthCounter";
import HealthCounter from "../components/HealthCounter";
import UtilityCounter from "../components/UtilityCounter";
import background3 from '../assets/combat.gif'
import background4 from '../assets/batcave.gif'
import background5 from '../assets/welcome3.gif'
import background6 from '../assets/jokerwins.gif'
import { StatusBar } from "expo-status-bar";


const STAT_SCREEN_STATE = "characterCreation";
const COMBAT_SCREEN_STATE = "fighting";
const LOSE_SCREEN_STATE = "lose";
const WIN_SCREEN_STATE = "win";


const POINT_INCREMENT = 1;
const pointsRemaining = 15;
const reducer = (state, action) => {
   switch(action.pointsToChange) {
      case "strength":
         return {...state, strength: state.strength + action.amount};
      case "health":
         return  {...state, health: state.health + action.amount};
      case "utility":
         return {...state, utility: state.utility + action.amount};
      case "jokerHealth":
         return  {...state, jokerHealth: state.jokerHealth + action.amount};
      case "jokerUtility":
         return  {...state, jokerUtility: state.jokerUtility + action.amount};
      default:
         return state;
   }
}

const GameScreen = (props) => {
    const [gameState, setGameState] = useState(STAT_SCREEN_STATE);
    var whatToDisplay;

    const [state, dispatch] = useReducer(reducer, {strength: 5, health: 90, utility: 1, jokerStrength: 5, jokerHealth: 95, jokerUtility: 7});
    const {strength, health, utility, jokerStrength, jokerHealth, jokerUtility} = state;
    const [counter, setCounter] = useState(5);
    const [counter2, setCounter2] = useState(90);
    const [counter3, setCounter3] = useState(1);
    const [pointsTotal, pointsRemaining] = useState(15);
    const [currentText, newText] = useState('Joker has escaped from Arkham Asylum once again. You must stop him before he destroys the city!');

    switch(gameState) {
        case STAT_SCREEN_STATE:
            whatToDisplay = 
            <View style = {styles.root}>
         <StatusBar hidden />
         <Text style = {styles.text3}>🦇 Suit up in the Batcave 🦇</Text>
         <ImageBackground
            style = {styles.container}
            imageStyle={styles.image}
            source = {background4}
            resizeMode = 'cover'
         >
        <View  style={{borderWidth:  3, borderColor: 'purple', }}>
        <Text style={styles.text2}>Points Remaining: {pointsTotal}</Text>
        </View>
        <Text>{"\n"}</Text>
        <View  style={{borderWidth:  5, borderColor: 'cyan', }}>
        <Text style={styles.text}>Current Strength: {counter} </Text> 
        <PointCounter points = ""
            onIncrease={ () => {
            {counter >= 10 || pointsTotal <= 0 ? null: dispatch({pointsToChange: "strength", amount: POINT_INCREMENT}) + setCounter(counter + 1) + pointsRemaining(pointsTotal - 1)}
          }}
            onDecrease={ () => {
            {counter <= 1 || pointsTotal >= 15 ? null: dispatch({pointsToChange: "strength", amount: -1 * POINT_INCREMENT}) + setCounter(counter - 1) +  pointsRemaining(pointsTotal + 1)}
            }}
        />

        </View>
        <Text>{"\n"}</Text>
        <View  style={{borderWidth:  5, borderColor: 'cyan', }}>
        <Text style={styles.text}>Current Health: {counter2} </Text>
        <PointCounter points=""
           onIncrease={ () => {
            {counter2 >= 100 || pointsTotal <= 0 ? null: dispatch({pointsToChange: "health", amount: POINT_INCREMENT}) + setCounter2(counter2 + 1) + pointsRemaining(pointsTotal - 1) }
          }}
           onDecrease={ () => {
            {counter2 <= 85 || pointsTotal >= 15 ? null: dispatch({pointsToChange: "health", amount: -1 * POINT_INCREMENT}) + setCounter2(counter2 - 1) + pointsRemaining(pointsTotal + 1)}
          }}
        />
        </View>
        <Text>{"\n"}</Text>
        <View  style={{borderWidth:  5, borderColor: 'cyan', }}>
        <Text style={styles.text}>Current Utility: {counter3} </Text>
        <PointCounter points=""
           onIncrease={ () => {
            {counter3 >= 5 || pointsTotal <= 0 ? null: dispatch({pointsToChange: "utility", amount: POINT_INCREMENT}) + setCounter3(counter3 + 1) + pointsRemaining(pointsTotal - 1) }
          }}
           onDecrease={ () => {
            {counter3 <= 1 || pointsTotal >= 15 ? null: dispatch({pointsToChange: "utility", amount: -1 * POINT_INCREMENT}) + setCounter3(counter3 - 1) + pointsRemaining(pointsTotal + 1) }
           }}
        />
        </View>
       <Text>{"\n"}</Text>
      
       {pointsTotal != 0 ? <Text style = {styles.text4}>🚨 You must use up all your points to go onto the next screen! 🚨</Text> : 
       <View style={styles.button}>
       <Button 
       onPress = {function() {setGameState(COMBAT_SCREEN_STATE)}}
       title = {"Ready for Battle!"} />
       </View>
     }
       </ImageBackground>
  </View>
  
        break;

        case COMBAT_SCREEN_STATE:
            whatToDisplay = 
                <ImageBackground
        style = {styles2.container}
        imageStyle={styles2.image}
        source = {background3}
        resizeMode = 'cover'
      >
        <View style={styles2.page}>
        <View  style={{borderWidth:  5, borderColor: 'blue', }}>
        <Text style={styles2.text}>
            Batman Stats {"\n"}
            <Text style={styles2.text3}>Health  💙: {"\n"} {health} {"\n"}{"\n"} Strength  💪:{"\n"} {strength} {"\n"}{"\n"} Utility  ⚒️: {"\n"}{utility} </Text>
        </Text>
        </View>
        
        <View style={styles2.verticleLine}></View>
        <View  style={{borderWidth:  5, borderColor: 'green', }}>
        <Text style={styles2.text2}>
            Joker Stats {"\n"}
            <Text style={styles2.text3}>Health  💚: {"\n"}{jokerHealth} {"\n"}{"\n"} Strength  💪: {"\n"}{jokerStrength} {"\n"}{"\n"} Utility  ⚒️: {"\n"}{jokerUtility} </Text>
        </Text>
        </View>
     </View>
     <View style={{
        flexDirection: "row",
        justifyContent: "space-between"
        }}>
            
     <View style={styles2.container2}>
      <Image
            style={styles2.image2}
            source={require('../assets/batman.png')}
        />
    </View>
    <View style={styles2.container3}>
        <Image
            style={styles2.image3}
            source={require('../assets/joker.png')}
        />
  </View>
  </View>
  <View  style={{borderWidth:  3, borderColor: 'red'}}>
    <Text style = {styles.text5}>{currentText}</Text>
    </View>
    <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
  <View style={{
        flexDirection: "row",
        justifyContent: "space-between"
        }}>
    <StrengthCounter points = "Punch"
            onIncrease={ () => {   
                dispatch({pointsToChange: "jokerHealth", amount: - (Math.floor(Math.random() * 5)) * strength}),
                dispatch({pointsToChange: "health", amount: - (Math.floor(Math.random() * 5)) * jokerStrength}),
                newText('Batman punched Joker with his fists of justice! KAPOW!\n \n \n \n Joker counter attacks with a kick towards Batman! WHAM!')
      
            }}
    />

    <HealthCounter points = "Heal"
            onIncrease={ () => {
                {utility <=0 || health >= 96 ? null: dispatch({pointsToChange: "health", amount: 5 * POINT_INCREMENT}) + dispatch({pointsToChange: "utility", amount: -1 * POINT_INCREMENT}) + newText('Batman heals himself with a healing item from his awesome utility belt! POOF')
                }
            }}
            
    />
    <UtilityCounter points = "Batarang"
            onIncrease={ () => {
              {utility <= 0 ? null: 
              dispatch({pointsToChange: "jokerHealth", amount: -30}) +
              dispatch({pointsToChange: "utility", amount: -1 * POINT_INCREMENT}) +
              dispatch({pointsToChange: "health", amount: - 40}) +
              dispatch({pointsToChange: "jokerUtility", amount: -1 * POINT_INCREMENT}) +
              newText('Batman throws a batarang at Joker! BANG! \n \n \n \n Joker hits Batman with some of his laughing gas! POP!')
              }
        }}
            
    />
    </View>
            {jokerHealth <= 0 ? setGameState(WIN_SCREEN_STATE) : null}
            {health <= 0 ? setGameState(LOSE_SCREEN_STATE) : null}
            {health <= 0 && jokerHealth <= 0 ? setGameState(WIN_SCREEN_STATE) : null}
     </ImageBackground>
            
            break;

    case WIN_SCREEN_STATE:
        whatToDisplay = 
        <ImageBackground
        style = {styles2.container}
        imageStyle={styles2.image}
        source = {background5}
        resizeMode = 'cover'
      >
        <Text style = {styles2.text4}>You Win! {"\n"}</Text>
        <Text style = {styles2.text5}>Batman has successfully defeated the Joker once again. Press the Play Again button to return to the main screen and play the game again!{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>

        <View style={styles.button2}>
       <Button 
       onPress = {function() {props.navigation.navigate("Welcome")}}
       title = {"Play Again!"} />
       </View>
      </ImageBackground>
        break;

        case LOSE_SCREEN_STATE:
            whatToDisplay = 
            <ImageBackground
            style = {styles2.container}
            imageStyle={styles2.image}
            source = {background6}
            resizeMode = 'cover'
          >
            <Text style = {styles2.text6}>You lose! {"\n"}</Text>
            <Text style = {styles2.text5}>Joker has unfortunately managed to defeat Batman. Press the Play Again button to try again. {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
    
            <View style={styles.button2}>
           <Button 
           onPress = {function() {props.navigation.navigate("Welcome")}}
           title = {"Play Again!"} />
           </View>
          </ImageBackground>
            break;
    }

    return whatToDisplay

};

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
     text5: {
        fontSize: 13, 
        fontWeight: 'bold', 
        color: 'white',
        textShadowColor: 'black', textShadowRadius: 10,
        margin: 10
      },
     button: {
       alignItems: 'center',
       justifyContent: 'center',
       paddingVertical: 12,
       paddingHorizontal: 32,
       borderRadius: 4,
       borderWidth: 5,
       borderColor: 'teal',
       elevation: 3,
       backgroundColor: 'purple',
       textShadowColor: 'yellow',
       textShadowRadius: 20
     },
     button2: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'blue',
        elevation: 3,
        backgroundColor: 'yellow',
        textShadowColor: 'yellow',
        textShadowRadius: 20
      }
 });

 const styles2 = StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        flex: 1, 
        backgroundColor: 'black',
    },
    image: {
        opacity: .5
      },
    container2: {
        paddingTop: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    container3: {
        paddingTop: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    image2: {
        width: 200,
        height: 270,
    },
    image3: {
        width: 200,
        height: 270,
    },
    page: {
        paddingTop: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },
    text: {
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'yellow',
        textShadowColor: 'blue', textShadowRadius: 25
    },
    text2: {
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'purple',
        textShadowColor: 'green', textShadowRadius: 25
    },
    text3: {
        textAlign: 'center', 
        fontSize: 15, 
        fontWeight: 'bold', 
        color: 'red',
        textShadowColor: 'black', textShadowRadius: 5
    },
    text4: {
        textAlign: 'center', 
        fontSize: 35, 
        fontWeight: 'bold', 
        color: 'yellow',
        textShadowColor: 'blue', textShadowRadius: 50
    },
    text5: {
        textAlign: 'center', 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'white',
        textShadowColor: 'black', textShadowRadius: 40
    },
    text6: {
        textAlign: 'center', 
        fontSize: 35, 
        fontWeight: 'bold', 
        color: 'purple',
        textShadowColor: 'green', textShadowRadius: 40
    },
    verticleLine: {
        height: '400%',
        width: 3,
        backgroundColor: 'white'
    }
});

export default GameScreen;