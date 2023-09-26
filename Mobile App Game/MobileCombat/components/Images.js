import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Images = (props) => {
    console.log(props);

    return (

        <View>
            <Image style = {styles.image} source={props.imageSource}/>
            <Text> {props.title} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250
    }
});

export default Images;
