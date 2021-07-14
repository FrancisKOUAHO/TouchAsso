import React, { Component } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MessageScreen from "./MessageScreen";


const GroupScreen = (props) =>{

  state = {
    data: [
      {
        "name": "Group U1",
        "position": "Entraineur Mathis",
        "photo": "https://cdn.pixabay.com/photo/2012/04/24/23/44/dice-41187_960_720.png",
      },
      {
        "name": "Group U2",
        "position": "Entraineur Mathis",
        "photo": "https://cdn.pixabay.com/photo/2012/04/24/23/44/dice-41187_960_720.png",
      },
      {
        "name": "Group U3",
        "position": "Entraineur Mathis",
        "photo": "https://cdn.pixabay.com/photo/2012/04/24/23/44/dice-41187_960_720.png",
      },
      {
        "name": "Group U4",
        "position": "Entraineur Mathis",
        "photo": "https://cdn.pixabay.com/photo/2012/04/24/23/44/dice-41187_960_720.png",
      },
      {
        "name": "Group U5",
        "position": "Entraineur Mathis",
        "photo": "https://cdn.pixabay.com/photo/2012/04/24/23/44/dice-41187_960_720.png",
      },
      {
        "name": "Group U6",
        "position": "Entraineur Mathis",
        "photo": "https://cdn.pixabay.com/photo/2012/04/24/23/44/dice-41187_960_720.png",
      },
    ],
  };

    return (

      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <TouchableOpacity onPress={()=> props.navigation.navigate('ChatGroup')}><Item item={item} /></TouchableOpacity>}
          keyExtractor={item => item.email}
        />
      </View>
    );
}

function Item({ item}) {

  return (
      <View style={styles.listItem}>
        <Image source={{ uri: item.photo }} style={{ width: 50, height: 50, borderRadius: 30 }} />
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.position}</Text>
        </View>
        <TouchableOpacity
          style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "red", fontSize: 30 }}>&rsaquo;</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 60,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
});

export default GroupScreen;





