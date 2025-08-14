import React from 'react';
import { View } from 'react-native';
import {
  responsiveWidth
} from 'react-native-responsive-dimensions';
import { useGetPromocodesQuery } from '../../src/store/slices/apiSlice';

import { components } from '../components';
import { theme } from '../constants';
import { text } from '../text';
import { homeIndicatorHeight } from '../utils';

const Promocodes: React.FC = (): JSX.Element => {
  const {data, error, isLoading} = useGetPromocodesQuery();

  let promocodes = data instanceof Array ? data : [];
  // promocodes = [];

  const indicatorHeight = homeIndicatorHeight();

  if (isLoading) {
    return <components.Loader />;
  }

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Promocodes & gift cards' />;
  };

  const renderEmptyList = () => {
    if (promocodes?.length === 0) {
      return (
        <components.KAScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: theme.colors.white,
            marginHorizontal: 20,
            borderRadius: 10,
            marginVertical: 10,
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <components.Image
            source={{
              uri: 'https://george-fx.github.io/dine-hub/06.jpg',
            }}
            style={{
              width: responsiveWidth(100) - 80,
              aspectRatio: 1,
            }}
          />
          <text.H2
            style={{
              textAlign: 'center',
              marginBottom: 14,
            }}
          >
            You don’t have{'\n'}promocodes yet!
          </text.H2>
          <text.T16 style={{textAlign: 'center', marginBottom: 30}}>
            Stay tuned for and discounts to {'\n'}enhance your dining
            experience.
          </text.T16>
          <components.InputField
            type='promocode'
            placeholder='Add new coupon'
            containerStyle={{
              marginBottom: 20,
            }}
          />
          <components.Button title='add promocode' />
        </components.KAScrollView>
      );
    }

    return null;
  };

  const renderAddPromocodeInput = () => {
    if (promocodes?.length > 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: indicatorHeight > 0 ? 10 : 20,
          }}
        >
          <components.InputField
            type='promocode'
            placeholder='Add new coupon'
            containerStyle={{
              width: '65%',
              marginRight: 10,
            }}
          />
          <components.Button
            title='+ add'
            containerStyle={{
              flex: 1,
              width: responsiveWidth(40),
            }}
          />
        </View>
      );
    }

    return null;
  };

  const renderCodes = () => {
    return (
      <View style={{marginBottom: 30}}>
        {promocodes?.map((item, index) => {
          const isLast = index === promocodes.length - 1;
          return (
            <components.PromocodeItem
              item={item}
              key={item.id}
              isLast={isLast}
            />
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    if (promocodes?.length > 0) {
      return (
        <components.KAScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingTop: 10,
          }}
        >
          {renderCodes()}
          {renderAddPromocodeInput()}
        </components.KAScrollView>
      );
    }

    return null;
  };

  const renderHomeIndicator = () => {
    return <components.HomeIndicator />;
  };

  return (
    <components.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderEmptyList()}
      {renderContent()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default Promocodes;
