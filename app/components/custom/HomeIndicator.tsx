import type { PropsWithChildren } from 'react';
import React from 'react';
import { View, ViewStyle } from 'react-native';

import { homeIndicatorHeight } from '../../../app/utils';
import { theme } from '../../constants';

type Props = PropsWithChildren<{
  backgroundColor?: string;
  containerStyle?: ViewStyle;
}>;

const HomeIndicator: React.FC<Props> = ({
  backgroundColor,
  containerStyle,
}): JSX.Element => {
  const height = homeIndicatorHeight();
  return (
    <View
      style={{
        height: height,
        backgroundColor: backgroundColor ?? theme.colors.neonWhite,
        ...containerStyle,
      }}
    />
  );
};

export default HomeIndicator;
