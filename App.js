import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Home'
import List from './List'

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
    List: List
  },
  {
    initialRouteName: 'Home',

  }
);

export default class App extends React.Component {
  state = {
    navigationTitle: "",
  };

  render() {
    return <RootStack />;
  }

  _setNavigationTitle = title => {
    this.setState({
      navigationTitle: title
    });
  };

}
