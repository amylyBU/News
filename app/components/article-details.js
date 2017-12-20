import { Text, View, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class ArticleDetails extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.article.title
  });

  render() {
    const {article} = this.props.navigation.state.params;
    const {description} = article;
    const {urlToImage} = article;
    console.log("url to image", urlToImage);
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        {urlToImage ? <Image
        style={styles.imageStyle}
        source={{uri: urlToImage}} /> : null}
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
