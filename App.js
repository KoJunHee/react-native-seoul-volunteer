import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import { Button } from 'react-native';
import Home from './Home/Home'
import List from './List/List'
import Filter from './List/Filter'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'white',
        },
      },
    },
    List: {
      screen: List,
    },
    Filter: {
      screen: Filter
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }

}
