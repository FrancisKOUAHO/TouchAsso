import React, {useEffect} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";


const WelcomeScreen = props => {
  useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate('Login');
    }, 1000)
  })


  return (
    <View style={styles.container}>
      <Image source={require("../../assets/TouchAsso.png")} style={styles.image} />
      <Text style={styles.text}>Touch Asso</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontFamily: "Cochin",
    fontSize: 20,
  },
  button: {
    backgroundColor: "lightblue",
    borderColor: "darkblue",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
});

export default WelcomeScreen;




