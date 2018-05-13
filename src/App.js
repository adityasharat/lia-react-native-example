/**
 * Lia React Native Example
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
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
      communityUrl: 'http://triumph.qa.lithium.com/',
      instanceId: 'qwerty1234567890',
      token: 'EcuSinBcUAoWKoVTZDvEboz14shQ3aDqIV5ZNAKHAUA='
    };
    this.state = {
      sdk: SDK.builder.build(credentials, {})
    };
  }

  getUserDetails = () => {
    try {
      this.state.sdk.client.user().then((response) => {
        this.setState({
          email: response.data.data.items[0].login
        });
      }).catch((response) => {
        ToastAndroid.show(`${response}`, ToastAndroid.SHORT);
      });
    } catch (e) {
      ToastAndroid.show(`aborted ${e}`, ToastAndroid.SHORT);
    }
  }

  goToBrowsePage = () => {
    ToastAndroid.show('Woohoo!', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>

        <View>
          <Text style={styles.welcome}>
            Welcome to your community!
          </Text>
          <Text style={styles.version}>
            SDK version: {this.state.sdk.version}
          </Text>
        </View>

        <TouchableOpacity>
          <Button title="Login"
                  onPress={this.getUserDetails}
                  disabled={this.state.email ? true : false}/>
        </TouchableOpacity>

        <Text style={styles.userDetails}>{ this.state.email ? `Logged in as ${this.state.email}` : '...' }</Text>

        <TouchableOpacity>
          <Button title="Browse"
                  onPress={this.goToBrowsePage}
                  disabled={this.state.email ? false : true}/>
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
    margin: 12,
    textAlign: 'center',
  },
  version: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 32,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 8,
    marginTop: 64,
  },
  userDetails: {
    fontSize: 20,
    textAlign: 'center',
    color: '#111111',
    marginBottom: 16,
    marginTop: 16,
  }
});
