import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './Pages/HomeStack';
import GalleryStack from './Pages/GalleryStack';
import SettingStack from './Pages/SettingStack';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <>
    <StatusBar style='auto' />
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeStack') iconName = focused ? 'ios-aperture' : 'ios-aperture-outline';
          if (route.name === 'GalleryStack') iconName = focused ? 'ios-albums' : 'ios-albums-outline';
          if (route.name === 'SettingStack') iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}>
        <Tab.Screen name='HomeStack' component={HomeStack} />
        <Tab.Screen name='GalleryStack' component={GalleryStack} />
        <Tab.Screen name='SettingStack' component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}