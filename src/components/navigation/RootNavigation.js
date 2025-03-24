import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomNavigation from './BottomNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../../utils/screens';
import ProductDetail from '../../screens/ProductDetail';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.BOTTOM_NAVIGATION}
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.PRODUCT_DETAIL}
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
