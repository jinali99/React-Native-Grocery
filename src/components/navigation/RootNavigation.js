import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomNavigation from './BottomNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../../utils/screens';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.BOTTOM_NAVIGATION}
        component={BottomNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
