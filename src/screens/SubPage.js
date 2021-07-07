import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import STYLES from "../utils/styles";

export default class SubPage extends Component {
  render() {
    return (
      <SafeAreaView style={[STYLES.main, styles.main]}>
        <Text>This is Sub page</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignContent: "center",
    margin: 30,
  },
});
