import React, { Component } from "react";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Loader from "../components/Loader";
import { setUserData } from "../store/actions";

class Auth extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    AsyncStorage.getItem("userData")
      .then((data) => {
        this.setState({ loading: false });
        if (data) {
          this.props.setUserData(JSON.parse(data));
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading } = this.state;
    const { user } = this.props;

    if (loading) {
      return <Loader loading={loading} />;
    }
    if (user) return <Home />;
    return <Login />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, { setUserData })(Auth);
