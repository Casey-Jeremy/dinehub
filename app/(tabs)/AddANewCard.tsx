import React from 'react';
import { ScrollView, View } from 'react-native';

import { components } from '../components';
import { theme } from '../constants';

const AddANewCard: React.FC = () => {
  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Add a new card' />;
  };

  const renderLogos = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 30,
        }}
      >
        <components.Image
          source={{
            uri: 'https://george-fx.github.io/dine-hub/logos/03.png',
          }}
          style={{
            width: 39.43,
            height: 12,
            marginHorizontal: 9,
          }}
        />
        <components.Image
          source={{
            uri: 'https://george-fx.github.io/dine-hub/logos/04.png',
          }}
          style={{
            width: 25.93,
            height: 16,
            marginHorizontal: 9,
          }}
        />
      </View>
    );
  };

  const renderInputFields = () => {
    return (
      <View>
        <components.InputField
          type='username'
          placeholder='Jordan Hebert'
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          type='creditCard'
          placeholder='1234 5678 9012 3456'
          containerStyle={{marginBottom: 14}}
        />
        <View style={{marginBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <components.InputField
              type='expirationDate'
              placeholder='11/28'
              containerStyle={{width: '47%'}}
            />
            <components.InputField
              type='cvv'
              placeholder='•••'
              secureTextEntry={true}
              maxLength={3}
              containerStyle={{width: '47%'}}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderButtons = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <components.Button
          title='cancel'
          containerStyle={{width: '47%'}}
          onPress={() => {}}
          transparent={true}
        />
        <components.Button
          title='save'
          containerStyle={{width: '47%'}}
          onPress={() => {}}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          marginHorizontal: 20,
          flexGrow: 1,
          paddingTop: 12,
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            paddingHorizontal: 20,
            paddingTop: 30,
            paddingBottom: 30,
            borderRadius: 10,
          }}
        >
          {renderLogos()}
          {renderInputFields()}
          {renderButtons()}
        </View>
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

export default AddANewCard;
