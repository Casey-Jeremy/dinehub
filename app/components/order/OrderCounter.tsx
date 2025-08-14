import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ProductType } from '../../../app/types';
import { quantityInCart } from '../../../app/utils';
import { svg } from '../../../assets/svg';
import { useAppDispatch } from '../../hooks';
// import InCart from '../InCart';
// import {ProductInCart} from '../../components/product/ProductInCart';
import { addToCart, removeFromCart } from '@/src/store/slices/wishlistSlice';

type Props = {
  item: ProductType;
};

import { theme } from '../../constants';

const OrderCounter: React.FC<Props> = ({item}): JSX.Element => {
  const dispatch = useAppDispatch();
  const quantity = quantityInCart(item);
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <TouchableOpacity
        style={{
          padding: 14,
        }}
        onPress={() => {
          dispatch(addToCart(item));
        }}
      >
        <svg.PlusSvg />
      </TouchableOpacity>
      <Text
        style={{
          ...theme.fonts.DMSans_400Regular,
          fontSize: 12,
          color: theme.colors.textColor,
        }}
      >
        {quantity}
      </Text>
      <TouchableOpacity
        style={{
          padding: 14,
        }}
        onPress={() => {
          dispatch(removeFromCart(item));
        }}
      >
        <svg.MinusSvg />
      </TouchableOpacity>
    </View>
  );
};

export default OrderCounter;
