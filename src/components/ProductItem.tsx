import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Product as ProductType} from '../types/types';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationRoute} from '../navigation/rootNavigation';
import {Badge} from './Badge';
import {selectCartItems} from '../state-manager/reducers/checkout.slice';
import {useSelector} from 'react-redux';

interface Props {
  product: ProductType;
}

export const ProductItem = ({product}: Props) => {
  const navigation = useNavigation();
  const handleGoToDetail = () =>
    navigation.navigate(RootNavigationRoute.ProductDetailRoute, {product});

  const cartItems = useSelector(selectCartItems);
  const cartItem = cartItems?.find(
    (item: CartProduct) => item.product.id === product.id,
  );

  return (
    <TouchableOpacity style={[styles.productItem]} onPress={handleGoToDetail}>
      <Text>{product.name}</Text>
      {cartItem?.quantity && (
        <Badge
          value={cartItem?.quantity}
          size={22}
          customStyle={{
            badge: styles.badge,
          }}
        />
      )}
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
  badge: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
});
