import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Button } from "react-native";



const { width, height } = Dimensions.get("window")
export default class Completed extends Component {
    render() {


        return (
            <View style={styles.container}>
                <Text>지원을 완료하였습니다.</Text>
                <View style={styles.bottom}>
                    <Button title='확인' onPress={() => this.props.navigation.navigate('List')}></Button>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        backgroundColor: 'white',
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }

});