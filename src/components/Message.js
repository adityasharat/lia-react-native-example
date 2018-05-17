import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import * as CommonUtils from '../utils/CommonUtils';

export default function Message(props) {
  const message = props.message;
  const kudos = message && message.kudos.sum.weight;
  const isMessage = props.isMessage;

  if (!message) {
    return <Text>:(</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.author}>
          <Image style={isMessage ? styles.messageAuthorAvatar : styles.replyAuthorAvatar}
                 source={{uri:message.author.avatar.profile}}/>
          <Text style={styles.authorName}>{message.author.login}</Text>
        </View>
        { isMessage && message.conversation.solved &&  <Text style={styles.resolved}>solved</Text> }
      </View>
      <View style={styles.main}>

      </View>
      <View style={styles.meta}>
        <Text style={styles.kudos}>{`${kudos} kudo${kudos === 1 ? '' : 's'}`}</Text>
        <Text style={styles.timestamp}>{CommonUtils.timeSince(new Date(message.post_time))}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
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
  main: {
    marginBottom: 8
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