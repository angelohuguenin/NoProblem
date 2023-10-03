import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import MyTabs from './tabNavigator';
import Credits from '../screens/credits';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} style={styles.container}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen name="Credits" component={Credits} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#006494",
  }
});