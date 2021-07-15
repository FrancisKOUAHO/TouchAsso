import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

const GroupScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let user = props.route.params;

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.id}/groupes`)
      .then((response) => response.json())
      .then((json) => console.log(setData(json)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> :
        (<View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>{data.title}</Text>
            <Text style={{ fontSize: 14, color: "green", textAlign: "center", paddingBottom: 10 }}>Groupe message</Text>
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <View style={styles.listItem} onPress={() => props.navigation.navigate("ChatGroup", props)}>
                  <Image source={{ uri: "https://reactjs.org/logo-og.png" }}
                         style={{ width: 50, height: 50, borderRadius: 30 }} />
                  <View style={{ alignItems: "center", flex: 1 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.nom}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item.description}</Text>
                    <Text>{item.position}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("ChatGroup", props)}
                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={{ color: "red", fontSize: 30 }}>&rsaquo;</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
    </View>
  );
};

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
