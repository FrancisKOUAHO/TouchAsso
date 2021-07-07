import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Overlay } from "react-native-elements";

const SurveyScreen = () => {

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Sondage" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.flex}>
          <Button title="Reponse n°1" />
          <Button title="Reponse n°2" />
          <Button title="Reponse n°3" />
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    flexWrap: "wrap",
    padding: "1rem",
  },
});

export default SurveyScreen;
