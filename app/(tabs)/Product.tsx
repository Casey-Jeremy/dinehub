import React from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { svg } from '../../assets/svg';
import {
  addToCart,
  fullRemoveFromCart,
  removeFromCart,
} from '../../src/store/slices/cartSlice';
import { components } from '../components';
import { theme } from '../constants';
import { useAppDispatch, useAppNavigation } from '../hooks';
import { text } from '../text';
import type { RootStackParamList } from '../types';
import { addedToCartMessage, quantityInCart } from '../utils';

type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;

const Product: React.FC<Props> = ({route}): JSX.Element => {
  const {item} = route.params;
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const quantity = (quantityInCart(item) as number) || 0;

  const renderHeader = () => {
    return <components.Header basket={true} goBack={true} />;
  };

  const renderImage = () => {
    return (
      <View style={{marginBottom: 30, backgroundColor: theme.colors.white}}>
        <components.ImageBackground
          source={{uri: item.image}}
          resizeMode='cover'
          style={{
            height: 390,
            aspectRatio: 1,
            alignSelf: 'center',
          }}
        >
          <components.ProductInWishlist
            version={2}
            item={item}
            containerStyle={{
              position: 'absolute',
              right: 0,
              paddingHorizontal: 23,
              paddingTop: 32,
            }}
          />
          <components.ProductNew
            item={item}
            version={2}
            containerStyle={{
              position: 'absolute',
              top: 0,
              padding: 7,
              paddingHorizontal: 20,
              paddingTop: 20,
            }}
          />
        </components.ImageBackground>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <View style={{paddingHorizontal: 20, marginBottom: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
        >
          <text.H3>{item.name}</text.H3>
          <text.T16>
            {item.weight}g - {item.calories} kcal
          </text.T16>
        </View>
        <text.T16>{item.description}</text.T16>
      </View>
    );
  };

  const renderAlert = () => {
    if (quantity > 0) {
      Alert.alert(
        'Item already in cart',
        'Do you want to add another one?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              dispatch(fullRemoveFromCart(item));
              dispatch(addToCart(item));
              addedToCartMessage(item);
            },
          },
        ],
        {cancelable: false},
      );
      return;
    }
  };

  const renderButtons = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingBottom: 10}}>
        <View
          style={{
            height: 60,
            backgroundColor: theme.colors.white,
            marginBottom: 14,
            borderRadius: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{...theme.fonts.DMSans_700Bold, fontSize: 20}}>
            ${item.price}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => dispatch(removeFromCart(item))}>
              <svg.DishMinusSvg />
            </TouchableOpacity>
            <View style={{paddingHorizontal: 24}}>
              <Text
                style={{
                  ...theme.fonts.DMSans_700Bold,
                  fontSize: 14,
                  color: theme.colors.textColor,
                }}
              >
                {quantityInCart(item)}
              </Text>
            </View>

            <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
              <svg.DishPlusSvg />
            </TouchableOpacity>
          </View>
        </View>
        <components.Button
          title='+ Add to cart'
          containerStyle={{marginBottom: 14}}
          onPress={() => {
            if (quantity > 0) {
              renderAlert();
              return;
            }
            dispatch(addToCart(item));
            addedToCartMessage(item);
          }}
        />
        <components.Button
          title='Leave a review'
          transparent={true}
          containerStyle={{
            backgroundColor: theme.colors.white,
          }}
          onPress={() => {
            navigation.navigate('LeaveAReview');
          }}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        {renderImage()}
        {renderDescription()}
        {renderButtons()}
      </ScrollView>
    );
  };

  const renderHomeIndicator = () => {
    return <components.HomeIndicator />;
  };

  return (
    <components.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default Product;
