import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseSvg: React.FC = (): JSX.Element => (
  <Svg width={34} height={34} fill='none'>
    <Path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='m12.02 12.05 9.9 9.9M12.02 21.95l9.9-9.9'
    />
  </Svg>
);

export default CloseSvg;
