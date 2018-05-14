import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  ToastAndroid
} from 'react-native';

import * as Url from 'url';

import SdkManager from './manager/SdkManager';

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);

    const sdk = SdkManager.get();
    const accessUrl = sdk.credentials.authAccessUrl;
    const redirectUrl = sdk.credentials.redirectUrl;

    this.state = {
      accessUrl,
      redirectUrl
    }
  }

  login(code) {
    const sdk = SdkManager.get();
    sdk.login(code).then(() => {
      this.goToHomePage();
    }).catch(error => {
      ToastAndroid.show(`${error}`, ToastAndroid.LONG);
    })
  }

  goToHomePage() {
    try {
      SdkManager.get().client.user().then((response) => {
        ToastAndroid.show(`Logged in as ${response.data.data.items[0].login}`, ToastAndroid.SHORT);
      }).catch(this.error);
    } catch (e) {
      ToastAndroid.show(`aborted ${e}`, ToastAndroid.SHORT);
    }
  }

  interceptor(navigator) {
    if (navigator.url.indexOf('code=') === -1) {
      return true;
    } else {
        if (this.wvLogin) {
          this.wvLogin.stopLoading();
        }

        let url = Url.parse(navigator.url, true);
        this.login(url.query.code);

        return false;
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        <WebView ref={(v) => this.wvLogin = v}
                 source={{ uri: this.state.accessUrl }}
                 javaScriptEnabled={true}
                 domStorageEnabled={true}
                 startInLoadingState={true}
                 scalesPageToFit={true}
                 onShouldStartLoadWithRequest={this.interceptor.bind(this)} //for iOS
                 onNavigationStateChange ={this.interceptor.bind(this)} //for Android
                 style={styles.flex} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});