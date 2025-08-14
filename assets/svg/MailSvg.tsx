import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MailSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={16} height={16} fill='none'>
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M2.667 2.667h10.666c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333V4c0-.733.6-1.333 1.334-1.333Z'
      />
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M14.667 4 8 8.667 1.333 4'
      />
    </Svg>
  );
};

export default MailSvg;
