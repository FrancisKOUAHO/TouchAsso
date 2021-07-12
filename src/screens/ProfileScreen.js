import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image } from "react-native";


const API_URL = Platform.OS === "ios" ? "http://localhost:5000" : "http://10.0.2.2:5000";


class ProfileScreen extends Component {

  constructor(props) {
    super(props);
  }


  componentDidMount = () => {
    fetch('http://localhost:5000/users_informations')
      .then(response => response.json())
      .then(json => console.log(json))
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}
                   source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} />

            <Text style={styles.name}>Francis KOUAHO</Text>
            <Text style={styles.userInfo}>kouahofrancis@gmail.com</Text>
            <Text style={styles.userInfo}>Entraineur</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: "https://img.icons8.com/color/70/000000/cottage.png" }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Home</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
});

export default ProfileScreen;
