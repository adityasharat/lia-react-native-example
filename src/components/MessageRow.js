import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function MessageRow(props) {

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.subject}>{props.message.subject}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subject: {
    fontSize: 16,
    padding: 12,
    backgroundColor: '#efefef'
  }
});