/**
 * Lia React Native Example
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import * as SDK from 'lia-sdk-core';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    const credentials = {
      clientName: 'AndroidSdkDemoCross',
      clientId: '8p+/4twxtiR5760pfO1Ojvrgaa/0+fAD3tW/OpLlHQI=',
      clientSecret: 'Dw1K1tZPLPJhxLXgNPfuaXYzJ58wqMvExLXvrO+/+Hc=',
      tenantId: 'triumph',
      communityUrl: 'https://triumph.qa.lithium.com/',
      instanceId: 'qwerty1234567890',
      token: 'poJTIWxJRk/gVU0ZyFiyPOTznuSwnLnBLXY1lSAD87A='
    };
    this.state = {
      sdk: SDK.builder.build(credentials, {})
    };
  }

  getUserDetails = () => {
    ToastAndroid.show('start request', ToastAndroid.SHORT);
    try {
      this.state.sdk.client.user().then((success) => {
        ToastAndroid.show('success', ToastAndroid.SHORT);
      }).catch((error) => {
        ToastAndroid.show('error', ToastAndroid.SHORT);
      });
    } catch (e) {
      ToastAndroid.show('abort', ToastAndroid.SHORT);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to your community!
        </Text>
        <Text>
          SDK version: {this.state.sdk.version}
        </Text>
        <TouchableOpacity onPress={this.getUserDetails}>
          <Text>Get User Details</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 12,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 8,
    marginTop: 8
  },
});
