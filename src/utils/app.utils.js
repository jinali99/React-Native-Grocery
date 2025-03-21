import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../theme/colors';

export const responsiveModerateScale = scale => {
  return moderateScale(scale, 0.1);
};

export const layout = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
