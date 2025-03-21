import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import get from 'lodash/get';
import {responsiveModerateScale} from '../../../utils/app.utils';
import {colors} from '../../../theme/colors';

const Price = ({priceRange}) => {
  const regular_price = get(priceRange, 'regular_price.amount');
  const discount_price = get(priceRange, 'discount_price.amount', 0);
  const currency = get(priceRange, 'regular_price.currency');
  return (
    <View style={styles.priceContainer}>
      <View style={styles.discountWrapper}>
        <Text style={styles.discountPrice}>
          {currency} {discount_price}
        </Text>
      </View>

      <Text style={styles.regularPrice}>
        {currency} {regular_price}
      </Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  priceContainer: {},
  discountWrapper: {
    flexDirection: 'row',
  },
  discountPrice: {
    fontSize: responsiveModerateScale(14),
    fontWeight: 700,
  },
  regularPrice: {
    textDecorationLine: 'line-through',
    textDecorationColor: colors.gray3,
  },
});
