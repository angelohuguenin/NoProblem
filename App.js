import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MyDrawer from './navigation/drawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/stackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
