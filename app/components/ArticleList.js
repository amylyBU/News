import React, { Component } from 'react';
import { Article } from '../requests';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from './Header';

class ArticleList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  static navigationOptions = {
    title: "Yo check it"
  };

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

 renderItem = ({item}) => (
    <ListItem
      key={item.title}
      title={item.title}
      avatar={item.urlToImage}
      onPress={() => this.props.navigation.navigate("Details", { article: item })}
      />
  );

  pressed = (article) => {
    console.log("Article, yo", article);
    this.props.navigation.navigate("Details", { article: article });
  }

  componentDidMount() {
    Article.getArticles().then((articles) => {
      console.log(articles);
      this.setState({articles: articles});
    });
  }
}

export default ArticleList;
