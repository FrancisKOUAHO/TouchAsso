import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, StatusBar } from "react-native";

const API_URL = Platform.OS === "ios" ? "http://localhost:5000" : "http://10.0.2.2:5000";

const GroupeCreate = (props) => {

  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = () => {
    const groupe = {
      nom,
      description,
    };
    fetch(`${API_URL}/groupe/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupe),

    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          props.navigation.navigate("Profile", jsonRes);
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nom du groupe"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={setNom}
        />
      </View>


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Description"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={setDescription}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={onSubmitHandler}>
        <Text>Enregistrer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 30
  },
  inputView: {
    backgroundColor: "#e5e5e5",
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC0CB",
  },
});

export default GroupeCreate;




