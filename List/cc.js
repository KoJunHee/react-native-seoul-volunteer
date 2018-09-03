import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ListItem from './ListItem'

export default class cc extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '문화/예술',
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerStyle: {
            backgroundColor: 'white',
        },
    });
    
    render() {
        return (
            <View>
                <ScrollView contentContainerStyle={styles.listItem}>
                    {Object.values([
                        {
                            text: 'aa'
                        },
                        {
                            text: 'bb'
                        },
                        {
                            text: 'cc'
                        }
                    ])
                        .reverse()
                        .map(item => (
                            <ListItem
                                text={item.text}
                            />
                        ))}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E9AFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        alignItems: "center"
    }
});