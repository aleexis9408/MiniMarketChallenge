import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Product as ProductType} from '../types/types';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationRoute} from '../navigation/rootNavigation';

interface Props {
  product: ProductType;
}

export const ProductItem = ({product}: Props) => {
  const navigation = useNavigation();
  const handleGoToDetail = () =>
    navigation.navigate(RootNavigationRoute.ProductDetailRoute, {product});

  return (
    <TouchableOpacity style={[styles.productItem]} onPress={handleGoToDetail}>
      <Text>{product.name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  productItem: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 100,
    width: 100,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
});
