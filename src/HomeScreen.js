import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as Url from 'url';

import SdkManager from './manager/SdkManager';

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
    this.sdk = SdkManager.get();
  }

  render() {
    return (
      <View style={styles.flex}>
        <Text>Welcome Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});