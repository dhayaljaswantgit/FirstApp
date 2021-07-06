import axios from 'axios';
import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import STYLES from '../utils/styles';
import {initLogin} from '../store/actions/loginAction';

class Login extends Component {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
    isLoggedIn: false,
    hasError: false,
  };

  doLogin = () => {
    axios
      .post('https://reqres.in/api/login', this.state)
      .then(success => {
        this.setState({isLoggedIn: true, hasError: false});
      })
      .catch(error => {
        this.setState({isLoggedIn: false, hasError: true});
        console.log('Error => ', error);
      });
  };

  render() {
    const {email, password, isLoggedIn, hasError} = this.state;

    if (isLoggedIn) {
      return (
        <SafeAreaView style={[STYLES.main, styles.main]}>
          <Text>You are logged in!!</Text>
        </SafeAreaView>
      );
    }

    if (hasError) {
      return (
        <SafeAreaView style={[STYLES.main, styles.main]}>
          <Text>Opps, there is some error while login!!</Text>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={[STYLES.main, styles.main]}>
        <Text style={styles.logo}>Logo</Text>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={value => this.setState({email: value})}
        />
        <TextInput
          value={password}
          style={styles.input}
          secureTextEntry
          placeholder="Enter Password"
          onChangeText={value => this.setState({password: value})}
        />
        <Button
          title="Login"
          onPress={() => this.props.initLogin(this.state)}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loginReducer.loading,
  };
};

// export default Login;
export default connect(mapStateToProps, {initLogin})(Login);

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 30,
  },
  logo: {
    marginTop: -100,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    paddingVertical: 32,
    marginBottom: 50,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,.1)',
    padding: 10,
    fontSize: 20,
    marginVertical: 10,
  },
});
