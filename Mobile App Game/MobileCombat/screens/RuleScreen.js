import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground} from "react-native";
import rules from '../assets/rules.gif'
import { StatusBar } from "expo-status-bar";


const RuleScreen = (props) => {

  return (
    <View style = {styles.root}>
      <StatusBar hidden />

      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {rules}
        resizeMode = 'cover'
      >

        <Text style={styles.text}>Rules {"\n"} </Text>
        <Text style={styles.text2}>Character Customization</Text>  
        <Text style={styles.text3}>•You cannot have more than 10 strength or less than 1 strength {"\n"} {"\n"}
                                    •You cannot have more than 100 health or less than 85 health {"\n"} {"\n"}
                                    •You cannot have more than 5 utility or less than 1 utility {"\n"} {"\n"}
                                    •You cannot have more than 15 availabe spending points and you must use all of them to continue {"\n"}
        </Text>    
        <Text style={styles.text2}>Combat</Text>  
        <Text style={styles.text3}>• Your punches deal a random amount of damage which is calculated from your strength. Joker also can do random amount of damage to you. {"\n"} {"\n"}
                                    •You can heal while in battle. However, you cannot heal past 100 health and healing takes up one of your utility points {"\n"} {"\n"}
                                    •Batarangs do 30 damage while Joker's laughing gas do 40 damage {"\n"} {"\n"}
                                    •Battle wisely. Remember, Joker's utility does more damage than yours but you can heal so choose your moves wisely. {"\n"}
        </Text>                
        <View style={styles.button}>
        <Button 
          onPress = {function() {props.navigation.navigate("Game")}}
          title = {"Customize Character"} 
        />
        </View>
      </ImageBackground>
    </View>
  );
  
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
  text: {
    textAlign: 'center', 
    fontSize: 45, 
    fontWeight: 'bold', 
    color: 'white',
    textShadowColor: 'blue', textShadowRadius: 40,
  },
  text2: {
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: 'blue',
    textShadowColor: 'yellow', textShadowRadius: 20,
  },
  text3: {
    textAlign: 'center', 
    fontSize: 15, 
    fontWeight: 'bold', 
    color: 'white',
    textShadowColor: 'yellow', textShadowRadius: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'black',
    elevation: 3,
    backgroundColor: 'yellow',
    textShadowColor: 'yellow',
    textShadowRadius: 20
  }
});

export default RuleScreen;