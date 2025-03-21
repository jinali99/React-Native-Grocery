import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/common/header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {layout, responsiveModerateScale} from '../utils/app.utils';
import {useTranslation} from 'react-i18next';
const Account = () => {
  const lang = AsyncStorage.getItem('Language');
  console.log('lang', lang);
  const {t} = useTranslation();
  return (
    <View style={layout.safeView}>
      <Header backArrow showCart showWishlist />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.userDetails}>
            <Text style={heading}>{t('profile.hello')}</Text>
            <Text style={subHeading}>{t('profile.hello')}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  userDetails: {
    paddingHorizontal: responsiveModerateScale(20),
    marginTop: responsiveModerateScale(30),
    marginBottom: responsiveModerateScale(15),
  },
  heading: {},
  subHeading: {},
});
