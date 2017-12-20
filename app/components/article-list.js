import _ from 'lodash';
import React, { Component } from 'react';
import { Article } from '../api/articles';
import {
  Platform,
  StyleSheet,
  SectionList,
  Text,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from './header';
import { articlesBySource } from '../queries/articles';
import SectionHeader from './section-header';

class ArticleList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articleGroups: []
    }
  }

  static navigationOptions = {
    title: "News"
  };

  render() {
    return (
      <SectionList
        keyExtractor={(item, index) => item.title}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        sections={this.sections(this.state.articleGroups)}
      />
    );
  }

  renderSectionHeader = ({section}) => (
    <SectionHeader title={section.title}/>
  );

 renderItem = ({item}) => (
    <ListItem
      key={item.title}
      title={item.title}
      avatar={item.urlToImage}
      onPress={() => this.props.navigation.navigate("Details", { article: item })}
      />
  );

  sections = (articleGroups) => {
    const mappingFunction = (articlesInGroup, source) => ({data: articlesInGroup, title: source});
    const mappedArticles = _.map(articleGroups, mappingFunction);
    return mappedArticles;
  }

  pressed = (article) => {
    this.props.navigation.navigate("Details", { article: article })
  }

  componentDidMount() {
    Article.getArticles().then((articles) => {
      articles = articlesBySource(articles);
      this.setState({articleGroups: articles});
    });
  }
}

export default ArticleList;
