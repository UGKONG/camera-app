/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import Styled from '../../assets/common/Styled';

export default function({ navigation }) {
  const [imgList, setImgList] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const colorList = ['#eee','#ddd','#ccc','#bbb','#aaa','#999','#888','#777','#666','#555','#444','#333','#222','#111'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrap}>
        {imgList.map((d, i) => (
          <View key={i} style={[styles.img, {backgroundColor: colorList[i]}]}>
            <Text></Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    width: '25%',
    height: 100,
    backgroundColor: '#eee'
  }
})