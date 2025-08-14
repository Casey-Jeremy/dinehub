import React, { useRef, useState } from 'react';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import ParsedText from 'react-native-parsed-text';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import { components } from './components';
import { sizes, theme } from './constants';
import { useAppNavigation } from './hooks';

const ConfirmationCode: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const inp1Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp2Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp3Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp4Ref = useRef<TextInput>({focus: () => {}} as TextInput);

  const [inp1, setInp1] = useState<string>('');
  const [inp2, setInp2] = useState<string>('');
  const [inp3, setInp3] = useState<string>('');
  const [inp4, setInp4] = useState<string>('');

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Verify your phone number' />;
  };

  const renderDescription = () => {
    return (
      <View
        style={{
          backgroundColor: theme.colors.white,
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          paddingTop: 30,
          paddingBottom: 14,
          paddingHorizontal: 20,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
          }}
        >
          Enter your OTP code here.
        </Text>
      </View>
    );
  };

  const renderCodeInput = () => {
    const inputStyle: object = {
      textAlign: 'center',
      width: (sizes.width - 40) / 4 - 10,
      height: (sizes.width - 40) / 4 - 20,
      backgroundColor: theme.colors.white,
      fontSize: responsiveFontSize(2.7),
      borderWidth: 1,
      borderColor: 'rgba(0, 176, 185, .3)',
      color: theme.colors.mainColor,
      ...theme.fonts.DMSans_400Regular,
    };

    const containerStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    };

    return (
      <View style={{...containerStyle}}>
        {/* Input 01 */}
        <TextInput
          ref={inp1Ref}
          maxLength={1}
          style={{...inputStyle}}
          keyboardType='number-pad'
          onChangeText={(text) => {
            setInp1(text);
            if (text !== '') {
              inp2Ref.current.focus();
            } else if (text === '') {
              inp1Ref.current.focus();
            }
          }}
        />
        {/* Input 02 */}
        <TextInput
          ref={inp2Ref}
          maxLength={1}
          style={{...inputStyle}}
          keyboardType='number-pad'
          onChangeText={(text) => {
            setInp2(text);
            if (text !== '') {
              inp3Ref.current.focus();
            } else if (text === '') {
              inp1Ref.current.focus();
            }
          }}
        />
        {/* Input 03 */}
        <TextInput
          ref={inp3Ref}
          maxLength={1}
          style={{...inputStyle}}
          keyboardType='number-pad'
          onChangeText={(text) => {
            setInp3(text);
            if (text !== '') {
              inp4Ref.current.focus();
            } else if (text === '') {
              inp2Ref.current.focus();
            }
          }}
        />
        {/* Input 04 */}
        <TextInput
          ref={inp4Ref}
          maxLength={1}
          style={{...inputStyle}}
          keyboardType='number-pad'
          onChangeText={(text) => {
            setInp4(text);
            if (text === '') {
              inp3Ref.current.focus();
            }
          }}
        />
      </View>
    );
  };

  const renderText = () => {
    return (
      <ParsedText
        style={{
          ...theme.fonts.DMSans_400Regular,
          fontSize: 16,
          marginBottom: 20,
          color: theme.colors.textColor,
        }}
        parse={[
          {
            pattern: /Resend./,
            style: {color: theme.colors.mainTurquoise},
            onPress: () => {},
          },
        ]}
      >
        Didn’t receive the OTP? Resend.
      </ParsedText>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='verify'
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'SignUpaccountCreated'}],
          });
        }}
      />
    );
  };

  const renderBottomBlock = () => {
    const containerStyle: ViewStyle = {
      backgroundColor: theme.colors.white,
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,
      paddingBottom: 30,
      paddingHorizontal: 20,
      paddingTop: 14,
    };

    return (
      <View style={{...containerStyle}}>
        {renderText()}
        {renderButton()}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 13}}
      >
        {renderDescription()}
        {renderCodeInput()}
        {renderBottomBlock()}
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

export default ConfirmationCode;
