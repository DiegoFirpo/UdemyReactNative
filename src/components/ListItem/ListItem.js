import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function ListItem(props) {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.ListItem}>
        <Image resizeMode="contain" style={styles.placeImage} source={props.placeImage} />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ListItem: {
    width: "100%",
    padding: 15,
    backgroundColor: "#EEE",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 50,
    width: 50
  }
});

export default ListItem;
