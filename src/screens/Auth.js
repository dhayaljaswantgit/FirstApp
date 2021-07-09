import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Loader from '../components/Loader';
import {setUserData} from '../store/actions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SubPage from './SubPage';
import ListPage from './ListPage';
import {Button} from '../components';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
class Auth extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    AsyncStorage.getItem('userData')
      .then(data => {
        this.setState({loading: false});
        if (data) {
          this.props.setUserData(JSON.parse(data));
        }
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render() {
    const {loading} = this.state;
    const {user} = this.props;

    if (loading) {
      return <Loader loading={loading} />;
    }

    return (
      <NavigationContainer>
        {user ? (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen name="SubPage" component={SubPage} />
            <Stack.Screen name="ListPage" component={ListPage} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );

    // if (loading) {
    //   return <Loader loading={loading} />;
    // }
    // if (user) return <Home />;
    // return <Login />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, {setUserData})(Auth);

function HomeScreen({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MenuPage1" component={MenuPage1} />
      <Drawer.Screen name="MenuPage2" component={MenuPage2} />
    </Drawer.Navigator>
  );
}

function MenuPage1({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MenuPage1</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function MenuPage2({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MenuPage2</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
