import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { text } from '../../app/text';
import { svg } from '../../assets/svg';

type Props = PropsWithChildren<{
  title: string;
  onPress?: () => void;
  containerStyle?: object;
}>;

const BlockHeading: React.FC<Props> = ({title, onPress, containerStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...containerStyle,
      }}
    >
      <text.H4>{title}</text.H4>
      {onPress && (
        <TouchableOpacity
          onPress={onPress}
          style={{flexDirection: 'row', alignItems: 'center'}}
        >
          <svg.ViewAllSvg />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BlockHeading;
