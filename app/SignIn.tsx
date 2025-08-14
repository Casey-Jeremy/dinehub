import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import { svg } from '../assets/svg';
import { components } from './components';
import { theme } from './constants';
import { useAppNavigation } from './hooks';
import { text } from './text';
import { homeIndicatorHeight } from './utils';

const SignIn: React.FC = () => {
  const navigation = useAppNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderWelcome = () => {
    return <text.H1 style={{marginBottom: 14}}>Welcome Back!</text.H1>;
  };

  const renderDescription = () => {
    return <text.T16 style={{marginBottom: 30}}>Sign in to continue</text.T16>;
  };

  const renderInputFields = () => {
    return (
      <React.Fragment>
        <components.InputField
          type='email'
          value={email}
          checkIcon={true}
          placeholder='jordanhebert@mail.com'
          onChangeText={(text) => setEmail(text)}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          type='password'
          value={password}
          eyeOffIcon={true}
          secureTextEntry={true}
          placeholder='••••••••'
          onChangeText={(text) => setPassword(text)}
          containerStyle={{marginBottom: 20}}
        />
      </React.Fragment>
    );
  };

  const renderForgotPassword = () => {
    const textStyles: TextStyle = {
      ...theme.fonts.textStyle_14,
      color: theme.colors.mainTurquoise,
    };

    return (
      <Text
        onPress={() => router.push('/ForgotPassword')}
        style={{...textStyles}}
      >
        Forgot password?
      </Text>
    );
  };

  const renderRememberMe = () => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => setRememberMe(!rememberMe)}
      >
        <View
          style={{
            width: 18,
            height: 18,
            backgroundColor: '#E6EFF8',
            borderRadius: 4,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {rememberMe && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                backgroundColor: theme.colors.mainTurquoise,
              }}
            />
          )}
        </View>
        <text.T14>Remember me</text.T14>
      </TouchableOpacity>
    );
  };

  const renderAdditionalButtons = () => {
    const containerStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 40,
    };

    return (
      <View style={{...containerStyle}}>
        {renderRememberMe()}
        {renderForgotPassword()}
      </View>
    );
  };

  const renderContent = () => {
    const styles: ViewStyle = {
      flexGrow: 1,
      backgroundColor: theme.colors.white,
      paddingHorizontal: 20,
      marginHorizontal: 20,
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
      justifyContent: 'center',
      marginTop: 10,
    };

    return (
      <components.KAScrollView contentContainerStyle={{...styles}}>
        {renderWelcome()}
        {renderDescription()}
        {renderInputFields()}
        {renderAdditionalButtons()}
        {renderButton()}
        {renderDonTHaveAccount()}
      </components.KAScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='Sign in'
        containerStyle={{marginBottom: 20}}
        onPress={() => {
          router.push('./navigation/TabNavigator');
        }}
      />
    );
  };

  const renderDonTHaveAccount = () => {
    return (
      <components.ParsedText
        parse={[
          {
            pattern: /Sign up./,
            style: {color: theme.colors.mainTurquoise},
            onPress: () => router.push('./SignUp'),
          },
        ]}
      >
        Don’t have an account? Sign up.
      </components.ParsedText>
    );
  };

  const renderFooter = () => {
    const styles: ViewStyle = {
      backgroundColor: theme.colors.white,
      width: '48%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    };

    const containerStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: homeIndicatorHeight() === 0 ? 20 : 10,
    };

    return (
      <View style={{...containerStyle}}>
        <View style={{...styles}}>
          <svg.FacebookSvg />
        </View>
        <View style={{...styles}}>
          <svg.GoogleSvg />
        </View>
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
      {renderFooter()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default SignIn;
