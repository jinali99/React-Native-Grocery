import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveModerateScale} from '../../utils/app.utils';
import {colors} from '../../theme/colors';

const LeftPanel = ({data, setSelectedCategoryId, selectedCategoryId}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Pressable
          style={[styles.categoryItem]}
          onPress={() => setSelectedCategoryId(item.id)}>
          <Text
            style={[
              styles.categoryText,
              selectedCategoryId === item.id && styles.selectedCategory,
            ]}>
            {item.name}
          </Text>
        </Pressable>
      )}
    />
  );
};

export default LeftPanel;

const styles = StyleSheet.create({
  categoryItem: {
    padding: responsiveModerateScale(5),
  },
  categoryText: {
    fontSize: responsiveModerateScale(16),
    fontWeight: 500,
    color: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: responsiveModerateScale(7),
  },
  selectedCategory: {
    color: colors.primary,
    backgroundColor: colors.green,
  },
});
