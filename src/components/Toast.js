import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import colors from "../utils/colors";
import { TOAST_TYPE } from "../utils/constants";
import { hideToast } from "../store/actions";

class Toast extends Component {
  render() {
    const { showing = false, message = "", type = "", hideToast } = this.props;

    if (!showing || !message) {
      return null;
    }

    setTimeout(() => {
      hideToast();
    }, 3000);

    let bgColor = "";
    switch (type) {
      case TOAST_TYPE.SUCCESS:
        bgColor = colors.success;
        break;
      case TOAST_TYPE.ERROR:
        bgColor = colors.error;
        break;
      default:
        bgColor = colors.black;
        break;
    }

    return (
      <SafeAreaView style={styles.main}>
        <View style={[styles.toastBg, { backgroundColor: bgColor }]}>
          <Text style={styles.toastText}>{message}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  showing: state.toastReducer.showing,
  message: state.toastReducer.message,
  type: state.toastReducer.type,
});

export default connect(mapStateToProps, { hideToast })(Toast);

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 111,
  },
  toastBg: {
    backgroundColor: colors.black,
    padding: 15,
  },
  toastText: {
    fontSize: 18,
    color: colors.white,
  },
});
