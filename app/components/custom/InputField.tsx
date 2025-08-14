import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { svg } from '../../../assets/svg';
import { theme } from '../../constants';

type Props = {
  containerStyle?: object;
  onChangeText?: (text: string) => void;
  value?: string;
  type: string;
  check?: boolean;
  label?: string;
  blurOnSubmit?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  eyeOffIcon?: boolean;
  checkIcon?: boolean;
  icon?: JSX.Element;
  innerRef?: any;
  maxLength?: number;
};

const InputField: React.FC<Props> = ({
  placeholder,
  containerStyle,
  secureTextEntry,
  keyboardType,
  checkIcon,
  eyeOffIcon = false,
  onChangeText,
  blurOnSubmit,
  label,
  value,
  icon,
  type,
  innerRef,
  maxLength,
}): JSX.Element | null => {
  return (
    <View
      style={{
        padding: 5,
        width: '100%',
        borderColor: '#DBE9F5',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E9F3F6',
        borderRadius: 10,
        ...containerStyle,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: theme.colors.mainTurquoise,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {type === 'cvv' && <svg.KeySvg />}
        {type === 'email' && <svg.MailSvg />}
        {type === 'password' && <svg.KeySvg />}
        {type === 'location' && <svg.MapSvg />}
        {type === 'username' && <svg.UserSvg />}
        {type === 'date' && <svg.CalendarSvg />}
        {type === 'promocode' && <svg.TagSvg />}
        {type === 'phone' && <svg.SmartphoneSvg />}
        {type === 'creditCard' && <svg.CreditCardSvg />}
        {type === 'expirationDate' && <svg.CalendarSvg />}
      </View>
      <TextInput
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: 16,
          marginLeft: 14,
          color: theme.colors.mainColor,
          ...theme.fonts.DMSans_400Regular,
        }}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'#A7AFB7'}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        ref={innerRef}
        blurOnSubmit={blurOnSubmit}
        maxLength={maxLength}
      />
      {label && (
        <View
          style={{
            position: 'absolute',
            top: -12,
            left: 10,
            paddingHorizontal: 10,
            backgroundColor: theme.colors.white,
          }}
        >
          <Text
            style={{
              ...theme.fonts.DMSans_500Medium,
              fontSize: 12,
              textTransform: 'uppercase',
              color: theme.colors.textColor,
              lineHeight: 12 * 1.7,
            }}
          >
            {label}
          </Text>
        </View>
      )}
      {checkIcon && (
        <View style={{paddingHorizontal: 20}}>
          <svg.InputCheckSvg />
        </View>
      )}
      {eyeOffIcon && (
        <TouchableOpacity style={{paddingHorizontal: 20}}>
          <svg.EyeOffSvg />
        </TouchableOpacity>
      )}
      {icon && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
