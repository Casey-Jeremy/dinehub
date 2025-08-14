import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const MinusSvg: React.FC = (): JSX.Element => (
  <Svg width={21} height={21} fill='none'>
    <Rect width={21} height={21} fill='#E6F3F8' rx={10.5} />
    <Path
      stroke='#0C1D2E'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M6.125 10.5h8.75'
    />
  </Svg>
);

export default MinusSvg;
