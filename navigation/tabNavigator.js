import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

import Home from '../screens/homeScreen';
import Reminders from '../screens/myReminders';
import Routine from '../screens/myRoutine';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    return (
      <Tab.Navigator barStyle={styles.bottomTabStyle}
        labeled={false}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Reminders') {
                iconName = focused
                ? 'alarm'
                : 'alarm-outline';
            } else if (route.name === 'Routine') {
                iconName = focused
                ? 'calendar'
                : 'calendar-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} style={styles.icons} />;
            },headerShown: false

        })}
        activeColor='#ee8249'
        inactiveColor='gray'
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Reminders" component={Reminders} />
        <Tab.Screen name="Routine" component={Routine} />
      </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });