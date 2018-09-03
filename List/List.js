import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Button } from 'react-native';
import aa from './aa'
import bb from './bb'
import cc from './cc'
import dd from './dd'
import ee from './ee'
import ff from './ff'
import gg from './gg'
import hh from './hh'
import ii from './ii'

const RootStack = createMaterialTopTabNavigator(
  {
    aa: {
      screen: aa,
    },
    bb: {
      screen: bb,
    },
    cc: {
      screen: cc,
    },
    dd: {
      screen: dd,
    },
    ee: {
      screen: ee,
    },
    ff: {
      screen: ff,
    },

    gg: {
      screen: gg,
    },

    hh: {
      screen: hh,
    },
    ii: {
      screen: ii,
    },
  },
  {
    tabBarOptions: {
      scrollEnabled: true
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
        onPress={() => navigation.navigate('Filter', { title: '기술/기능' })}
        title='filter'
        color='red'
      />
    ),
    headerBackTitle: null
  });
  render() {
    return <RootStack />;
  }
}