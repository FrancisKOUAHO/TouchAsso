import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, StatusBar } from "react-native";

const API_URL = Platform.OS === "ios" ? "http://localhost:5000" : "http://10.0.2.2:5000";

const LoginScreen = (props) => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const onChangeHandler = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

  const onLoggedIn = token => {
    fetch(`${API_URL}/private`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
        ;
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitHandler = () => {
    const payload = {
      email,
      password,
    };
    fetch(`${API_URL}/${isLogin ? "login" : "signup"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.message);
          } else {
            onLoggedIn(jsonRes.token);
            setIsError(false);
            setMessage(jsonRes.message);
            props.navigation.navigate("Profile", jsonRes);
          }
        } catch (err) {
          console.log(err);
        }
        ;
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };


  return (
    <View style={styles.container}>
      <Image source={require("../../assets/TouchAsso.png")} style={styles.image} />
      <Text style={styles.message}>{message}</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mots de passe"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>
      <Text style={[styles.message, { color: isError ? "red" : "green" }]}>{message ? getMessage() : null}</Text>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={onSubmitHandler}>
        <Text>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 300,
    height: 300,
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

  forgot_button: {
    height: 30,
  },

  loginBtn: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFC0CB",
  },

  message: {
    padding: 5,
    marginTop: 5,
    fontSize: 15,
    color: "green",
  },
  message_error: {
    fontSize: 10,
    marginTop: 25,
    color: "red",
  },
});

export default LoginScreen;




