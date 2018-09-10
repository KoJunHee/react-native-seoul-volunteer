import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Button } from 'react-native';
import call from 'react-native-phone-call'

const { width, height } = Dimensions.get("window")
export default class Detail extends React.Component {
    render() {
        const args = {
            number: '9093900003', // String value with the number to call
            prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
        }

        return (
            <View style={styles.container} >
                <ScrollView>

                    <View style={styles.top}>
                        <Text style={styles.topPlace}>[동대문구]</Text>
                        <Text style={styles.topTitle}>지역아동센터 초등학생 코딩교육</Text>
                        <View style={styles.topBottom}>
                            <Text style={styles.topBottomDday}>D-3</Text>
                            <Text style={styles.topBottomDate}>2018.09.22까지</Text>
                        </View>
                        <View style={styles.seperateLine}></View>
                        <Text style={styles.contentTitle}>봉사내용</Text>
                        <Text style={styles.content}>‘미래를 여는 코딩교실’ 자원봉사자 모집

    미래를 여는 코딩교실은 사교육을 다니는 일반 친구들에 비해 소외계층 아이들은 코딩교육에 대해 접할 기회가
    없기 때문에 균등한 기회를 제공하기 위해 ‘미래를 여는
    코딩교실’을 진행하게 되었습니다.

    활동시간 : 2018년 9월 01일(일)~2019년03월 31일(일) 주 1회 요일/시간 협의
    활동내용 : 코딩교육
모집인원 : 대학생 이상 자원봉사자 10명</Text>

                    </View>

                    <View style={styles.seperateBackground}></View>

                    <View style={styles.middleTop}>
                        <Text style={styles.contentTitle}>모집 내용</Text>
                        <View style={styles.rows}>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>봉사장소</Text>
                                <Text style={styles.rowContent}>동대문구</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>봉사기간</Text>
                                <Text style={styles.rowContent}>2018-09-01 ~ 2019-03-31</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>봉사주기</Text>
                                <Text style={styles.rowContent}>매주 주 1회</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>봉사대상</Text>
                                <Text style={styles.rowContent}>초딩</Text>
                            </View>
                        </View>
                        <View style={styles.seperateLine}></View>
                        <View style={styles.rows}>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>요청인원</Text>
                                <Text style={styles.rowContent}>10명</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>봉사시간</Text>
                                <Text style={styles.rowContent}>1~2시간 내외</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>모집대상</Text>
                                <Text style={styles.rowContent}>대학생</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.seperateBackground}></View>


                    <View style={styles.middleBottom}>
                        <Text style={styles.contentTitle}>지원자격조건</Text>
                        <View style={styles.rows}>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>봉사자연령</Text>
                                <Text style={styles.rowContent}>-</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>봉사자 성별</Text>
                                <Text style={styles.rowContent}>공통</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>자격요건</Text>
                                <Text style={styles.rowContent}>없음</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>사전교육</Text>
                                <Text style={styles.rowContent}>없음</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.seperateBackground}></View>

                    <View style={styles.bottom}>
                        <Text style={styles.contentTitle}>담당처</Text>
                        <View style={styles.rows}>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>관리센터</Text>
                                <Text style={styles.rowContent}>사단법원 미래회</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>담장자</Text>
                                <Text style={styles.rowContent}>김규성</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>이메일</Text>
                                <Text style={styles.rowContent}>kjh338076@gmail.com</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>연락처</Text>
                                <Text style={styles.rowContent}>010-2123-4123</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.fixedBottom}>
                    <Button title="전화하기" onPress={() => call(args).catch(console.error)}></Button>
                    <Button title="지원하기" onPress={() => this.props.navigation.navigate('Apply')}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)'
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
    },
    seperateLine: {
        borderWidth: 0.5,
        borderColor: 'gray',
        width: width - 50,
        marginTop: 30,
        marginBottom: 30,
    },
    seperateBackground: {
        height: 5,
        backgroundColor: 'rgba(250, 250, 250, 0.97)'
    },
    contentTitle: {
        fontSize: 20
    },
    content: {
        marginTop: 30
    },
    top: {
        margin: 30
    },
    topPlace: {
        color: 'red'
    },
    topTitle: {
        marginTop: 10,
        fontSize: 20
    },
    topBottom: {
        marginTop: 10,
        flexDirection: 'row'
    },
    topBottomDday: {
        color: 'red'
    },
    topBottomDate: {
        marginLeft: 10
    },
    middleTop: {
        margin: 30
    },
    middleBottom: {
        margin: 30
    },
    bottom: {
        margin: 30
    },
    rows: {
        marginTop: 30
    },
    row: {
        flexDirection: 'row'
    },
    rowTitle: {

    },
    rowContent: {
        marginLeft: 10
    },
    fixedBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});