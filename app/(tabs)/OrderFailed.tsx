import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { setScreen } from '../../src/store/slices/tabSlice';
import { components } from '../components';
import { theme } from '../constants';
import { useAppDispatch, useAppNavigation } from '../hooks';
import { text } from '../text';
import { homeIndicatorHeight } from '../utils';

const OrderFailed: React.FC = (): JSX.Element => {
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
              uri: 'https://george-fx.github.io/dine-hub/12.jpg',
            }}
            style={{
              width: responsiveWidth(100) - 40 - 40 - 40,
              aspectRatio: 1,
              alignSelf: 'center',
            }}
          />
          <text.H2 style={{textAlign: 'center', marginBottom: 14}}>
            Sorry! Your order{'\n'}has failed!
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
            Something went wrong. Please try {'\n'} again to continue your
            order.
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
          title='Try again'
          containerStyle={{
            marginBottom: 14,
          }}
          onPress={() => {
            dispatch(setScreen('Menu'));
            navigation.replace('TabNavigator');
          }}
        />
        <components.Button
          title='Go back to the order'
          transparent={true}
          onPress={() => {
            dispatch(setScreen('Order'));
            navigation.replace('TabNavigator');
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

export default OrderFailed;
