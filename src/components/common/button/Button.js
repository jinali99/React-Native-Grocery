import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {responsiveModerateScale} from '../../../utils/app.utils';
import {colors} from '../../../theme/colors';
/**
 * Common component manage loading , title
 *
 */

const Button = ({
  title = '',
  loading,
  loadercolor = '',
  style: btnWrapper,
  onBtnPress = () => {},
}) => {
  return (
    <View style={[styles.container, btnWrapper]}>
      {loading ? (
        <ActivityIndicator color={loadercolor} />
      ) : (
        <Pressable onPress={onBtnPress}>
          <Text style={styles.btnText}>{title}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray4,
    padding: responsiveModerateScale(10),
    borderRadius: responsiveModerateScale(5),
    marginTop: responsiveModerateScale(10),
  },
  btnText: {
    color: colors.primary,
    fontSize: responsiveModerateScale(16),
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
