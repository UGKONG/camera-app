/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { ScrollView, Text } from 'react-native';
import Styled from '../../assets/common/Styled';

export default function() {
  return (
    <ScrollView style={Styled.container}>
      <Text>개발자명 : 전상욱</Text>
    </ScrollView>
  )
}