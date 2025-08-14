import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { components } from './components';
import { theme } from './constants';
import { useAppNavigation } from './hooks';
import { text } from './text';
import { homeIndicatorHeight } from './utils';

const SignUpaccountCreated: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderContent = () => {
    const contentContainerStyle: ViewStyle = {
      flexGrow: 1,
      backgroundColor: theme.colors.white,
      marginHorizontal: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    };

    const uri = 'https://george-fx.github.io/dine-hub/05.jpg';

    return (
      <ScrollView contentContainerStyle={{...contentContainerStyle}}>
        <components.Image
          source={{uri}}
          style={{
            width: responsiveWidth(100) - 40 - 40 - 40,
            marginBottom: 20,
            aspectRatio: 1,
          }}
        />
        <text.H2 style={{marginBottom: 14}}>Account Created!</text.H2>
        <text.T16 style={{textAlign: 'center'}}>
          Your account had been created{'\n'}successfully.
        </text.T16>
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='Get started'
        containerStyle={{
          marginBottom: homeIndicatorHeight() === 0 ? 20 : 10,
          marginHorizontal: 20,
          marginTop: 20,
        }}
        onPress={() => navigation.replace('SignIn')}
      />
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

export default SignUpaccountCreated;
