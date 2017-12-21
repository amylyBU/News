import { Text, View, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import { ArticleAPI } from '../api/articles';

class ArticleDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.article.title
  });

  favorited = (item) =>  {
    ArticleAPI.saveArticle(item);
  }

  currentArticle() {
    return this.props.navigation.state.params.article;
  }

  render() {
    const article = this.currentArticle()
    const {description, urlToImage} = article;
    const { imageStyle, touchableStyles, touchableTextStyles} = styles;

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        {urlToImage ? <Image
        style={imageStyle}
        source={{uri: urlToImage}} /> : null}
        <TouchableOpacity style={touchableStyles} onPress={this.favorited(article)}>
          <Text style={touchableTextStyles}>Favorite me</Text>
        </TouchableOpacity>
        <Text>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    justifyContent: 'center',
    flex: 0.5
  },
  touchableStyles: {
    justifyContent: 'center',
    backgroundColor: '#a9a9a9',
    height: 40,
  },
  touchableTextStyles: {
    alignSelf: 'center'
  }
});

export default ArticleDetails;
