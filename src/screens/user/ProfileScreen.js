import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import localStorage from "localStorage"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const API_URL = Platform.OS === "ios" ? "https://api-touch-assso.herokuapp.com" : "https://api-touch-assso.herokuapp.com";


class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let user = this.props.route.params.user;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.destroy}>
              <TouchableOpacity onPress={this.logUserOut}>
                <Image style={styles.icon} source={require("../../../assets/logout.png")} />
              </TouchableOpacity>
            </View>

            <View style={styles.headerContent}>
              <Image style={styles.avatar}
                     source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} />
              <Text style={styles.name}>{user.prenom} {user.nom}</Text>
              <Text style={styles.userInfo}>{user.email}</Text>
              <Text style={styles.userInfo}>{user.type}</Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.blackbox}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("Home");
              }}
            >
              <Image style={styles.redbox} source={require("../../../assets/home.png")} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Group", user);
              }}
            >
              <Image style={styles.redbox} source={require("../../../assets/group.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.bluebox}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ListMessage", user);
              }}
            >
              <Image style={styles.redbox} source={require("../../../assets/message.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.bluebox}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ListUser", user);
              }}
            >
              <Image style={styles.redbox} source={require("../../../assets/note.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.bluebox}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("SignUp", user);
              }}
            >
              <Image style={styles.redbox} source={require("../../../assets/add-user.png")} />
            </TouchableOpacity>
          </View>

          <View style={styles.bluebox}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("GroupeCreate", user);
              }}
            >
              <Image style={styles.redbox} source={require("../../../assets/pen.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </>
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
    width: 40,
    height: 40,
    marginTop: 15,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
  destroy: {
    marginLeft: "80%",
  },
  container: {
    margin: "4%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  bluebox: {
    width: 60,
    height: 60,
  },
  redbox: {
    width: 60,
    height: 60,
  },
  blackbox: {
    width: 60,
    height: 60,
  },
});

export default ProfileScreen;
