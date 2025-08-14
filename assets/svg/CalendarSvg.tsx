import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CalendarSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={16} height={17} fill='none'>
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M12.667 3.167H3.333C2.597 3.167 2 3.764 2 4.5v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4.5c0-.736-.597-1.333-1.333-1.333ZM10.667 1.833V4.5M5.333 1.833V4.5M2 7.167h12'
      />
    </Svg>
  );
};

export default CalendarSvg;
