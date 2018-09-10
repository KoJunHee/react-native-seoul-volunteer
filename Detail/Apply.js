import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Button } from "react-native";
import PropTypes from "prop-types"


const { width, height } = Dimensions.get("window")
export default class Apply extends Component {
    render() {


        return (
            <View style={styles.container}>


                <View style={styles.content}>
                    <View style={styles.one}>
                        <Text>이름</Text>
                        <TextInput backgroundColor='gray'></TextInput>
                    </View>

                    <View style={styles.one}>
                        <Text>연락처</Text>
                        <TextInput backgroundColor='gray'></TextInput>
                    </View>

                    <View style={styles.one}>
                        <Text>이메일</Text>
                        <TextInput backgroundColor='gray'></TextInput>
                    </View>

                </View>

                <View style={styles.bottom}>
                    <Button  title='제출하기' onPress={() => this.props.navigation.navigate('Completed')}></Button>
                </View>


            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: 'rgba(250, 250, 250, 0.97)',
        flex: 1
    },
    content: {
        backgroundColor: 'white',
        marginTop: 10,
        height: height-500
    },
    one: {
        margin: 30,
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