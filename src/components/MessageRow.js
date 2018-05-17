import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import * as CommonUtils from '../utils/CommonUtils';

export default function MessageRow(props) {
  const message = props.message;
  const kudos = message.kudos.sum.weight;

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.main}>
        <Text style={styles.subject} numberOfLines={1}>{message.subject}</Text>
        <View style={styles.meta}>
          <Text style={styles.timestamp}>{CommonUtils.timeSince(new Date(message.post_time))}</Text>
          <Text style={styles.kudos}>{`${kudos} kudo${kudos === 1 ? '' : 's'}`}</Text>
        </View>
      </View>
      { message.conversation.solved &&  <Text style={styles.resolved}>solved</Text> }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 4
  },
  main: {
    flex: 1
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 16,
    marginBottom: 4
  },
  meta: {
    flexDirection: 'row',
    marginBottom: 4
  },
  timestamp: {
    color: '#aeaeae',
    marginRight: 16
  },
  kudos: {
    fontWeight: '800',
    color: '#aa8855'
  },
  resolved: {
    flex: 0
  }
});