import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TagSvg: React.FC = (): JSX.Element => (
  <Svg width={16} height={17} fill='none'>
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m13.727 9.44-4.78 4.78a1.334 1.334 0 0 1-1.887 0L1.333 8.5V1.833H8l5.727 5.727a1.333 1.333 0 0 1 0 1.88ZM4.667 5.167h.006'
    />
  </Svg>
);

export default TagSvg;
