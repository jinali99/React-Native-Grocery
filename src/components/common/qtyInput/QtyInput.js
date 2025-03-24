import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../button/Button';
import {colors} from '../../../theme/colors';
import {responsiveModerateScale} from '../../../utils/app.utils';

const QtyInput = ({quantity = 0}) => {
  const [qty, setQty] = useState(quantity);
  const increment = () => {
    console.log('increment');
  };

  const decrement = () => {
    console.log('decrement');
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => increment()} style={styles.increment}>
        <Text maxFontSizeMultiplier={1}>+</Text>
      </Pressable>
      <Text maxFontSizeMultiplier={1} style={styles.qtyText}>
        {qty}
      </Text>
      <Pressable onPress={() => decrement()} style={styles.decrement}>
        <Text maxFontSizeMultiplier={1}>-</Text>
      </Pressable>
    </View>
  );
};

export default QtyInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsiveModerateScale(5),
    borderRadius: responsiveModerateScale(2),

    // backgroundColor: colors.gray4,
    // padding: responsiveModerateScale(10),
    // borderRadius: responsiveModerateScale(5),
    // marginTop: responsiveModerateScale(10),
  },
  increment: {},
  qtyText: {},
  decrement: {},
});
