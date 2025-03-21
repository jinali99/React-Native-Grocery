import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

//lodash
import size from 'lodash/size';

import HeaderLogo from '../../../assets/images/accelerate.png';
import BackArrow from '../../../assets/icons/back_arrow.svg';
import Wishlist from '../../../assets/icons/wishlist.svg';
import Cart from '../../../assets/icons/header_cart.svg';
import Search from '../../../assets/icons/search.svg';

import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

//utils
import {responsiveModerateScale} from '../../../utils/app.utils';
import screens from '../../../utils/screens';
import {iconSize} from '../../../utils/constants';

//theme
import {colors} from '../../../theme/colors';

/**
 *
 * Header Component
 * common component -  Display : title , logo  ,  wishlist , cart , search  icon
 *
 */

const Header = ({
  title = '',
  showWishlist = false,
  showCart = false,
  showSearch = false,
  backArrow = false,
  onBackPress,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {backArrow && (
          <Pressable
            onPress={() => {
              onBackPress ? onBackPress : navigation.goBack();
            }}>
            <BackArrow height={iconSize} width={iconSize} />
          </Pressable>
        )}
        <View style={styles.titleWrapper}>
          {size(title) ? (
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
          ) : (
            <Pressable onPress={() => navigation.navigate(screens.HOME)}>
              <FastImage
                style={styles.logo}
                source={HeaderLogo}
                resizeMode={FastImage.resizeMode.contain}
              />
            </Pressable>
          )}
        </View>
      </View>
      <View style={styles.iconWrapper}>
        {showSearch && (
          <Pressable style={styles.rightIcons}>
            <Search height={iconSize} width={iconSize} />
          </Pressable>
        )}
        {showWishlist && (
          <Pressable
            style={styles.rightIcons}
            onPress={() => navigation.navigate(screens.WISHLIST)}>
            <Wishlist height={iconSize} width={iconSize} />
          </Pressable>
        )}
        {showCart && (
          <Pressable
            style={styles.rightIcons}
            onPress={() => navigation.navigate(screens.CART)}>
            <Cart height={iconSize} width={iconSize} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
    marginBottom: responsiveModerateScale(2),
    marginRight: responsiveModerateScale(4),
    padding: responsiveModerateScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    maxHeight: responsiveModerateScale(44),
    elevation: 4, // For Android
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: responsiveModerateScale(10),
  },
  titleWrapper: {
    flex: 1,
    maxWidth: '70%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    alignSelf: 'flex-start',
  },
  logo: {
    width: responsiveModerateScale(130),
    height: responsiveModerateScale(130),
  },
  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // gap: responsiveModerateScale(10),
  },
  rightIcons: {
    position: 'relative',
    padding: responsiveModerateScale(5),
  },
});
