import React, { useRef, useState } from 'react';
import { TextInput, View, ViewStyle } from 'react-native';

import { svg } from '../assets/svg';
import { components } from './components';
import { theme } from './constants';
import { useAppNavigation } from './hooks';
import { text } from './text';
import { homeIndicatorHeight } from './utils';

const SignUp: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const inp1Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp2Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp3Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp4Ref = useRef<TextInput>({focus: () => {}} as TextInput);

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderMainText = () => {
    return <text.H1 style={{marginBottom: 30}}>Sign up</text.H1>;
  };

  const renderInputFields = () => {
    return (
      <React.Fragment>
        <components.InputField
          type='username'
          innerRef={inp1Ref}
          value={userName}
          placeholder='Jordan Hebert'
          containerStyle={{marginBottom: 14}}
          onChangeText={(text) => setUserName(text)}
        />
        <components.InputField
          type='email'
          value={email}
          checkIcon={true}
          innerRef={inp2Ref}
          placeholder='jordanhebert@mail.com'
          containerStyle={{marginBottom: 14}}
          onChangeText={(text) => setEmail(text)}
        />
        <components.InputField
          type='password'
          value={password}
          eyeOffIcon={true}
          innerRef={inp3Ref}
          placeholder='••••••••'
          secureTextEntry={true}
          containerStyle={{marginBottom: 14}}
          onChangeText={(text) => setPassword(text)}
        />
        <components.InputField
          type='password'
          eyeOffIcon={true}
          innerRef={inp4Ref}
          value={confirmPassword}
          placeholder='••••••••'
          secureTextEntry={true}
          containerStyle={{marginBottom: 14}}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </React.Fragment>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='Sign up'
        containerStyle={{marginBottom: 20}}
        onPress={() => {
          navigation.navigate('VerifyYourPhoneNumber');
        }}
      />
    );
  };

  const renderAlreadyHaveAccount = () => {
    return (
      <components.ParsedText
        parse={[
          {
            pattern: /Sign in./,
            style: {color: theme.colors.mainTurquoise},
            onPress: () => navigation.replace('SignIn'),
          },
        ]}
      >
        Already have an account? Sign in.
      </components.ParsedText>
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
        {renderMainText()}
        {renderInputFields()}
        {renderButton()}
        {renderAlreadyHaveAccount()}
      </components.KAScrollView>
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

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: homeIndicatorHeight() === 0 ? 20 : 10,
        }}
      >
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

export default SignUp;
