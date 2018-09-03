import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

export default class ListScrollView extends Component {
   state = {
      names: [
         {'name': '기술/기능', 'id': 1},
         {'name': '교육/학습', 'id': 2},
         {'name': '상담/정보', 'id': 3},
         {'name': '노력/행정', 'id': 4},
         {'name': '운영/지원', 'id': 5},
         {'name': '보건/의료', 'id': 6},
         {'name': '문화/예술', 'id': 7},
         {'name': '교통/환경', 'id': 8},
      ]
   }
   render() {
      return (
         <View>
            <ScrollView horizontal={true}>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>   
         </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      margin: 2,
    //   borderColor: '#2a4944',
    //   borderWidth: 1,
    //   backgroundColor: '#d2f7f1',
   }
})