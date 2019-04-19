import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function InputAndButton(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="Pepe"
        value={props.placeName}
        onChangeText={props.placeNameChangedHandler}
      />
      <Button
        style={styles.placeButton}
        title="Add"
        onPress={props.placeSubmitHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    borderColor: "#666",
    padding: 5,
    borderWidth: 1,
    borderRadius: 6
  },
  placeButton: {
    width: "30%"
  }
});

export default InputAndButton;
