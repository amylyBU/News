import _ from 'lodash';
import React, { Component } from 'react';
import { ArticleAPI } from '../api/articles';
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

const DEFAULT_AVATAR_URL = 'https://image.flaticon.com/teams/slug/freepik.jpg';
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
      avatar={this.articleAvatar(item)}
      onPress={() => this.props.navigation.navigate("Details", { article: item })}
      />
  );

  articleAvatar = ({urlToImage}) => {
    return urlToImage != null ? urlToImage : DEFAULT_AVATAR_URL;
  };

  sections = (articleGroups) => {
    const mappingFunction = (articlesInGroup, source) => ({data: articlesInGroup, title: source});
    const mappedArticles = _.map(articleGroups, mappingFunction);
    return mappedArticles;
  }

  pressed = (article) => {
    this.props.navigation.navigate("Details", { article: article })
  }

  componentDidMount() {
    ArticleAPI.getArticles().then((articles) => {
      articles = articlesBySource(articles);
      this.setState({articleGroups: articles});
    });
  }
}

export default ArticleList;
