import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/common/header/Header';

const Category = () => {
  return (
    <View>
      <Header showCart showWishlist backArrow />
      <Text>Category</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
