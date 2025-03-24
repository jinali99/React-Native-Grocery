import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/common/header/Header';
import get from 'lodash/get';

const ProductDetail = () => {
  const route = useRoute();
  console.log('route----> ', route.params.item);
  const product = get(route, 'params.item', {});
  return (
    <View>
      <Header backArrow showCart showWishlist />
      <Text>ProductDetail</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
