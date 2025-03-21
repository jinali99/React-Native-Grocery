import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveModerateScale, screenWidth} from '../../utils/app.utils';
import {colors} from '../../theme/colors';
import Price from '../common/price/Price';

// const itemWidth = screenWidth / 2 - 12;
const imageWidth = responsiveModerateScale(200);
const ProductCard = ({item}) => {
  console.log('item---->', item);
  return (
    <View style={styles.cardContainer} key={item.id}>
      <View
        style={{
          height: 250,
          backgroundColor: 'white',
          padding: responsiveModerateScale(5),
          position: 'relative',
        }}>
        {/* <Pressable>
          <CustomFastImage
            style={{width: imageWidth, height: imageWidth}}
            source={getImageParams(item)?.source}
          />
        </Pressable> */}

        <Pressable>
          <Text style={styles.itemName} numberOfLines={2}>
            {item.name}
          </Text>
          <Text>{item.sku}</Text>
        </Pressable>

        <Price priceRange={item?.price_range} />

        {/* <View style={styles.btnContainer}>
          {addWishlistLoader ? (
            <ActivityIndicator />
          ) : (
            <Pressable
              onPress={() =>
                isLoggedIn ? handleWishlistToggle() : setLoginModalVisible(true)
              }>
              <IconButton
                icon={() =>
                  isInWishlist ? (
                    <Filled_Heart width={20} height={20} />
                  ) : (
                    <Heart width={20} height={20} />
                  )
                }
                style={styles.wishlistBtn}
              />
            </Pressable>
          )}
          <IconButton
            icon={() => <Cart width={20} height={20} fill={'white'} />}
            style={styles.cartBtn}
            onPress={onAddToCartPress}
            loading={addingToCart}
          />
        </View> */}
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
    width: 125,
  },
  imageContainer: {
    height: imageWidth,
  },

  itemBrand: {
    fontSize: 11,
    color: '#999999',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '400',
    // paddingHorizontal: responsiveModerateScale(5),
    // paddingVertical: responsiveModerateScale(5),
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
