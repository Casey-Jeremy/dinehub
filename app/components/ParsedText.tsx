import React from 'react';
import ParsedTextRN from 'react-native-parsed-text';

type Props = {children: React.ReactNode; style?: object; parse?: any};

import {theme} from '../constants';

const ParsedText: React.FC<Props> = ({children, style, parse}): JSX.Element => {
  return (
    <ParsedTextRN
      style={{
        fontSize: 16,
        color: theme.colors.textColor,
        ...theme.fonts.DMSans_400Regular,
        ...style,
      }}
      parse={parse}
    >
      {children}
    </ParsedTextRN>
  );
};

export default ParsedText;
