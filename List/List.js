import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Button } from 'react-native';
import navigateScreen01 from './navigateScreen01'
import navigateScreen02 from './navigateScreen02'
import navigateScreen03 from './navigateScreen03'
import navigateScreen04 from './navigateScreen04'
import navigateScreen05 from './navigateScreen05'
import navigateScreen06 from './navigateScreen06'
import navigateScreen07 from './navigateScreen07'
import navigateScreen08 from './navigateScreen08'
import navigateScreen09 from './navigateScreen09'

const RootStack = createMaterialTopTabNavigator(
  {
    navigateScreen01: {
      screen: navigateScreen01
    },
    navigateScreen02: {
      screen: navigateScreen02,
    },
    navigateScreen03: {
      screen: navigateScreen03,
    },
    navigateScreen06: {
      screen: navigateScreen06,
    },
    navigateScreen05: {
      screen: navigateScreen05,
    },
    navigateScreen04: {
      screen: navigateScreen04,
    },

    navigateScreen07: {
      screen: navigateScreen07,
    },

    navigateScreen08: {
      screen: navigateScreen08,
    },
    navigateScreen09: {
      screen: navigateScreen09,
    },
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      style: {
        backgroundColor: 'white',
      },
      labelStyle: {
        size: 12,
        color: 'black'
      },
    }
  }
);


export default class List extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'List',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center'
    },
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Filter')}
        title='filter'
        color='red'
      />
    ),
    headerBackTitle: null,
  });
  render() {
    return <RootStack screenProps={this.props.navigation} />;

  }
}