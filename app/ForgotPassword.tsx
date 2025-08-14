import React, { useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';

import { components } from './components';
import { theme } from './constants';
import { useAppNavigation } from './hooks';

const ForgotPassword: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [email, setEmail] = useState<string>('');

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Forgot password' />;
  };

  const renderDescription = () => {
    const descriptionStyle = {
      ...theme.fonts.DMSans_400Regular,
      fontSize: 16,
      lineHeight: 16 * 1.7,
      color: theme.colors.textColor,
      marginBottom: 30,
    };

    return (
      <Text style={{...descriptionStyle}}>
        Please enter your email address. You will receive a code to create a new
        password via email.
      </Text>
    );
  };

  const renderInputField = () => {
    return (
      <React.Fragment>
        <components.InputField
          type='email'
          value={email}
          placeholder='jordanhebert@mail.com'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setEmail(text)}
        />
      </React.Fragment>
    );
  };

  const renderContent = () => {
    const styles: ViewStyle = {
      flexGrow: 1,
      paddingHorizontal: 20,
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
      marginTop: 10,
    };

    const blockStyle = {
      backgroundColor: theme.colors.white,
      paddingVertical: 30,
      paddingHorizontal: 20,
      borderRadius: 10,
    };

    return (
      <components.KAScrollView contentContainerStyle={{...styles}}>
        <View style={{...blockStyle}}>
          {renderDescription()}
          {renderInputField()}
          {renderButton()}
        </View>
      </components.KAScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='send'
        onPress={() => {
          navigation.navigate('NewPassword');
        }}
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
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default ForgotPassword;
