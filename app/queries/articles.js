import _ from 'lodash';

const articlesBySource = (articles) => {
    return _.groupBy(articles, (article) => article.source.name);
};

export { articlesBySource };
