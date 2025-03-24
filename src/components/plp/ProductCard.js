import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {responsiveModerateScale, screenWidth} from '../../utils/app.utils';
import {colors} from '../../theme/colors';
import Price from '../common/price/Price';
import FastImage from 'react-native-fast-image';
import Button from '../common/button/Button';
import {useNavigation} from '@react-navigation/native';
import screens from '../../utils/screens';
import QtyInput from '../common/qtyInput/QtyInput';

const imageWidth = responsiveModerateScale(120);
const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const [qty, setQty] = useState();
  const handlePress = id => {
    if (id == item.id) {
    }
  };
  return (
    <View style={styles.cardContainer} key={item.id}>
      <View style={styles.card}>
        <Pressable
          onPress={() => navigation.navigate(screens.PRODUCT_DETAIL, {item})}>
          <FastImage style={styles.imageContainer} source={item.image} />
          <Text style={styles.itemName} numberOfLines={2}>
            {item.name}
          </Text>
          <Text>{item.sku}</Text>
        </Pressable>

        <Price priceRange={item?.price_range} />

        {qty > 0 ? (
          <QtyInput quantity={qty} />
        ) : (
          <Button title="Add" onBtnPress={() => handlePress(item.id)} />
        )}
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    marginHorizontal: responsiveModerateScale(4),
    marginVertical: responsiveModerateScale(4),
    width: responsiveModerateScale(134),
  },
  card: {
    height: responsiveModerateScale(250),
    backgroundColor: colors.primary,
    padding: responsiveModerateScale(5),
    position: 'relative',
  },
  imageContainer: {
    height: imageWidth,
    width: imageWidth,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
  },
  rowHeaderView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingHorizontal: responsiveModerateScale(7),
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  wishlistBtn: {
    fontWeight: 'bold',
    color: 'black',
    borderRadius: 'unset',
    padding: 0,
    margin: 0,
  },
  cartBtn: {
    borderRadius: 'unset',
    backgroundColor: 'black',
    margin: 0,
  },

  iconWrapper: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  closeText: {
    fontSize: responsiveModerateScale(14),
    textDecorationLine: 'underline',
    paddingRight: responsiveModerateScale(8),
  },
  modalView: {
    backgroundColor: '#ffffffee',
    padding: responsiveModerateScale(12),
    zIndex: 10,
  },
});
