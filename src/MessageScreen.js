import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

import SdkManager from './manager/SdkManager';

export default class MessageScreen extends Component {

  static navigationOptions = {
    title: 'Message'
  };

  constructor(props) {
    super(props);
    this.sdk = SdkManager.get();
    this.state = {};
  }

  componentDidMount() {

  }

  error (response) {
    ToastAndroid.show(`${response}`, ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.flex}>
        <Text style={styles.title}>Message</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    padding: 12,
    color: '#171717'
  }
});