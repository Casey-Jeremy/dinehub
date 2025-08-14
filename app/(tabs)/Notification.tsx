import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { svg } from '@/assets/svg';
import { components } from '../components';
import { theme } from '../constants';
import BottomTabBar from '../navigation/BottomTabBar';

const notifications = [
  {
    id: 1,
    title: 'Order Out for Delivery',
    description:
      'Your order (#12345) is out for delivery. Keep an eye out for our friendly delivery partner.',
    date: 'Feb 26 at 12:36 pm',
    icon: svg.CheckSvg,
  },
  {
    id: 2,
    title: 'Limited-Time Deal',
    description:
      'Hurry! Enjoy 20% off all main courses this weekend. Treat yourself to a delicious meal at a discounted price.',
    status: 'alert',
    date: 'Feb 26 at 12:36 pm',
    icon: svg.GiftSvg,
  },
  {
    id: 3,
    title: 'Reservation Confirmed',
    description:
      'Your reservation for 2 people on Aug 26 at 8:00 pm has been successfully confirmed.',
    status: 'rejected',
    date: 'Feb 26 at 12:36 pm',
    icon: svg.CheckSvg,
  },
  {
    id: 4,
    title: 'Live Music Night',
    description:
      'Join us this Friday for a live music night featuring DJ Mega. Reserve your table for an evening of great food and entertainment',
    date: 'Feb 26 at 12:36 pm',
    icon: svg.MicSvg,
  },
];

const Notification: React.FC = (): JSX.Element => {
  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        title='Notifications'
        basket={true}
        user={true}
        userImage={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 10,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((item, index, array) => {
          const last = array.length - 1 === index;
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: '100%',
                backgroundColor: theme.colors.white,
                borderRadius: 10,
                padding: 20,
                marginBottom: last ? 0 : 14,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 14,
                }}
              >
                <View style={{marginRight: 8}}>
                  <item.icon />
                </View>
                <Text
                  style={{
                    ...theme.fonts.DMSans_500Medium,
                    fontSize: 14,
                    lineHeight: 14 * 1.2,
                    color: theme.colors.mainColor,
                    textTransform: 'capitalize',
                  }}
                >
                  {item.title}
                </Text>
              </View>
              <Text
                style={{
                  ...theme.fonts.DMSans_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  color: theme.colors.textColor,
                  marginBottom: 14,
                }}
              >
                {item.description}
              </Text>
              <Text
                style={{
                  ...theme.fonts.DMSans_400Regular,
                  fontSize: 12,
                  lineHeight: 12 * 1.5,
                  color: theme.colors.textColor,
                }}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default Notification;
