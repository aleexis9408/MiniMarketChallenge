import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {Product as ProductType} from '../types/types';
import {ProductItem} from './ProductItem';

interface Props {
  data: ProductType[];
}

export const ProductList = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      renderItem={({item}) => <ProductItem product={item} />}
    />
  );
};
