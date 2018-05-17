import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function MessageRow(props) {

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.subject}>{props.message.subject}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#efefef',
    marginBottom: 4
  },
  subject: {
    fontSize: 16
  }
});