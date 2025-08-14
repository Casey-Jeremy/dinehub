import {View, Text, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

type Props = PropsWithChildren<{
  rating: number;
  containerStyle?: ViewStyle;
}>;

const ReviewStars: React.FC<Props> = ({
  rating,
  containerStyle,
}): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      {rating >= 1 && (
        <View style={{marginRight: 1}}>
          <Svg width={10} height={10} fill='none'>
            <G clipPath='url(#a)'>
              <Path
                fill='#FFCA40'
                stroke='#FFCA40'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m5 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L5 7.404 2.425 8.758l.492-2.866-2.084-2.03 2.88-.42L5 .833Z'
              />
            </G>
            <Defs>
              <ClipPath id='a'>
                <Path fill='#fff' d='M0 0h10v10H0z' />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
      )}

      {rating >= 2 && (
        <View style={{marginHorizontal: 1}}>
          <Svg width={10} height={10} fill='none'>
            <G clipPath='url(#a)'>
              <Path
                fill='#FFCA40'
                stroke='#FFCA40'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m5 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L5 7.404 2.425 8.758l.492-2.866-2.084-2.03 2.88-.42L5 .833Z'
              />
            </G>
            <Defs>
              <ClipPath id='a'>
                <Path fill='#fff' d='M0 0h10v10H0z' />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
      )}

      {rating >= 3 && (
        <View style={{marginHorizontal: 1}}>
          <Svg width={10} height={10} fill='none'>
            <G clipPath='url(#a)'>
              <Path
                fill='#FFCA40'
                stroke='#FFCA40'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m5 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L5 7.404 2.425 8.758l.492-2.866-2.084-2.03 2.88-.42L5 .833Z'
              />
            </G>
            <Defs>
              <ClipPath id='a'>
                <Path fill='#fff' d='M0 0h10v10H0z' />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
      )}

      {rating >= 4 && (
        <View style={{marginHorizontal: 1}}>
          <Svg width={10} height={10} fill='none'>
            <G clipPath='url(#a)'>
              <Path
                fill='#FFCA40'
                stroke='#FFCA40'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m5 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L5 7.404 2.425 8.758l.492-2.866-2.084-2.03 2.88-.42L5 .833Z'
              />
            </G>
            <Defs>
              <ClipPath id='a'>
                <Path fill='#fff' d='M0 0h10v10H0z' />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
      )}

      {rating >= 5 && (
        <View style={{marginHorizontal: 1}}>
          <Svg width={10} height={10} fill='none'>
            <G clipPath='url(#a)'>
              <Path
                fill='#FFCA40'
                stroke='#FFCA40'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m5 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L5 7.404 2.425 8.758l.492-2.866-2.084-2.03 2.88-.42L5 .833Z'
              />
            </G>
            <Defs>
              <ClipPath id='a'>
                <Path fill='#fff' d='M0 0h10v10H0z' />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
      )}
    </View>
  );
};

export default ReviewStars;
