import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/common/header/Header';

const Home = () => {
  return (
    <View>
      <Header showCart showSearch showWishlist />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
