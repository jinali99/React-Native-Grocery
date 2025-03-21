import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import Home from '../../screens/Home';
import Cart from '../../screens/Cart';
import Account from '../../screens/Account';
import Category from '../../screens/Category';

//icons
import HomeIcon from '../../assets/icons/home.svg';
import CategoryIcon from '../../assets/icons/category.svg';
import UserIcon from '../../assets/icons/user.svg';
import CartIcon from '../../assets/icons/header_cart.svg';

//utils
import {iconSize} from '../../utils/constants';
import screens from '../../utils/screens';

//color
import {colors} from '../../theme/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wishlist from '../../screens/Wishlist';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          paddingBottom: 0, // Remove extra padding
          height: 60, // Adjust height
        },
        tabBarLabelStyle: {
          fontSize: 12, // Adjust text size if needed
          marginBottom: 0, // Remove extra spacing under labels
        },
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.black,

        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return <HomeIcon height={iconSize} width={iconSize} />;
          } else if (route.name === 'Cart') {
            return <CartIcon height={iconSize} width={iconSize} />;
          } else if (route.name === 'Category')
            return <CategoryIcon height={iconSize} width={iconSize} />;
          else if (route.name === 'Account')
            return <UserIcon height={iconSize} width={iconSize} />;
        },
      })}>
      <Tab.Screen name={screens.HOME} component={Home} options={options} />
      <Tab.Screen
        name={screens.CATEGORY}
        component={Category}
        options={options}
      />
      <Tab.Screen name={screens.CART} component={Cart} options={options} />
      <Tab.Screen
        name={screens.ACCOUNT}
        component={Account}
        options={options}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
