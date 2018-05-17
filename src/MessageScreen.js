import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

import SdkManager from './manager/SdkManager';

export default class MessageScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : 'Messages',
    }
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
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    padding: 12,
    color: '#171717'
  }
});