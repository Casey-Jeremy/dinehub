import React from 'react';
import { Text, TextStyle } from 'react-native';

import { ProductType } from '../../../app/types';
import { theme } from '../../constants';

type Props = {item: ProductType; style?: TextStyle};

const ProductName: React.FC<Props> = ({item, style}): JSX.Element | null => {
  return (
    <Text
      style={{
        marginRight: 'auto',
        color: theme.colors.mainColor,
        ...theme.fonts.textStyle_14,
        ...style,
      }}
      numberOfLines={1}
    >
      {item.name}
    </Text>
  );
  return null;
};

export default ProductName;
