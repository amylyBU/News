import { AsyncStorage } from 'react-native';

const API_KEY = 'db9c40a9cec9481281a450ae6e18cba1';
const API_ENDPOINT_URL = `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${API_KEY}`;

const ArticleAPI = {
  getArticles: function() {
    return fetch(API_ENDPOINT_URL)
            .then((response) => response.json())
            .then((json) => json.articles)
  },
  getSavedArticles: function() {
    return AsyncStorage.getItem("savedArticles").then((response) => {
      console.log("Articles: ", response);
      return JSON.parse(response);
    });
  },
  saveArticle: function(article) {
    const json = JSON.stringify(article);
    AsyncStorage.mergeItem("savedArticles", json);
  }
};

export { ArticleAPI };
