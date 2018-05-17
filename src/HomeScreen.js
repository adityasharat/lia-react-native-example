import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

import CategoryRow from './components/CategoryRow';

import SdkManager from './manager/SdkManager';

export default class HomeScreen extends Component {

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
      //this.sdk.client.categories(), // TODO: we don't need this right now!
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

  error (response) {
    ToastAndroid.show(`${response}`, ToastAndroid.SHORT);
  }

  browse() {
    this.props.navigation.navigate('MessageBrowser');
  }

  render() {
    return (
      <View style={styles.flex}>
        <Text style={styles.title}>Articles</Text>
        <View style={styles.container}>
          {
            (this.state.categories || []).map(category => {
              return <CategoryRow key={category.id} category={category} sdk={this.sdk} onPress={this.browse.bind(this)}/>
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