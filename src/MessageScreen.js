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
      let accepted = null;

      response.data.data.items.forEach((reply => {
        if (reply.is_solution) {
          accepted = reply;
        } else {
          replies.push(reply)
        }
      }));

      this.setState({
        message,
        replies,
        accepted
      })
    }).catch(this.error);
  }

  error (response) {
    ToastAndroid.show(`${response}`, ToastAndroid.SHORT);
  }

  render() {
    const message = this.state.message;
    const replies = this.state.replies;
    const accepted = this.state.accepted;

    if (!message) {
      return <Text>:(</Text>
    }

    return (
      <View style={styles.container}>
        <Message message={message} isMessage={true}/>
        { accepted &&
          <View style={styles.section}>
            <Text style={styles.accepted}>Accepted Solution</Text>
            <Message message={accepted} />
          </View>
        }
        {
          replies.length == 0 ?
              <Text style={styles.other}>No Replies</Text>
            :
              <View>
                <Text style={styles.other}>Other Replies</Text>
                {
                  replies.map(reply => {
                    return <Message key={reply.id} message={reply} shouldShowContent={false} />
                  })
                }
              </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    paddingTop: 8,
    paddingRight: 2,
    paddingLeft: 2,
    paddingBottom: 2,
    marginBottom: 4,
    marginTop: 8,
    backgroundColor: '#aacc99',
  },
  accepted: {
    fontSize: 14,
    paddingTop: 4,
    paddingLeft: 2,
    marginBottom: 4,
    color: '#558866',
    fontWeight: '800'
  },
  other: {
    padding: 4,
    marginTop: 4,
    fontSize: 14,
    color: '#323232',
    fontWeight: '800',
  }
});