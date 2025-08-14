import React, { useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

import { components } from './components';
import { theme } from './constants';
import { useAppNavigation } from './hooks';
import { text } from './text';

const VerifyYourPhoneNumber: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const inp1Ref = useRef<TextInput>({focus: () => {}} as TextInput);

  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Verify your phone number' />;
  };

  const renderButton = () => {
    return (
      <components.Button
        title='confirm'
        containerStyle={{marginBottom: 20}}
        onPress={() => {
          navigation.navigate('ConfirmationCode');
        }}
      />
    );
  };

  const renderDescription = () => {
    return (
      <text.T16 style={{marginBottom: 30}}>
        We have sent you an SMS with a code to number +17 0123456789.
      </text.T16>
    );
  };

  const renderInputField = () => {
    return (
      <View>
        <components.InputField
          type='phone'
          innerRef={inp1Ref}
          value={phoneNumber}
          placeholder='+380974906993'
          keyboardType='phone-pad'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 30,
          marginHorizontal: 20,
          backgroundColor: theme.colors.white,
          borderRadius: 10,
        }}
        style={{flexGrow: 0}}
      >
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

export default VerifyYourPhoneNumber;
