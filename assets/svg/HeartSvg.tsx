import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  strokeColor?: string;
  fillColor?: string;
}>;

const HeartSvg: React.FC<Props> = ({fillColor, strokeColor = '#4A5F73'}) => {
  return (
    <Svg width={16} height={16} fill='none'>
      <Path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.893 3.073a3.667 3.667 0 0 0-5.186 0L8 3.78l-.707-.707A3.668 3.668 0 0 0 2.107 8.26l.706.707L8 14.153l5.187-5.186.706-.707a3.667 3.667 0 0 0 0-5.187v0Z'
      />
    </Svg>
  );
};

export default HeartSvg;
