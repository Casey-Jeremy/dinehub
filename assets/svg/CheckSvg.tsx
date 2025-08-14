import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const CheckSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={24} height={24} fill='none'>
      <Rect width={24} height={24} fill='#00B0B9' rx={12} />
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M17.333 8 10 15.333 6.667 12'
      />
    </Svg>
  );
};

export default CheckSvg;
