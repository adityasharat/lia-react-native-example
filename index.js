import React, { Component } from 'react';
import { YellowBox, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SdkManager from './src/manager/SdkManager';

import WelcomeScreen from './src/WelcomeScreen';
import LoginScreen from './src/LoginScreen';

// TODO: remove this when react navigation fixes this issue!
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Login: {
    screen: LoginScreen
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

  constructor(props) {
    super(props);

    const credentials = {
      clientName: 'AndroidSdkDemoCross',
      clientId: '8p+/4twxtiR5760pfO1Ojvrgaa/0+fAD3tW/OpLlHQI=',
      clientSecret: 'Dw1K1tZPLPJhxLXgNPfuaXYzJ58wqMvExLXvrO+/+Hc=',
      tenantId: 'triumph',
      communityUrl: 'http://triumph.qa.lithium.com/',
      instanceId: 'qwerty1234567890'
    };

    SdkManager.initialize(credentials, {});
  }

  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent('LiaReactNativeExample', () => App);
