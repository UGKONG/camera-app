/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Styled from '../../assets/common/Styled';

export default function({ navigation }) {
  const [buttonList, setButtonList] = useState([
    { id: 1, name: '내정보', navigate: '' },
    { id: 2, name: '카메라 설정', navigate: '' },
    { id: 3, name: '사진 설정', navigate: '' },
    { id: 4, name: '개발자 정보', navigate: '' },
    { id: 5, name: '버전 정보', navigate: '' },
  ]);

  return (
    <ScrollView style={styles.container}>
      {buttonList.map(item => (
        <TouchableOpacity style={styles.button} key={item.id}>
          <Text style={Styled.buttonText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10
  },
  button: {
    ...Styled.button,
    width: '100%',
    paddingVertical: 10,
    marginBottom: 10
  },
})