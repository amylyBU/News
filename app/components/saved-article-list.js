import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ArticleAPI } from '../api/articles';

class SavedArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedArticles: []
    }
  }

  render() {
    console.log("saved articles:", this.state.savedArticles);

    return (
      <FlatList
        data={[this.state.savedArticles]}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    )
  }

  componentDidMount() {
    ArticleAPI.getSavedArticles().then((articles) => {
      console.log("Hey we got hurr", articles);
      this.setState({savedArticles: articles});
    });
  }
}

export default SavedArticleList;
