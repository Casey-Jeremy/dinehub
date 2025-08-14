import {View, Text, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';

import {theme} from '../constants';

type Props = PropsWithChildren<{
  onPress?: () => void;
  disabled?: boolean;
}>;

const SwitchButton: React.FC<Props> = ({onPress, disabled}): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        backgroundColor: disabled ? theme.colors.mainTurquoise : '#DCE2E7',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: disabled ? 'flex-end' : 'flex-start',
        padding: 2,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: disabled
            ? theme.colors.white
            : theme.colors.textColor,
          borderRadius: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default SwitchButton;
