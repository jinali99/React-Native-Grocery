import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/common/header/Header';

const Cart = () => {
  return (
    <View>
      <Header backArrow showWishlist showSearch />
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
