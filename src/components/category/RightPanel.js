import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCard from '../plp/ProductCard';
import {responsiveModerateScale} from '../../utils/app.utils';

const RightPanel = ({products}) => {
  return (
    <View style={{position: 'relative'}}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={item => item?.id}
        numColumns={2}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        contentContainerStyle={{
          paddingBottom: responsiveModerateScale(60),
          paddingHorizontal: responsiveModerateScale(5),
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RightPanel;

const styles = StyleSheet.create({});
