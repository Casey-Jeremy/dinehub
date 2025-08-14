import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusBtnSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={16} height={16} fill='none'>
      <Path
        stroke='#748BA0'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M8 3.333v9.334M3.333 8h9.334'
      />
    </Svg>
  );
};

export default PlusBtnSvg;
