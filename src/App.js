import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";


import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import ProfileScreen from "./screens/user/ProfileScreen";
import MessageScreen from "./screens/messages/MessageScreen";
import ListMessagePrivateScreen from "./screens/messages/ListMessagePrivateScreen";
import GroupScreen from "./screens/groupes/GroupScreen";
import HomeScreen from "./screens/HomeScreen";
import ChatGroupSreen from "./screens/groupes/ChatGroupScreen";
import ListUserScreen from "./screens/user/ListUserScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import GroupeCreate from "./screens/groupes/create/GroupeCreate";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs({ props, navigate }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/home.png")} style={styles.image} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/messenger.png")} style={styles.image} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Compte",
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/user.png")} style={styles.image} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const App = ({ props, navigate }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={(options) => {
          return {
            title: options.route.name,
            headerStyle: {
              backgroundColor: "#f0c0bf",
            },
            headerTintColor: "white",
          };
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={(options) => {
            return {
              title: "Accueil",
              headerTintColor: "white",
            };
          }} />
        <Stack.Screen
          name="Group"
          component={GroupScreen}
          options={(options) => {
            return {
              // headerLeft: null,
              title: "Accueil",
              headerTintColor: "white",
            };
          }} />
        <Stack.Screen name="ListMessage" component={ListMessagePrivateScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="ChatGroup" component={ChatGroupSreen} />
        <Stack.Screen name="ListUser" component={ListUserScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="GroupeCreate" component={GroupeCreate} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});


export default App;
