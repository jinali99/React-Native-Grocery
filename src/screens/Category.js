import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/common/header/Header';
import {responsiveModerateScale} from '../utils/app.utils';
import {colors} from '../theme/colors';
import {data} from '../components/category/categoryData';
import LeftPanel from '../components/category/LeftPanel';
import RightPanel from '../components/category/RightPanel';

const Category = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    data.categories[0].id,
  );
  const selectedCategory = data?.categories.find(
    cat => cat.id === selectedCategoryId,
  );
  const products = selectedCategory && selectedCategory.products;
  return (
    <>
      <Header showCart showWishlist backArrow />
      <View style={styles.container}>
        {/* Display category list */}
        <View style={styles.leftPanel}>
          <LeftPanel
            data={data.categories}
            setSelectedCategoryId={setSelectedCategoryId}
            selectedCategoryId={selectedCategoryId}
          />
        </View>
        {/* Display The Product */}
        <View style={styles.rightPanel}>
          <RightPanel products={products} />
        </View>
      </View>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPanel: {
    flex: 1,
    padding: responsiveModerateScale(10),
    backgroundColor: colors.gray1,
  },
  rightPanel: {
    flex: 3,
    // padding: responsiveModerateScale(10),
  },
});
