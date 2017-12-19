import { StackNavigator } from 'react-navigation';
import ArticleList from './app/components/ArticleList';
import ArticleDetails from './app/components/ArticleDetails';

const Navigation = StackNavigator({
  Home: {
    screen: ArticleList
  },
  Details: {
    screen: ArticleDetails
  }
})

export default Navigation;
