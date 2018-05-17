import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  WebView
} from 'react-native';

import * as CommonUtils from '../utils/CommonUtils';
import * as MessageUtils from '../utils/MessageUtils';

export default class Message extends Component {

  constructor(props){
    super(props);
    this.state = {
      realContentHeight: 100,
      counter: 0
    }
  }

  handleNavigationChange(navState) {
    if (navState && navState.title) {
      const realContentHeight = parseInt(navState.title, 10) || 0; // turn NaN to 0
      this.setState({realContentHeight});
    }
  }

  render() {
    const props = this.props;
    const message = props.message;
    const kudos = message && message.kudos.sum.weight;
    const body = message && MessageUtils.wrapInHtml(message.body).replace(/http:/ig, 'https:');
    const isMessage = props.isMessage;
    const shouldShowContent = typeof props.shouldShowContent === 'boolean' ? props.shouldShowContent : true;

    const { realContentHeight } = this.state;

    if (!message) {
      return <Text>:(</Text>
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.author}>
            <Image style={isMessage ? styles.messageAuthorAvatar : styles.replyAuthorAvatar}
                  source={{uri:message.author.avatar.profile}}/>
            <Text style={isMessage ? styles.authorName : styles.replyAuthorName}>{message.author.login}</Text>
          </View>
          { isMessage && message.conversation.solved &&  <Text style={styles.resolved}>solved</Text> }
        </View>
        <View style={{height: Math.max(realContentHeight, 50)}}>
          <WebView ref={(v) => this.wvContent = v}
                      scrollEnabled={false}
                      javaScriptEnabled={true}
                      domStorageEnabled={true}
                      source={{ html: body }}
                      style={{ flex: 1 }}
                      onNavigationStateChange={(data) => {
                        this.handleNavigationChange(data);
                      }}/>
        </View>
        <View style={styles.meta}>
          <Text style={styles.kudos}>{`${kudos} kudo${kudos === 1 ? '' : 's'}`}</Text>
          <Text style={styles.timestamp}>{CommonUtils.timeSince(new Date(message.post_time))}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    marginTop: 8
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  author: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  replyAuthorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16
  },
  messageAuthorAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16
  },
  authorName: {
    fontWeight: '800',
    fontSize: 18,
  },
  replyAuthorName: {
    fontWeight: '600',
    fontSize: 14,
  },
  meta: {
    flexDirection: 'row',
    marginBottom: 4
  },
  timestamp: {
    color: '#aeaeae',
  },
  kudos: {
    fontWeight: '800',
    color: '#aa8855',
    marginRight: 16
  },
  resolved: {
    flex: 0
  }
});