/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Default from './Default';
import MyInfo from './MyInfo';
import CameraSetting from './CameraSetting';
import GallerySetting from './GallerySetting';
import DevInfo from './DevInfo';
import VersionInfo from './VersionInfo';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Default' component={Default} options={{ title: '설정' }} Default />
      <Stack.Screen name='MyInfo' component={MyInfo} options={{ title: '내정보' }} />
      <Stack.Screen name='CameraSetting' component={CameraSetting} options={{ title: '카메라 설정' }} />
      <Stack.Screen name='GallerySetting' component={GallerySetting} options={{ title: '사진 설정' }} />
      <Stack.Screen name='DevInfo' component={DevInfo} options={{ title: '개발자 정보' }} />
      <Stack.Screen name='VersionInfo' component={VersionInfo} options={{ title: '버전 정보' }} />
    </Stack.Navigator>
  )
}
