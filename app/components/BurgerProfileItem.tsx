import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { svg } from '../../assets/svg';
import { theme } from '../constants';

import SwitchButton from './SwitchButton';

type Props = {text: string; onPress?: () => void; disabled?: boolean};

const BurgerProfileItem: React.FC<Props> = ({
  text,
  onPress,
  disabled,
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 16,
      }}
      // disabled={!onPress}
    >
      <Text
        style={{
          ...theme.fonts.textStyle_14,
          color: text === 'Sign out' ? '#FA5555' : theme.colors.mainColor,
        }}
      >
        {text}
      </Text>
      {text === 'Notifications' && (
        <SwitchButton disabled={disabled} onPress={onPress} />
      )}
      {text === 'Face ID' && (
        <SwitchButton disabled={disabled} onPress={onPress} />
      )}
      {text !== 'Sign out' &&
        text !== 'Support center' &&
        text !== 'Notifications' &&
        text !== 'Face ID' && <svg.ArrowRightSvg />}
    </TouchableOpacity>
  );
};

export default BurgerProfileItem;
