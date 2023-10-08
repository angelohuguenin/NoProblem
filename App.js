import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { firebaseConfig } from './config';

import MyDrawer from './navigation/drawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/stackNavigator';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
