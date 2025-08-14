import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const InputCheckSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={14} height={11} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          stroke='#00B0B9'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M12.333 1.5 5 8.833 1.667 5.5'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 .5h14v10H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default InputCheckSvg;
