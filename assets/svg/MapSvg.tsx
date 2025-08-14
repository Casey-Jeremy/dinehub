import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const MapSvg: React.FC = (): JSX.Element => (
  <Svg width={16} height={16} fill='none'>
    <G
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      clipPath='url(#a)'
    >
      <Path d='M.667 4v10.667L5.333 12l5.334 2.667L15.333 12V1.334L10.667 4 5.333 1.333.667 4ZM5.333 1.333V12M10.667 4v10.667' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MapSvg;
