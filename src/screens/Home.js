import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/common/header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeLanguage} from '../i18n';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const language = AsyncStorage.getItem('Language');
  console.log('language', language);
  const {t} = useTranslation();
  return (
    <>
      <Header showCart showSearch showWishlist />
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text>Home</Text>
        <View>
          <Text>{t('welcome')}</Text>
          <Button title="English" onPress={() => changeLanguage('en')} />
          <Button title="عربى" onPress={() => changeLanguage('ar')} />
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
