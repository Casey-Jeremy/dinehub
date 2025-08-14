import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={16} height={16} fill='none'>
      <Path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9'
      />
    </Svg>
  );
};

export default SearchSvg;
