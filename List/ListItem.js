import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from "react-native";
import PropTypes from "prop-types"

const { width, height } = Dimensions.get("window")
export default class ListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                    <Text>[{this.props.text}]</Text>
                    <Text style={styles.title}>지역 아동 센터 초등학생 코딩 교육</Text>

                    <View style={styles.lineStyle} />

                    <View style={styles.content}>
                        <View style={styles.place}>
                            <Text style={styles.contentTitle}>봉사장소</Text>
                            <Text style={styles.contentContent}>동대문구 인근</Text>
                        </View>
                        <View style={styles.time}>
                            <Text style={styles.contentTitle}>봉사기간</Text>
                            <Text style={styles.contentContent}>2018-09-01 ~ 2019-03-31</Text>
                        </View>
                        <View style={styles.period}>
                            <Text style={styles.contentTitle}>봉사주기</Text>
                            <Text style={styles.contentContent}>매주 주1회</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: width,
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        width: width - 20,
        borderRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: "rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 3
            }
        })
    },
    title: {
        marginTop: 10
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'gray',
        marginTop: 10,
    },
    content: {
        marginTop: 10
    },
    place: {
        flexDirection: 'row',
    },
    time: {
        flexDirection: 'row',
        marginTop: 10
    },
    period: {
        flexDirection: 'row',
        marginTop: 10
    },
    contentTitle: {
        fontSize: 15
    },
    contentContent: {
        marginLeft: 10,
        fontSize: 15
    }

});