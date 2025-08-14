import React, { PropsWithChildren } from 'react';
import { Text, View, ViewStyle } from 'react-native';

import { ProductType } from '../../../app/types';
import { theme } from '../../constants';

type Props = PropsWithChildren<{
  gram?: boolean;
  item: ProductType;
  containerStyle?: ViewStyle;
  numberOfLines?: number;
}>;

const ProductPrice: React.FC<Props> = ({
  gram,
  item,
  containerStyle,
  numberOfLines = 1,
}): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      {item.old_price && (
        <Text
          style={{
            marginRight: 4,
            textDecorationLine: 'line-through',
            ...theme.fonts.DMSans_400Regular,
            fontSize: 12,
            color: theme.colors.textColor,
            lineHeight: 12 * 1.5,
          }}
        >
          ${item.old_price}
        </Text>
      )}
      <Text
        style={{
          ...theme.fonts.DMSans_500Medium,
          fontSize: 14,
          lineHeight: 14 * 1.5,
          color: theme.colors.mainColor,
        }}
        numberOfLines={numberOfLines}
      >
        ${item.price}
      </Text>
      {gram && (
        <React.Fragment>
          <View
            style={{
              width: 1,
              height: 10,
              backgroundColor: '#D5DCE3',
              marginHorizontal: 8,
            }}
          />
          <Text
            style={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 10,
              color: theme.colors.textColor,
            }}
          >
            {item.weight}g
          </Text>
        </React.Fragment>
      )}
    </View>
  );
};

export default ProductPrice;
