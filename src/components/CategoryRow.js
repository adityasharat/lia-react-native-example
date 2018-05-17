import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function CategoryRow(props) {

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.title}>{props.category.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    padding: 12,
    backgroundColor: '#efefef'
  }
});