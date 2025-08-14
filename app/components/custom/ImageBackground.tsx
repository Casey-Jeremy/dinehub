import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {ImageBackground as RNImageBackground} from 'react-native';

type Props = {
  source?: object;
  style?: object;
  imageStyle?: object;
  resizeMode?: 'cover' | 'contain' | 'stretch';
  children?: React.ReactNode;
};

const ImageBackground: React.FC<Props> = ({
  children,
  source,
  resizeMode,
  style,
  imageStyle,
}): JSX.Element => {
  return (
    <RNImageBackground
      source={source as ImageSourcePropType}
      style={style}
      imageStyle={imageStyle}
      // resizeMode={
      //   resizeMode === 'cover'
      //     ? FastImage.resizeMode.cover
      //     : resizeMode === 'contain'
      //     ? FastImage.resizeMode.contain
      //     : FastImage.resizeMode.stretch
      // }
    >
      {children}
    </RNImageBackground>
  );
};

export default ImageBackground;
