import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { components } from './components';
import { theme } from './constants';
import { useAppNavigation } from './hooks';

const NewPassword: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Reset password' />;
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
      <Text style={{...descriptionStyle}}>Enter new password and confirm.</Text>
    );
  };

  const renderInputField = () => {
    return (
      <React.Fragment>
        <components.InputField
          type='password'
          value={password}
          eyeOffIcon={true}
          placeholder='••••••••'
          secureTextEntry={true}
          containerStyle={{marginBottom: 14}}
          onChangeText={(text) => setPassword(text)}
        />
        <components.InputField
          type='password'
          eyeOffIcon={true}
          value={confirmPassword}
          placeholder='••••••••'
          secureTextEntry={true}
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </React.Fragment>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='change password'
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'ForgotPasswordSentEmail'}],
          });
        }}
      />
    );
  };

  const renderContent = () => {
    const contentContainerStyle = {
      flexGrow: 1,
      marginHorizontal: 20,
      paddingTop: 10,
    };

    const blockStyle = {
      backgroundColor: theme.colors.white,
      paddingVertical: 30,
      paddingHorizontal: 20,
      borderRadius: 10,
    };

    return (
      <ScrollView contentContainerStyle={{...contentContainerStyle}}>
        <View style={{...blockStyle}}>
          {renderDescription()}
          {renderInputField()}
          {renderButton()}
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

export default NewPassword;
