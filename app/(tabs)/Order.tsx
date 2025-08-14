import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { svg } from '@/assets/svg';
import { setScreen } from '@/src/store/slices/tabSlice';
import { components } from '../components';
import { AUTHORIZATION_TOKEN, BASE_URL, ENDPOINTS } from '../config';
import { theme } from '../constants';
import { useAppDispatch, useAppNavigation, useAppSelector } from '../hooks';
import BottomTabBar from '../navigation/BottomTabBar';
import { text } from '../text';

const Order: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const cart = useAppSelector((state) => state.cartSlice.list);
  const subtotal = useAppSelector((state) => state.cartSlice.subtotal);
  const delivery = useAppSelector((state) => state.cartSlice.delivery);

  const totalFromCart = Number(
    useAppSelector((state) => state.cartSlice.total),
  );
  const deliveryFromCart = Number(
    useAppSelector((state) => state.cartSlice.delivery),
  );

  const [promocode, setPromocode] = useState('');
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(
    (
      Number(useAppSelector((state) => state.cartSlice.total)) +
      Number(useAppSelector((state) => state.cartSlice.delivery))
    ).toFixed(2),
  );
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setTotal((totalFromCart + deliveryFromCart - discount).toFixed(2));
  }, [totalFromCart, deliveryFromCart, discount]);

  const applyPromoCode = async () => {
    setLoading(true);
    const url = BASE_URL + ENDPOINTS.get.discount;

    await axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + AUTHORIZATION_TOKEN,
        },
        params: {
          promocode: promocode,
        },
      })
      .then((res) => {
        setLoading(false);
        const data = res.data as { promocode: { discount: number } };
        if (data.promocode.discount) {
          const discount = (Number(total) * data.promocode.discount) / 100;
          const newTotal = (Number(total) - discount).toFixed(2);
          setTotal(newTotal);
          setDiscount(discount);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setLoading(false);
      });
  };

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header basket={true} userImage={true} />;
  };

  const renderDishes = () => {
    return (
      <View>
        {cart.map((item, index, array) => {
          const last = index === array.length - 1;
          return (
            <components.OrderItem
              item={item}
              key={item.id}
              containerStyle={{
                marginBottom: last ? 20 : 14,
              }}
            />
          );
        })}
      </View>
    );
  };

  const renderPromoCodeApplied = () => {
    if (discount > 0) {
      return (
        <View style={{marginBottom: responsiveHeight(7)}}>
          <svg.CodeAppliedSvg />
        </View>
      );
    }

    return null;
  };

  const renderPromoCodeInput = () => {
    if (discount === 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: theme.colors.mainTurquoise,
            marginBottom: 30,
          }}
        >
          <View style={{flex: 1, paddingLeft: 14}}>
            <TextInput
              placeholder='Enter your promocode'
              value={promocode}
              onChangeText={(text) => setPromocode(text)}
              style={{
                ...theme.fonts.DMSans_400Regular,
                fontSize: 14,
                color: theme.colors.mainColor,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '30%',
              height: '100%',
              backgroundColor: theme.colors.mainTurquoise,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => applyPromoCode()}
          >
            {loading && (
              <ActivityIndicator size='small' color={theme.colors.white} />
            )}
            {!loading && (
              <Text
                style={{
                  textTransform: 'uppercase',
                  ...theme.fonts.DMSans_500Medium,
                  fontSize: 14,
                  lineHeight: 14 * 1.2,
                  color: theme.colors.white,
                }}
              >
                apply
              </Text>
            )}
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  const renderOrderSummary = () => {
    return (
      <View
        style={{
          padding: 20,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: theme.colors.mainTurquoise,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#DBE9F5',
            paddingBottom: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              ...theme.fonts.DMSans_500Medium,
              fontSize: 14,
              lineHeight: 14 * 1.2,
              color: theme.colors.mainColor,
            }}
          >
            Subtotal
          </Text>
          <text.T14 style={{color: theme.colors.mainColor}}>
            ${subtotal}
          </text.T14>
        </View>
        {discount > 0 && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <text.T14>Discount</text.T14>
            <text.T14>- ${discount.toFixed(2)}</text.T14>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <text.T14>Delivery</text.T14>
          <text.T14>${delivery}</text.T14>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <text.H4>Total</text.H4>
          <text.H4>${total}</text.H4>
        </View>
      </View>
    );
  };

  const renderOrder = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        {renderDishes()}
        {renderPromoCodeApplied()}
        {renderPromoCodeInput()}
        {renderOrderSummary()}
      </ScrollView>
    );
  };

  const renderEmptyCart = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: theme.colors.white,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 5,
          paddingVertical: 20,
        }}
      >
        <components.Image
          source={{uri: 'https://george-fx.github.io/dine-hub/14.jpg'}}
          style={{
            width: responsiveWidth(70),
            aspectRatio: 1,
            alignSelf: 'center',
          }}
        />
        <text.H2 style={{marginTop: 30, marginBottom: 14}}>
          Your cart is empty!
        </text.H2>
        <text.T16 style={{textAlign: 'center'}}>
          Looks like you haven't made{'\n'}your order yet.
        </text.T16>
      </ScrollView>
    );
  };

  const renderContent = () => {
    return (
      <React.Fragment>
        {cart.length === 0 ? renderEmptyCart() : renderOrder()}
      </React.Fragment>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title={cart.length === 0 ? 'Shop now' : 'Checkout'}
        containerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
        loading={loading}
        onPress={() => {
          if (cart.length === 0) {
            dispatch(setScreen('Menu'));
            return;
          }

          if (cart.length > 0) {
            navigation.navigate('Checkout', {
              total,
              subtotal,
              discount,
              delivery,
            });
            return;
          }
        }}
      />
    );
  };

  const renderBottomTabBar = () => {
    return <BottomTabBar />;
  };

  const renderHomeIndicator = () => {
    return <components.HomeIndicator />;
  };

  return (
    <components.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderButton()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default Order;
