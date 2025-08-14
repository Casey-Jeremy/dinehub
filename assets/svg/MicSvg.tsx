import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

const MicSvg: React.FC = (): JSX.Element => (
  <Svg width={24} height={24} fill='none'>
    <Rect width={24} height={24} fill='#FFA462' rx={12} />
    <G
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      clipPath='url(#a)'
    >
      <Path d='M12 4.667a2 2 0 0 0-2 2V12a2 2 0 1 0 4 0V6.667a2 2 0 0 0-2-2Z' />
      <Path d='M16.667 10.667V12a4.667 4.667 0 0 1-9.334 0v-1.333M12 16.667v2.666M9.333 19.333h5.334' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M4 4h16v16H4z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MicSvg;
