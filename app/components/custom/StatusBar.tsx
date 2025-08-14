import type { PropsWithChildren } from 'react';
import React from 'react';
import { StatusBar as StatusBarRN, View, ViewStyle } from 'react-native';

import { statusBarHeight } from '../../../app/utils';
import { theme } from '../../constants';

type Props = PropsWithChildren<{
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content';
  containerStyle?: ViewStyle;
}>;

const StatusBar: React.FC<Props> = ({
  backgroundColor,
  barStyle,
  containerStyle,
}): JSX.Element => {
  const height = statusBarHeight();

  return (
    <View
      style={{
        height: height,
        backgroundColor: backgroundColor ?? theme.colors.neonWhite,
        ...containerStyle,
      }}
    >
      <StatusBarRN
        backgroundColor={theme.colors.transparent}
        barStyle={barStyle ?? 'dark-content'}
        translucent={true}
      />
    </View>
  );
};

export default StatusBar;
