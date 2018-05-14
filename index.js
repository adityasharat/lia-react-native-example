import React, { Component } from 'react';

import { YellowBox, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from './src/WelcomeScreen';

// TODO: remove this when react navigation fixes this issue!
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  }
}, {
  initialRouteName: 'Welcome',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#733881',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent('LiaReactNativeExample', () => App);
