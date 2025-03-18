import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/common/header/Header';
const Account = () => {
  return (
    <>
      <Header backArrow showCart showWishlist />
      <Text>Account</Text>
    </>
  );
};

export default Account;

const styles = StyleSheet.create({});
