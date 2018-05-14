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

import SdkManager from './manager/SdkManager';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

export default class WelcomeScreen extends Component {

  static navigationOptions = {
    title: 'Welcome'
  };

  constructor(props) {
    super(props);
    this.state = {
      sdk: SdkManager.get()
    };
  }

  error (response) {
    ToastAndroid.show(`${response}`, ToastAndroid.SHORT);
  }

  login = () => {
    this.props.navigation.navigate('Login');
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
          <Button title="Login" onPress={this.login} />
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
