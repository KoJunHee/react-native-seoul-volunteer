import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Filter extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerBackTitle: null
      });
    render() {
        return (
            <View style={styles.container}>
                <Text>filter</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});