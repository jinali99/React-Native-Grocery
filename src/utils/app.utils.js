import {moderateScale} from 'react-native-size-matters';

export const responsiveModerateScale = scale => {
  return moderateScale(scale, 0.1);
};
