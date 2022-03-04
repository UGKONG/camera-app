/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Styled from '../../assets/common/Styled';

export default () => {
  return (
    <ScrollView style={Styled.container}>
      <Text>이름 : 전상욱</Text>
      <Text>나이 : 25</Text>
    </ScrollView>
  )
}