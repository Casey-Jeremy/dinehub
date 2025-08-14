import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CameraSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={30} height={30} fill='none'>
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M28.75 23.75a2.5 2.5 0 0 1-2.5 2.5H3.75a2.5 2.5 0 0 1-2.5-2.5V10a2.5 2.5 0 0 1 2.5-2.5h5l2.5-3.75h7.5l2.5 3.75h5a2.5 2.5 0 0 1 2.5 2.5v13.75Z'
      />
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M15 21.25a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z'
      />
    </Svg>
  );
};

export default CameraSvg;
