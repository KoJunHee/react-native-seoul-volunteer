import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Category from "./Category"
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>어떤 봉사활동을{"\n"}찾고 계신가요?</Text>

                <Grid style={styles.grid}>
                    <Col>
                        <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '기술/기능' })}>
                            <Category title='기술,기능'></Category>
                        </Row>
                        <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '교육/학습' })}>
                            <Category title='교육,학습'> </Category>
                        </Row>
                        <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '상담/정보' })}>
                            <Category title='상담,정보'></Category>
                        </Row>
                    </Col>
                    <Col>
                        <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '노력/행정' })}>
                            <Category title='노력,행정'> </Category>
                        </Row>
                        <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '운영/지원' })}>
                            <Category title='운영,지원'></Category>
                        </Row>
                        <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '보건/의료' })}>
                            <Category title='보건, 의료'></Category>
                        </Row>
                    </Col>
                    <Col>
                        <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '문화/예술' })}>
                            <Category title='문화,예술'></Category>
                        </Row>
                        <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '교통/환경' })}>
                            <Category title='교통,환경'></Category>
                        </Row>
                        <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: 'test' })}>
                            <Category title='test'></Category>
                        </Row>
                    </Col>
                </Grid>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        marginTop: 40,
        fontSize: 30,
        marginLeft: 20
    },
    grid: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});