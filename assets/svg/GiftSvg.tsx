import * as React from 'react';
import Svg, {Rect, G, Path, Defs, ClipPath} from 'react-native-svg';

const GiftSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={24} height={24} fill='none'>
      <Rect width={24} height={24} fill='#FA5555' rx={12} />
      <G
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        clipPath='url(#a)'
      >
        <Path d='M17.333 12v6.667H6.667V12M18.667 8.667H5.333V12h13.334V8.667ZM12 18.667v-10M12 8.667H9a1.667 1.667 0 0 1 0-3.334c2.333 0 3 3.334 3 3.334ZM12 8.667h3a1.667 1.667 0 1 0 0-3.334c-2.333 0-3 3.334-3 3.334Z' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M4 4h16v16H4z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default GiftSvg;
