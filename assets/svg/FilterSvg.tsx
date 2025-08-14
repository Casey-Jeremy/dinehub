import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FilterSvg: React.FC = (): JSX.Element => {
  return (
    <Svg width={24} height={24} fill='none'>
      <Path
        fill='#748BA0'
        fillOpacity={0.15}
        stroke='#748BA0'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='m3 4.5 7.2 8.409v6.313L13.8 21v-8.091L21 4.5H3Z'
      />
    </Svg>
  );
};

export default FilterSvg;
