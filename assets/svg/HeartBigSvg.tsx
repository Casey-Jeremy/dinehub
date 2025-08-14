import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  strokeColor?: string;
  fillColor?: string;
}>;

const HeartBigSvg: React.FC<Props> = ({
  strokeColor,
  fillColor,
}): JSX.Element => {
  return (
    <Svg width={24} height={27} fill='none'>
      <Path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M20.84 5.064a5.495 5.495 0 0 0-1.785-1.299 5.113 5.113 0 0 0-2.105-.456c-.723 0-1.438.155-2.105.456a5.495 5.495 0 0 0-1.785 1.3L12 6.217l-1.06-1.154C9.908 3.941 8.509 3.31 7.05 3.31s-2.858.63-3.89 1.754S1.549 7.711 1.549 9.3s.58 3.112 1.611 4.236l1.06 1.154L12 23.162l7.78-8.472 1.06-1.154a6.049 6.049 0 0 0 1.193-1.944 6.453 6.453 0 0 0 .419-2.292c0-.787-.143-1.566-.42-2.293a6.048 6.048 0 0 0-1.192-1.943v0Z'
      />
    </Svg>
  );
};

export default HeartBigSvg;
