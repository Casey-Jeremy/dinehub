import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const CreditCardSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={16} height={16} fill='none'>
      <G
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        clipPath='url(#a)'
      >
        <Path d='M14 2.667H2C1.264 2.667.667 3.264.667 4v8c0 .736.597 1.333 1.333 1.333h12c.736 0 1.333-.597 1.333-1.333V4c0-.736-.597-1.333-1.333-1.333ZM.667 6.667h14.666' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h16v16H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CreditCardSvg;
