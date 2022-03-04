/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import Styled from '../../assets/common/Styled';

export default ({ navigation }) => {
  const [buttonList] = useState([
    { id: 1, name: '내정보', href: 'MyInfo' },
    { id: 2, name: '카메라 설정', href: 'CameraSetting' },
    { id: 3, name: '사진 설정', href: 'GallerySetting' },
    { id: 4, name: '개발자 정보', href: 'DevInfo' },
    { id: 5, name: '버전 정보', href: 'VersionInfo' },
  ]);
  
  return (
    <ScrollView style={styles.container}>
      {buttonList.map(item => (
        <TouchableOpacity style={styles.button} key={item.id} onPress={() => navigation.push(item.href)}>
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