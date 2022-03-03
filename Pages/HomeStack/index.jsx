/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Default from './Default';

const Stack = createNativeStackNavigator();

export default function() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Default' component={Default} options={{ title: '카메라' }} />
    </Stack.Navigator>
  )
}