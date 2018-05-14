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

  getUserDetails = () => {
    try {
      this.state.sdk.client.user().then((response) => {
        this.setState({
          email: response.data.data.items[0].login
        });
      }).catch(this.error);
    } catch (e) {
      ToastAndroid.show(`aborted ${e}`, ToastAndroid.SHORT);
    }
  }

  goToBrowsePage = () => {
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

        <View>

          {
            (this.state.categories || []).map(category => {
              return <Text key={category.id}>{category.title}</Text>
            })
          }

        </View>

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
