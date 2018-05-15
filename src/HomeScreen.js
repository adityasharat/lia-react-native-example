import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as Url from 'url';

import CategoryRow from './components/CategoryRow';

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
    Promise.all([
      this.sdk.client.categories(),
      this.sdk.client.boards()
    ]).then(responses => {
      const items = [];
      responses.forEach((response) => {
        response.data.data.items.forEach((item => items.push(item)))
      });
      this.setState({
        categories: items
      })
    }).catch(this.error);
  }

  render() {
    return (
      <View style={styles.flex}>
        <Text style={styles.title}>Articles</Text>
        <View style={styles.container}>
          {
            (this.state.categories || []).map(category => {
              return <CategoryRow key={category.id} category={category} sdk={this.sdk}/>
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