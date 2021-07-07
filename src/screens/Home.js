import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import STYLES from "../utils/styles";
import { initLogout } from "../store/actions";
import { Button } from "../components";
import { Header } from "../components/Header";

class Home extends Component {
  render() {
    return (
      <>
        <Header title="Home" navigation={this.props.navigation} showBellIcon />

        <SafeAreaView style={[STYLES.main, styles.main]}>
          <Text>This is My home page</Text>
          <Button title="Logout" onPress={() => this.props.initLogout()} />
          <Button
            title="GO TO SubPage"
            onPress={() => this.props.navigation.navigate("SubPage")}
          />
        </SafeAreaView>
      </>
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
