import _ from 'lodash';

const articlesBySource = (articles) => {
  const unique = _.uniqBy(articles, (article) => article.title);
  return _.groupBy(unique, (article) => article.source.name);
};

export { articlesBySource };
