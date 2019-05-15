import React from "react";
import { Text, StyleSheet } from "react-native";

function MainText(props) {
  return <Text style={styles.mainText}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  mainText: {
    color: "#BBB",
    backgroundColor: "transparent"
  }
});

export default MainText;
