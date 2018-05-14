import React, { Component } from 'react';

import { YellowBox, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './src/LoginScreen';

// TODO: remove this when react navigation fixes this issue!
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
});

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent('LiaReactNativeExample', () => App);
