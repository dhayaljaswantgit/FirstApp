import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import Loader from "./src/components/Loader";
import Auth from "./src/screens/Auth";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
        <Loader />
      </Provider>
    );
  }
}
