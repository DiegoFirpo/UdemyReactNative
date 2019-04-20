import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class InputAndButton extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = value => {
    this.setState({
      placeName: value
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Pepe"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
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
