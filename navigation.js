import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';
import React from 'react';
import ArticleList from './app/components/article-list';
import ArticleDetails from './app/components/article-details';
import SavedArticleList from './app/components/saved-article-list';

const ArticleNavigator = StackNavigator({
  Home: {
    screen: ArticleList
  },
  Details: {
    screen: ArticleDetails
  }
})

const SavedArticleNavigator = StackNavigator({
  Saved: {
    screen: SavedArticleList
  },
  Details: {
    screen: ArticleDetails
  }
})

const Navigation = TabNavigator({
  TabItem1: {
    screen: ArticleNavigator,
    navigationOptions: {
      tabBarLabel: "Explore",
      tabBarIcon: ({ tintColor }) => (
        <Icon name='search' color={tintColor} />
      )
    }
  },
  TabItem2: {
    screen: SavedArticleNavigator,
    navigationOptions: {
      tabBarLabel: "Saved",
      tabBarIcon: ({ tintColor }) => (
        <Icon name='rowing' color={tintColor} />
      )
    }
  }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
  });

export default Navigation;
