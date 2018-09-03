import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from "react-native";
import PropTypes from "prop-types"

const { width, height } = Dimensions.get("window")
export default class ToDo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.text}</Text>
            </View>
          
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 300,
        backgroundColor: 'green',
        borderWidth:1
    }
});