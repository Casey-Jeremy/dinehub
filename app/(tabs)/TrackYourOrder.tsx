import React from 'react';
import { ScrollView, View } from 'react-native';

import { components } from '../components';
import { theme } from '../constants';
import { useAppNavigation } from '../hooks';
import { text } from '../text';

const TrackYourOrder: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Track your order' />;
  };

  const renderDescription = () => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: theme.colors.mainTurquoise,
          borderRadius: 10,
          marginHorizontal: 20,
          padding: 20,
          marginBottom: 10,
        }}
      >
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 14}}
        >
          <text.T14 style={{marginRight: 14, textTransform: 'none'}}>
            Your order:
          </text.T14>
          <text.H5 style={{color: theme.colors.mainTurquoise}}>456654</text.H5>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <text.T14 style={{marginRight: 14, textTransform: 'none'}}>
            Date:
          </text.T14>
          <text.H5 style={{color: theme.colors.mainTurquoise}}>
            Aug 31 at 8:32 pm
          </text.H5>
        </View>
      </View>
    );
  };

  const renderOrderStatus = () => {
    return (
      <View
        style={{
          backgroundColor: theme.colors.white,
          marginHorizontal: 20,
          borderRadius: 10,
          padding: 30,
        }}
      >
        <components.OrderStatus
          title='Order confirmed'
          description='Your order has been confirmed'
          status={true}
          containerStyle={{marginBottom: 7}}
        />
        <components.OrderStatus
          title='Order is being cooked'
          description='Estimated for 9:12 pm'
          status={true}
          containerStyle={{marginBottom: 7}}
        />
        <components.OrderStatus
          title='Courier delivering'
          description='Estimated for 9:12 pm'
          status={false}
          containerStyle={{marginBottom: 7}}
        />
        <components.OrderStatus
          title='Receiving'
          description='Estimated for 9:32 pm'
          status={false}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingTop: 10}}
        showsVerticalScrollIndicator={false}
      >
        {renderDescription()}
        {renderOrderStatus()}
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingBottom: 10, paddingTop: 20}}>
        <components.Button title='Chat support' onPress={() => {}} />
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

export default TrackYourOrder;
