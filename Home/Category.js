import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types"

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    }
  }

  static PropTypes = {
    title: PropTypes.string.isRequired,
  }

  state = {
    title: ''
  }

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white'
  }

});
