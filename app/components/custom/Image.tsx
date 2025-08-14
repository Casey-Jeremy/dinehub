import React from 'react';
import {Image as RNImage} from 'react-native';
import type {ImageSourcePropType} from 'react-native';

type Props = {
  source: {uri: string};
  style?: object;
  imageStyle?: object;
  resizeMode?: 'cover' | 'contain' | 'stretch';
  tintColor?: string;
};

const Image: React.FC<Props> = ({
  source,
  style,
  resizeMode,
  tintColor,
}): JSX.Element => {
  return (
    <RNImage
      style={style}
      source={source as ImageSourcePropType}
      tintColor={tintColor}
    />
  );
};

export default Image;
