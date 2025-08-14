import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const KeySvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={16} height={16} fill='none'>
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='m14 1.333-1.333 1.334m0 0 2 2L12.333 7l-2-2m2.334-2.333L10.333 5m-2.74 2.74a3.667 3.667 0 1 1-5.185 5.185 3.667 3.667 0 0 1 5.185-5.184V7.74Zm0 0L10.333 5'
      />
    </Svg>
  );
};

export default KeySvg;
