import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function CategoryRow(props) {

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.title} numberOfLines={1}>{props.category.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#efefef',
    marginBottom: 4
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 16,
    marginBottom: 4
  }
});