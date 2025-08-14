import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CopySvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={20} height={20} fill='none'>
      <Path
        fill='#748BA0'
        fillOpacity={0.15}
        stroke='#748BA0'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M16.667 7.5h-7.5c-.92 0-1.667.746-1.667 1.667v7.5c0 .92.746 1.666 1.667 1.666h7.5c.92 0 1.666-.746 1.666-1.666v-7.5c0-.92-.746-1.667-1.666-1.667Z'
      />
      <Path
        stroke='#748BA0'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M4.167 12.5h-.834a1.667 1.667 0 0 1-1.666-1.667v-7.5a1.667 1.667 0 0 1 1.666-1.666h7.5A1.667 1.667 0 0 1 12.5 3.333v.834'
      />
    </Svg>
  );
};

export default CopySvg;
