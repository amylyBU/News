import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import React from 'react';
import ArticleList from './app/components/article-list';
import ArticleDetails from './app/components/article-details';

const ArticleNavigator = StackNavigator({
  Home: {
    screen: ArticleList
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
    screen: ArticleNavigator,
    navigationOptions: {
      tabBarLabel: "Saved",
      tabBarIcon: ({ tintColor }) => (
        <Icon name='rowing' color={tintColor} />
      )
    }
  }
})

export default Navigation;
