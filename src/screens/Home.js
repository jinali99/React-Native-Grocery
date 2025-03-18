import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/common/header/Header';

const Home = () => {
  return (
    <>
      <Header showCart showSearch showWishlist />
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text>Home</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
