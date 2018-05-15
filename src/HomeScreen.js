import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as Url from 'url';

import SdkManager from './manager/SdkManager';

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
    this.sdk = SdkManager.get();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.sdk.client.categories().then((response) => {
      const categories = response.data.data.items;

      this.setState({
        categories
      });
    }).catch(this.error);
  }

  render() {
    return (
      <View style={styles.flex}>
        <Text style={styles.title}>Articles</Text>
        <View style={styles.container}>
          {
            (this.state.categories || []).map(category => {
              return <Text key={category.id}>{category.title}</Text>
            })
           }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    padding: 12,
    color: '#171717'
  }
});