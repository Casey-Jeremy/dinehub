import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { ProductType } from '../../../app/types';
import { theme } from '../../constants';
import { useAppNavigation } from '../../hooks';
import ImageBackground from '../custom/ImageBackground';
import ProductInCart from '../product/ProductInCart';
import ProductInWishlist from '../product/ProductInWishlist';
import ProductName from '../product/ProductName';
import ProductNew from '../product/ProductNew';
import ProductPrice from '../product/ProductPrice';

type Props = PropsWithChildren<{
  item: ProductType;
  lastItem?: boolean;
}>;

const RecommendedItem: React.FC<Props> = ({item, lastItem}): JSX.Element => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      style={{
        width: responsiveWidth(52),
        backgroundColor: theme.colors.white,
        marginRight: lastItem ? 20 : 14,
        borderRadius: 10,
      }}
      onPress={() => {
        navigation.navigate('Product', {item});
      }}
    >
      <ImageBackground
        source={{uri: item.image}}
        style={{
          width: '100%',
          aspectRatio: 1,
        }}
        imageStyle={{
          borderRadius: 10,
        }}
      >
        <ProductInWishlist
          item={item}
          containerStyle={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            padding: 14,
          }}
        />
        <ProductNew
          item={item}
          containerStyle={{
            position: 'absolute',
            top: 0,
            left: 0,
            padding: 14,
          }}
        />
      </ImageBackground>
      <View style={{paddingHorizontal: 14, paddingBottom: 14}}>
        <ProductName
          item={item}
          style={{color: theme.colors.textColor, marginBottom: 3}}
        />
        <ProductPrice item={item} gram={true} />
        <ProductInCart
          item={item}
          containerStyle={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            padding: 14,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RecommendedItem;
