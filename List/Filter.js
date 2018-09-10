import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Filter extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerBackTitle: null
    });
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>

                    <View style={styles.frame}>
                        <Text>세부 분야</Text>

                        <Grid style={styles.grid}>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='컴퓨터'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='도배'> </Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='벽화그리기'> </Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='기능전수'></Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='이미용'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='전기'></Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '문화/예술' })}>
                                    <Button title='집수리'></Button>
                                </Row>
                                <Row style={styles.row} onPress={() => this.props.navigation.navigate('List', { title: '교통/환경' })}>
                                    <Button title='가스점검'></Button>
                                </Row>
                            </Col>
                        </Grid>
                    </View>



                    <View style={styles.frame}>
                        <Text>활동지역</Text>

                        <Grid style={styles.grid}>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='서울전체'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='강서구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='금천구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='동작구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='성동구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='영등포구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='중구'></Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='강남구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='관악구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='노원구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='마포구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='성북구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='용산구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='중랑구'></Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='강동구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='광진구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='도봉구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='서대문구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='송파구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='은평구'></Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='강북구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='구로구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='동대문구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='서초구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='양천구'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='종로구'></Button>
                                </Row>
                            </Col>
                        </Grid>
                    </View>




                    <View style={styles.frame}>
                        <Text>활동주기</Text>

                        <Grid style={styles.grid}>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='정기'></Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='비정기'></Button>
                                </Row>
                            </Col>
                        </Grid>
                    </View>



                    <View style={styles.frame}>
                        <Text>활동대상</Text>

                        <Grid style={styles.grid}>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='전체'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='여성'></Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='아동/청소년'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='다문화가정'></Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='장애인'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='환경'></Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={styles.row} >
                                    <Button title='노인'></Button>
                                </Row>
                                <Row style={styles.row} >
                                    <Button title='쪽방촌'></Button>
                                </Row>
                            </Col>
                        </Grid>
                    </View>

                </ScrollView>
                <View style={styles.fixedBottom}>
                    <Button title="선택완료" onPress={() => this.props.navigation.navigate('List')}></Button>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame: {
        flex: 1,
        margin: 10
        
    },
    grid: {
        marginTop: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    row: {
        // alignItems: 'center',
        // justifyContent: 'center',
    }
});