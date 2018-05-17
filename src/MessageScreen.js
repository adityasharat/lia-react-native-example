import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

import Message from './components/Message';

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
    this.sdk.client.topic({
      topic: this.props.navigation.getParam('id', null)
    }).then(response => {
      const message = response.data.data.items.shift();
      const replies = [];

      response.data.data.items.forEach((reply => replies.push(reply)));

      this.setState({
        message,
        replies
      })
    }).catch(this.error);
  }

  error (response) {
    ToastAndroid.show(`${response}`, ToastAndroid.SHORT);
  }

  render() {
    const message = this.state.message;
    const replies = this.state.replies;

    if (!message) {
      return <Text>:(</Text>
    }

    return (
      <View style={styles.container}>
          <Message message={message} />
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