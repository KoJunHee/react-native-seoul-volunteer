import React from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import ListItem from './ListItem'

export default class aa extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: '기술/기능',
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center'
        },
        headerStyle: {
            backgroundColor: 'black',
        }
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