import React, { useEffect, useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { svg } from '@/assets/svg';
import { components } from '../components';
import { theme } from '../constants';
import { useAppDispatch, useAppNavigation, useAppSelector } from '../hooks';

const EditProfile: React.FC = () => {
  const navigation = useAppNavigation();
  const user = useAppSelector((state) => state.userSlice.user);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const data = {email, userName, country};

  const inp1Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp2Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp3Ref = useRef<TextInput>({focus: () => {}} as TextInput);
  const inp4Ref = useRef<TextInput>({focus: () => {}} as TextInput);

  useEffect(() => {
    if (loading) {
      inp1Ref.current.blur();
      inp2Ref.current.blur();
      inp3Ref.current.blur();
    }
  }, [loading]);

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Edit profile' />;
  };

  const renderUserImage = () => {
    return (
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginBottom: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <components.Image
          source={{
            uri: 'https://george-fx.github.io/dine-hub/10.jpg',
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: 50,
          }}
        />
        <View
          style={{
            backgroundColor: theme.colors.mainColor,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
            borderRadius: 50,
            opacity: 0.3,
          }}
        />
        <svg.CameraSvg />
      </TouchableOpacity>
    );
  };

  const renderInputFields = () => {
    return (
      <React.Fragment>
        <components.InputField
          value={userName}
          innerRef={inp1Ref}
          placeholder='Jordan Hebert'
          onChangeText={(text) => setUserName(text)}
          type='username'
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          value={email}
          innerRef={inp2Ref}
          placeholder='jordanhebert@mail.com'
          onChangeText={(text) => setEmail(text)}
          type='email'
          checkIcon={true}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          value={phone}
          innerRef={inp3Ref}
          placeholder='+17123456789'
          onChangeText={(text) => setPhone(text)}
          type='phone'
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          value={country}
          innerRef={inp4Ref}
          placeholder='Chicago, USA'
          onChangeText={(text) => setCountry(text)}
          type='location'
          containerStyle={{marginBottom: 20}}
        />
      </React.Fragment>
    );
  };

  const renderButton = () => {
    return (
      <View>
        <components.Button
          title='save changes'
          loading={loading}
          onPress={() => {
            navigation.goBack();
          }}
          containerStyle={{marginBottom: 14}}
        />
      </View>
    );
  };

  const renderContent = () => {
    const contentContainerStyle = {
      backgroundColor: theme.colors.white,
      marginHorizontal: 20,
      paddingBottom: 30,
      paddingTop: 50,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 10,
      flexGrow: 0,
    };

    return (
      <components.KAScrollView
        contentContainerStyle={{...contentContainerStyle}}
      >
        {renderUserImage()}
        {renderInputFields()}
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

export default EditProfile;
