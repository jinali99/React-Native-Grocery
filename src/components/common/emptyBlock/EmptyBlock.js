import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Emptycart from '../../../assets/icons/cart_empty.svg';

import {responsiveModerateScale} from '../../../utils/app.utils';

import {colors} from '../../../theme/colors';

/**
 * Empty block for cart wishlist etc
 * Display icon , title description
 *
 */

const iconSize = responsiveModerateScale(100);
const EmptyBlock = ({title = '', description = ''}) => {
  return (
    <View style={styles.emptyBlock}>
      <View style={styles.emptyIcon}>
        <Emptycart height={iconSize} width={iconSize} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.title, styles.description]}>{description}</Text>
    </View>
  );
};

export default EmptyBlock;

const styles = StyleSheet.create({
  emptyBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyIcon: {
    alignItems: 'center',
    paddingVertical: responsiveModerateScale(10),
  },
  title: {
    fontSize: responsiveModerateScale(18),
    color: colors.gray5,
    textAlign: 'center',
    paddingHorizontal: responsiveModerateScale(20),
  },
  description: {
    fontSize: responsiveModerateScale(16),
  },
});
