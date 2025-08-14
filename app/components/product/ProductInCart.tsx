import type { PropsWithChildren } from 'react';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import { addToCart } from '@/src/store/slices/wishlistSlice';
import { showMessage } from 'react-native-flash-message';
import { ProductType } from '../../../app/types';
import { svg } from '../../../assets/svg';
import { useAppDispatch, useAppSelector } from '../../hooks';

type Props = PropsWithChildren<{
  item: ProductType;
  containerStyle?: object;
}>;

const DishInCart: React.FC<Props> = ({item, containerStyle}): JSX.Element => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartSlice.list);
  const exist = (item: ProductType) => cart.find((i) => i.id === item.id);

  return (
    <TouchableOpacity
      style={{...containerStyle}}
      onPress={() => {
        if (exist(item)) {
          Alert.alert(
            'Product already in cart',
            'The product already exists in the cart, please remove the product from the cart',
            [{text: 'Ok'}],
          );
        }
        if (!exist(item)) {
          dispatch(addToCart(item));
          showMessage({
            message: 'Success',
            description: `${item.name} added to cart`,
            type: 'success',
            icon: 'success',
          });
        }
      }}
    >
      <svg.PlusSvg />
    </TouchableOpacity>
  );
};

export default DishInCart;
