import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import MyDrawer from './drawerNavigator';
import Home from '../screens/homeScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#006494",
  }
});