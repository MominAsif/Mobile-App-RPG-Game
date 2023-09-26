import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from "react-native";

const HealthCounter = (props) => {
    return (
    <View style={{ alignItems: "center", marginRight: 10 }}>
        <Text style = {styles.text}> {props.points} </Text>
        <TouchableOpacity
            onPress= {props.onIncrease} title={`Increase ${props.points}`}
            activeOpacity={0.5}>
                <Image style = {styles.image}
                source = {require('../assets/heal.webp')}
                resizeMode = {'stretch'} />
            </TouchableOpacity>  
    </View>
    )
    };
    

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        alignItems: 'right'
    },
    text: {
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'magenta',
        textShadowColor: 'black', textShadowRadius: 10,
      },
});

export default HealthCounter;