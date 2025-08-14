import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ProductType } from '../../../app/types';
import { theme } from '../../constants';
import Image from '../custom/Image';
// import NewBadge from '../badges/NewBadge';
import { useAppNavigation } from '../../hooks';
import DishName from '../product/ProductName';
import ProductPrice from '../product/ProductPrice';
import OrderCounter from './OrderCounter';

type Props = {
  item: ProductType;
  lastElement?: boolean;
  containerStyle?: object;
};

const OrderItem: React.FC<Props> = ({
  item,
  lastElement,
  containerStyle,
}): JSX.Element => {
  const navigation = useAppNavigation();

  const marginBottom = lastElement ? 30 : 14;

  const renderImage = () => {
    const imageWidth = 94;
    return (
      <Image
        source={{uri: item.image}}
        style={{width: imageWidth, aspectRatio: imageWidth / imageWidth}}
        resizeMode='cover'
      />
    );
  };

  const renderInfo = () => {
    return (
      <View style={{marginLeft: 14, marginRight: 'auto'}}>
        <DishName
          item={item}
          style={{
            marginBottom: 3,
          }}
        />
        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 10,
            color: theme.colors.textColor,
            marginBottom: 14,
          }}
        >
          {item.calories} kcal - {item.weight}g
        </Text>
        <ProductPrice item={item} containerStyle={{marginBottom: 'auto'}} />
      </View>
    );
  };

  // const renderNewBadge = () => {
  //   if (item.is_new) {
  //     return (
  //       <NewBadge
  //         containerStyle={{
  //           padding: 7,
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           zIndex: 1,
  //         }}
  //       />
  //     );
  //   }

  //   if (!item.is_new) {
  //     return null;
  //   }
  // };

  const renderOrderCounter = () => {
    return <OrderCounter item={item} />;
  };

  const touchableOpacityStyle: object = {
    flexDirection: 'row',
    width: '100%',
    height: 111,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    alignItems: 'center',
  };

  return (
    <TouchableOpacity
      style={{...touchableOpacityStyle, ...containerStyle}}
      onPress={() => {
        navigation.navigate('Product', {item});
      }}
    >
      {/* {renderNewBadge()} */}
      {renderImage()}
      {renderInfo()}
      {renderOrderCounter()}
    </TouchableOpacity>
  );
};

export default OrderItem;
