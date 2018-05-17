import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  FlatList
} from 'react-native';

import MessageRow from './components/MessageRow';

import SdkManager from './manager/SdkManager';

export default class MessageBrowserScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : 'Messages',
    }
  };

  constructor(props) {
    super(props);
    this.sdk = SdkManager.get();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    Promise.all([
      this.sdk.client.messages({
        board: this.props.navigation.getParam('id', null)
      })
    ]).then(responses => {
      const messages = [];
      responses.forEach((response) => {
        response.data.data.items.forEach((item => messages.push(item)))
      });
      this.setState({
        messages
      })
    }).catch(this.error);
  }

  error (response) {
    ToastAndroid.show(`${response}`, ToastAndroid.SHORT);
  }

  read (message) {
    this.props.navigation.navigate('Message', {
      id: message.id,
      title: message.subject
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.messages}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                      return <MessageRow message={item}
                                          onPress={() => this.read(item)} />
                    }
                  }/>
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