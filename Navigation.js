import { StackNavigator } from 'react-navigation';
import ArticleList from './app/components/article-list';
import ArticleDetails from './app/components/article-details';

const Navigation = StackNavigator({
  Home: {
    screen: ArticleList
  },
  Details: {
    screen: ArticleDetails
  }
})

export default Navigation;
