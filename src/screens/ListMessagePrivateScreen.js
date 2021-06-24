import React, { useRef } from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { warning } from "react-native-gifted-chat/lib/utils";
import MessageScreen from "./MessageScreen";

const DATA = Array.from({ length: 8 }, (v, i) => `Message ° ${i}`);

const myKeyExtractor = (item) => {
  return item.id
}

const ListMessagePrivateScreen = props => {
  const myRef = useRef(null);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('Message');
        }}
      >
        <FlatList
          onPress={()=> console.log('press')}
          ref={myRef}
          getItemLayout={(data, index) => ({
            length: DATA.length,
            offset: DATA.length * index,
            index,
          })}
          data={DATA}
          renderItem={(itemData) => {
            return (
              <View style={styles.listItem} onClick={()=> console.log('press')}>
                <Text style={styles.text}>{itemData.item}</Text>
              </View>
            );
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 0,
  },
  listItem: {
    backgroundColor: '#a5d8dc',
    borderWidth: 1,
    borderColor: '#333',
    padding: 25,
    margin: 3
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListMessagePrivateScreen;




