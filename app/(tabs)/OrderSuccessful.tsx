import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { setScreen } from '../../src/store/slices/tabSlice';
import { components } from '../components';
import { theme } from '../constants';
import { useAppDispatch, useAppNavigation } from '../hooks';
import { text } from '../text';
import { homeIndicatorHeight } from '../utils';

const OrderSuccessful: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 10,
          flexGrow: 1,
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 10,
            paddingVertical: 20,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <components.Image
            source={{
              uri: 'https://george-fx.github.io/dine-hub/11.jpg',
            }}
            style={{
              width: responsiveWidth(100) - 40 - 40 - 40,
              aspectRatio: 1,
              alignSelf: 'center',
            }}
          />
          <text.H2 style={{textAlign: 'center', marginBottom: 14}}>
            Thank you for {'\n'} your order!
          </text.H2>
          <Text
            style={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 16,
              textAlign: 'center',
              color: theme.colors.textColor,
              lineHeight: 16 * 1.5,
            }}
          >
            Your order will be delivered on time. {'\n'} Thank you!
          </Text>
        </View>
      </ScrollView>
    );
  };

  const renderButtons = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: homeIndicatorHeight() > 0 ? 10 : 20,
          paddingTop: 20,
        }}
      >
        <components.Button
          title='Continue Shopping'
          containerStyle={{
            marginBottom: 14,
          }}
          onPress={() => {
            dispatch(setScreen('Menu'));
            navigation.replace('TabNavigator');
          }}
        />
        <components.Button
          title='View orders'
          transparent={true}
          onPress={() => {
            navigation.replace('OrderHistory');
          }}
        />
      </View>
    );
  };

  const renderHomeIndicator = () => {
    return <components.HomeIndicator />;
  };
  return (
    <components.SmartView>
      {renderStatusBar()}
      {renderContent()}
      {renderButtons()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default OrderSuccessful;
