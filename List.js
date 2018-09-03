import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListScrollView from './ListScrollView';

export default class List extends React.Component {
    state = {
        names: [
            { 'name': '기술/기능', 'id': 1 },
            { 'name': '교육/학습', 'id': 2 },
            { 'name': '상담/정보', 'id': 3 },
            { 'name': '노력/행정', 'id': 4 },
            { 'name': '운영/지원', 'id': 5 },
            { 'name': '보건/의료', 'id': 6 },
            { 'name': '문화/예술', 'id': 7 },
            { 'name': '교통/환경', 'id': 8 },
        ]
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerStyle: {
            backgroundColor: 'white',
        },
    });


    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        return (
            <View style={styles.container}>
                <ListScrollView></ListScrollView>
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

