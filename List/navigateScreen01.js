import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ListItem from './ListItem'

export default class navigateScreen01 extends React.Component {

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
            <View styles={styles.container}  >
                <ScrollView contentContainerStyle={styles.list} >
                    {Object.values([
                        {
                            text: '동대문구'
                        },
                        {
                            text: '서대문구'
                        },
                        {
                            text: '동대문구'
                        },
                        {
                            text: '동대문구'
                        }
                    ])
                        // .reverse()
                        .map(item => (
                            <ListItem                                
                                text={item.text}
                                navigation={this.props.screenProps}
                                >
                            </ListItem>
                        ))}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white'
    },
    listItem: {
        marginTop: 10
    }
});