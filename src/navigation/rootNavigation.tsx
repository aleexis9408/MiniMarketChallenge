import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {CartScreen} from '../screens/cart/cartScreen';
import {ProductDetail} from '../screens/productDetail/productDetail';
import {Product as ProductType} from '../types/types';

export enum RootNavigationRoute {
  cartRoute = 'cartRoute',
  ProductDetailRoute = 'ProductDetailRoute',
}

export type RootNavigationProps = {
  [RootNavigationRoute.cartRoute]: undefined;
  [RootNavigationRoute.ProductDetailRoute]: {
    product: ProductType;
  };
};

const Stack = createNativeStackNavigator<RootNavigationProps>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RootNavigationRoute.cartRoute}>
        <Stack.Screen
          name={RootNavigationRoute.cartRoute}
          component={CartScreen}
          options={{
            headerTitle: 'MINI MARKET',
            headerTitleAlign: 'left',
          }}
        />
        <Stack.Group
          screenOptions={{
            presentation: 'transparentModal',
            animation: 'fade',
            headerShown: false,
          }}>
          <Stack.Screen
            name={RootNavigationRoute.ProductDetailRoute}
            component={ProductDetail}
            options={{
              presentation: 'transparentModal',
              animation: 'slide_from_bottom',
              contentStyle: {backgroundColor: '#40404040'},
              headerTitle: 'Product',
              headerTitleAlign: 'left',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
