/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Article } from './app/requests';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  render() {
    console.log("state", this.state);

    return (
      <FlatList
        data={this.state.articles}
        keyExtractor={(item, index) => item.title}
        renderItem={this.renderItem}
      />
    );
  }

/*
{
  ({item}) =>
  <Text>{item.title}</Text>
}*/

 renderItem = ({item}) => (
    <ListItem
      key={item.title}
      title={item.title}
      avatar={item.urlToImage}
      />
  );

  componentDidMount() {
    Article.getArticles().then((response) => {
      console.log(response);
      this.setState({articles: response.articles});
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
