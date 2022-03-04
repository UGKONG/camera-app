/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { ScrollView, Text } from 'react-native';
import Styled from '../../assets/common/Styled';

export default () => {
  return (
    <ScrollView style={Styled.container}>
      <Text>버전 : 1.0.0</Text>
      <Text>출시일 : 2022년 04월 01일</Text>
    </ScrollView>
  )
}