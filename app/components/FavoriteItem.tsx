import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { ProductType } from '../../app/types';
import { svg } from '../../assets/svg';
import { theme } from '../constants';
import { useAppNavigation } from '../hooks';
import ImageBackground from './custom/ImageBackground';
import ProductInCart from './product/ProductInCart';
import ProductInWishlist from './product/ProductInWishlist';
import ProductName from './product/ProductName';
import ProductPrice from './product/ProductPrice';

type Props = PropsWithChildren<{
  item: ProductType;
  index?: number;
  onPress?: () => void;
}>;

const FavoriteItem: React.FC<Props> = ({item}): JSX.Element => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      style={{
        width: responsiveWidth(100) / 2 - 27.5,
        backgroundColor: theme.colors.white,
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
          alignSelf: 'center',
        }}
        imageStyle={{margin: 10}}
      >
        {item.is_new && (
          <View style={{padding: 14}}>
            <svg.NewSvg />
          </View>
        )}
        <ProductInWishlist
          item={item}
          containerStyle={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            padding: 14,
          }}
        />
      </ImageBackground>
      <View style={{paddingHorizontal: 14, paddingBottom: 14}}>
        <ProductName
          item={item}
          style={{
            marginBottom: 3,
            color: theme.colors.textColor,
          }}
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

export default FavoriteItem;
