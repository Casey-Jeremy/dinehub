import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowRightSvg: React.FC = () => {
  return (
    <Svg width={6} height={11} fill='none'>
      <Path
        stroke='#0C1D2E'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='m1 9.5 4-4-4-4'
      />
    </Svg>
  );
};

export default ArrowRightSvg;
