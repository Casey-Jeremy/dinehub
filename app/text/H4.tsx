import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';

import { theme } from '../constants';

type Props = PropsWithChildren<{
  style?: object;
  numberOfLines?: number;
  children: React.ReactNode;
}>;

const H4: React.FC<Props> = ({children, numberOfLines, style}): JSX.Element => {
  return (
    <Text
      style={{
        ...theme.fonts.H4,
        color: theme.colors.mainColor,
        textTransform: 'capitalize',
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H4;
