const API_KEY = 'db9c40a9cec9481281a450ae6e18cba1';
const API_ENDPOINT_URL = `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${API_KEY}`;
// article class

const Article = {
  getArticles: function(response) {
    return fetch(API_ENDPOINT_URL).then((response) => response.json());

  }
};

export { Article };
