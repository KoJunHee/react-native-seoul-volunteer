import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import { Button } from 'react-native';
import Home from './Home/Home'
import List from './List/List'
import Filter from './List/Filter'
import Detail from './Detail/Detail'
import Apply from './Detail/Apply'
import Completed from './Detail/Completed'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTransparent: true
      },
    },
    List: {
      screen: List,
      navigationOptions: {
        headerStyle: {
          // headerTransparent: true,
          // headerBackground: 'black'
        },
      },
    },
    Detail: {
      screen: Detail
    },
    Apply: {
      screen: Apply,
      navigationOptions: {
        title: '봉사활동 신청',
        headerTitleStyle: {
          textAlign: 'center',
          alignSelf: 'center'
        },
      }
    },
    Completed : {
      screen: Completed,
      navigationOptions: {
        header: null
      },
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
