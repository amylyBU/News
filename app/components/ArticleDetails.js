import { Text, View, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class ArticleDetails extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.article.title
  });

  render() {
    const {state} = this.props.navigation;
    const {article} = state.params;
    console.log("article: ", article);
    const {description} = article;
    const {urlToImage} = article;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Image
        style={styles.imageStyle}
        source={{uri: urlToImage}} />
        <Text>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    justifyContent: 'center',
    flex: 0.5
  }
});

export default ArticleDetails;
