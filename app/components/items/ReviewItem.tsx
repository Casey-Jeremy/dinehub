import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { text } from '../../../app/text';
import { ReviewType } from '../../../app/types';
import { theme } from '../../constants';
import Image from '../custom/Image';
import ReviewStars from '../ReviewStars';

type Props = PropsWithChildren<{
  item: ReviewType;
  last?: boolean;
  containerStyle?: object;
}>;

const ReviewItem: React.FC<Props> = ({
  item,
  containerStyle,
  last,
}): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
        width: responsiveWidth(100) - 40 - 28,
        marginRight: last ? 20 : 14,
        borderRadius: 10,
        padding: 20,
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 13,
          borderBottomWidth: 1,
          borderBottomColor: '#E9F3F6',
          marginBottom: 11,
        }}
      >
        <Image
          source={{uri: item.image}}
          style={{
            width: 30,
            height: 30,
            marginRight: 14,
            borderRadius: 15,
          }}
        />
        <View style={{marginRight: 'auto'}}>
          <text.H5 style={{marginBottom: 4}}>{item.name}</text.H5>
          <ReviewStars rating={5} />
        </View>
        <View>
          <Text
            style={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 10,
              color: theme.colors.textColor,
              marginBottom: 2,
            }}
          >
            {item.date}
          </Text>
          <Text
            style={{
              textAlign: 'right',
              ...theme.fonts.DMSans_500Medium,
              fontSize: 10,
              lineHeight: 10 * 1.5,
              color: theme.colors.mainTurquoise,
            }}
            onPress={() => {}}
          >
            Reply
          </Text>
        </View>
      </View>
      <text.T14>{item.comment}</text.T14>
    </View>
  );
};

export default ReviewItem;
