import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


const ListUserScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:5000/me")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> :
        (<View>
            <Text style={{ fontSize: 14, color: "green", textAlign: "center", paddingBottom: 10 }}>Liste des
              membres:</Text>
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <View style={styles.square}>
                    <Text>{`n°:${item.id}`}</Text>
                    <Text>{`Prénom : ${item.prenom}`}</Text>
                    <Text>{`Nom: ${item.nom}`}</Text>
                    <Text>{`Rôle: ${item.type}`}</Text>
                  </View>
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
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#7cb48f",
    width: 100,
    height: 100,
    margin: 4,
  },
});

export default ListUserScreen;





