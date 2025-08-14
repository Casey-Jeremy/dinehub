import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SmartphoneSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={16} height={16} fill='none'>
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M11.333 1.333H4.667c-.737 0-1.334.597-1.334 1.334v10.666c0 .737.597 1.334 1.334 1.334h6.666c.737 0 1.334-.597 1.334-1.334V2.667c0-.737-.597-1.334-1.334-1.334ZM8 12h.007'
      />
    </Svg>
  );
};

export default SmartphoneSvg;
