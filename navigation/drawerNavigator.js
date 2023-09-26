import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from './tabNavigator';
import Credits from '../screens/credits';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen name="Credits" component={Credits} />
    </Drawer.Navigator>
  );
}