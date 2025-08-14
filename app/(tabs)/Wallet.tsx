import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { svg } from '../../assets/svg';
import { components } from '../components';
import { theme } from '../constants';
import { useAppNavigation } from '../hooks';

const cards = [
  {
    id: 1,
    image: 'https://george-fx.github.io/dine-hub/cards/01.png',
  },
  {
    id: 2,
    image: 'https://george-fx.github.io/dine-hub/cards/02.png',
  },
];

const Wallet: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Wallet' />;
  };

  const renderCards = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
          marginTop: 10,
          marginBottom: 20,
        }}
        pagingEnabled={true}
        style={{flexGrow: 0}}
      >
        {cards.map((item, index) => {
          const last = index === cards.length - 1;
          return (
            <components.Image
              key={index}
              source={{uri: item.image}}
              style={{
                width: responsiveWidth(90) - 40,
                marginRight: last ? 20 : 14,
                aspectRatio: 1.64,
              }}
              imageStyle={{
                borderRadius: 10,
              }}
            />
          );
        })}
      </ScrollView>
    );
  };

  const renderPaymentMethods = () => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <TouchableOpacity
          style={{
            height: 56,
            backgroundColor: theme.colors.white,
            borderRadius: 10,
            marginBottom: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <components.Image
            source={{uri: 'https://george-fx.github.io/dine-hub/logos/01.png'}}
            style={{
              width: 61.77,
              height: 16,
            }}
          />
          <svg.PlusBtnSvg />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 56,
            backgroundColor: theme.colors.white,
            borderRadius: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <components.Image
            source={{uri: 'https://george-fx.github.io/dine-hub/logos/02.png'}}
            style={{
              width: 99.05,
              height: 20,
            }}
          />
          <svg.PlusBtnSvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {renderCards()}
        {renderPaymentMethods()}
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingBottom: 10, paddingTop: 20}}>
        <components.Button
          title='+ add new card'
          containerStyle={{marginBottom: 10}}
          onPress={() => {
            navigation.navigate('AddANewCard');
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
      {renderHeader()}
      {renderContent()}
      {renderButton()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default Wallet;
