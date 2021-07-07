import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import STYLES from "../utils/styles";
import { initLogout } from "../store/actions";
import { Button } from "../components";

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={[STYLES.main, styles.main]}>
        <Text>This is My home page</Text>
        <Button title="Logout" onPress={() => this.props.initLogout()} />
      </SafeAreaView>
    );
  }
}

export default connect(null, { initLogout })(Home);

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignContent: "center",
    margin: 30,
  },
});
