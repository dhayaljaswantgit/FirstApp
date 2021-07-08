import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../utils/colors";

export class Button extends Component {
  render() {
    const { title = "Button", onPress = () => {} } = this.props;
    return (
      <TouchableOpacity style={styles.main} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    backgroundColor: COLORS.primary,
    padding: 10,
    marginVertical: 20,
  },
  text: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 17,
  },
});
