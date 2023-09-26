import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from "react-native";
import CharacterCreation from "./CharacterCreation";
import background3 from '../assets/background3.jpg'

const CombatScreen = () => {

    return (
    
      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {background3}
        resizeMode = 'cover'
      >
        <View style={styles.ridesFriends}>
        <Text style={styles.text}>
            Batman Stats {"\n"}
            <Text style={styles.text3}>Health: {CharacterCreation.points.counter}</Text>
        </Text>
        
        <View style={styles.verticleLine}></View>
        <Text style={styles.text2}>
            Joker Stats
        </Text>
     </View>
     <View style={{
        flexDirection: "row",
        justifyContent: "space-between"
        }}>
            
     <View style={styles.container2}>
      <Image
            style={styles.image2}
            source={require('../assets/batman.png')}
        />
    </View>
<View style={styles.container3}>
        <Image
            style={styles.image3}
            source={require('../assets/joker.png')}
        />
  </View>
  </View>
     </ImageBackground>
    
    );
};

const styles = StyleSheet.create({
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
        paddingTop: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    container3: {
        paddingTop: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    image2: {
        width: 200,
        height: 350,
    },
    image3: {
        width: 200,
        height: 400,
    },
    ridesFriends: {
        paddingTop: .5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20
    },
    text: {
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'blue',
        textShadowColor: 'black', textShadowRadius: 5
    },
    text2: {
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'purple',
        textShadowColor: 'green', textShadowRadius: 5
    },
    text3: {
        textAlign: 'center', 
        fontSize: 15, 
        fontWeight: 'bold', 
        color: 'red',
        textShadowColor: 'black', textShadowRadius: 5
    },
    verticleLine: {
        height: '500%',
        width: 3,
        backgroundColor: '#909090'
    }
});

export default CombatScreen;
