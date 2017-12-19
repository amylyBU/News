import { Text, View } from 'react-native';
import React, { Component } from 'react';

class ArticleDetails extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.article.title
  });

  render() {
    return <Text>Details</Text>
  }
}

export default ArticleDetails;
