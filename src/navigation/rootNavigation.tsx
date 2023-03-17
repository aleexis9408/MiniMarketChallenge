import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { CartScreen } from '../screens/cartScreen';

export enum RootNavigationRoute {
  cartRoute = 'cartRoute',
}

export type RootNavigationProps = {
  [RootNavigationRoute.cartRoute]: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
