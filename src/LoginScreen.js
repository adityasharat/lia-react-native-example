import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SdkManager from './manager/SdkManager';

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);
    this.state = {
      sdk: SdkManager.get()
    }
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    )
  }
}