import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground} from "react-native";
import Images from "../components/Images";
import snow from '../assets/snow.gif'
import { StatusBar } from "expo-status-bar";


const WelcomeScreen = (props) => {

  return (
    <View style = {styles.root}>
      <StatusBar hidden />

      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {snow}
        resizeMode = 'cover'
      >
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        <Images imageSource={require('../assets/welcome.jpg')}/>
        <Text style={styles.text}>Batman: Quest for Vengeance {"\n"}</Text>
        <View style={styles.button}>
        <Button 
          onPress = {function() {props.navigation.navigate("Rules")}}
          title = {"Begin Game"} 
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
  image: {
    opacity: .5
  },
  text: {
    textAlign: 'center', 
    fontSize: 35, 
    fontWeight: 'bold', 
    color: 'yellow',
    textShadowColor: 'tan', textShadowRadius: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'white',
    elevation: 3,
    backgroundColor: 'black',
    textShadowColor: 'yellow',
    textShadowRadius: 20
  }
});

export default WelcomeScreen;