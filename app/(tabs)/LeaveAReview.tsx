import React from 'react';
import { Text } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { theme } from '..//constants';
import { components } from '../components';
import { text } from '../text';

const LeaveAReview: React.FC = (): JSX.Element => {
  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Leave a review' />;
  };

  const renderImage = () => {
    return (
      <components.Image
        source={{uri: 'https://george-fx.github.io/dine-hub/07.jpg'}}
        style={{
          width: responsiveWidth(100) - 176,
          aspectRatio: 1,
          alignSelf: 'center',
          marginBottom: 10,
        }}
      />
    );
  };

  const renderTitle = () => {
    return (
      <text.H2
        style={{
          textAlign: 'center',
          marginBottom: 14,
        }}
      >
        Please rate the quality of service for the order!
      </text.H2>
    );
  };

  const renderRatingStars = () => {
    return (
      <components.RatingStars
        containerStyle={{
          marginBottom: 20,
        }}
      />
    );
  };

  const renderDescription = () => {
    return (
      <Text
        style={{
          marginBottom: 30,
          ...theme.fonts.DMSans_400Regular,
          fontSize: 16,
          color: theme.colors.textColor,
          textAlign: 'center',
          lineHeight: 16 * 1.7,
        }}
      >
        Your comments and suggestions help us improve the service quality
        better!
      </Text>
    );
  };

  const renderInputField = () => {
    return (
      <components.InputFieldBig
        containerStyle={{
          marginBottom: 20,
        }}
      />
    );
  };

  const renderButton = () => {
    return <components.Button title='Send review' />;
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{
          backgroundColor: theme.colors.white,
          flexGrow: 1,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 10,
          marginVertical: 10,
          paddingVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {renderImage()}
        {renderRatingStars()}
        {renderTitle()}
        {renderDescription()}
        {renderInputField()}
        {renderButton()}
      </components.KAScrollView>
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

export default LeaveAReview;
