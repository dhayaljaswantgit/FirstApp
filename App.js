import React, {Component} from 'react';
import Login from './src/screens/Login';
import {Provider} from 'react-redux';
import store from './src/store';
import Loader from './src/components/Loader';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
        <Loader />
      </Provider>
    );
  }
}
