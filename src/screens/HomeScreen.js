import React, { Component } from "react";
import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Card } from 'react-native-paper';

class HomeScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/1200px-Logo_Rugby_Angleterre.svg.png")} style={styles.image} />
            <Text style={styles.text}>Bienvenue au club Frolliam</Text>
          </View>
        </View>
        <SafeAreaView style={styles.containerDeux}>
          <View style={styles.containerDeux}>
            <Card>
              <View style={styles.containerimage}>
                <Image source={require("../../assets/870x489_ballon.jpg")} style={styles.image} />
              </View>
              <Text style={styles.paragraph}>
                100% Rugby, c’est l’actu des clubs de rugby catalans : L'USAP et les Dragons Catalans
              </Text>
            </Card>
          </View>

          <View style={styles.containerDeux}>
            <Card>
              <View style={styles.containerimage}>
                <Image source={require("../../assets/images.jpg")} style={styles.image} />
              </View>
            </Card>
          </View>
        </SafeAreaView>

      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerDeux: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerimage: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  text:{
    marginTop: 10,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});

export default HomeScreen;
