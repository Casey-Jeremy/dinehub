import React, { PropsWithChildren } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { text } from '../../../app/text';
import { PromocodeType } from '../../../app/types';
import { svg } from '../../../assets/svg';
import { theme } from '../../constants';

type Props = PropsWithChildren<{
  item: PromocodeType;
  isLast?: boolean;
}>;

const PromocodeItem: React.FC<Props> = ({item, isLast}): JSX.Element => {
  const colors = (discount: number) => {
    if (discount < 35) {
      return {
        backgroundColor: '#FFA462',
      };
    } else if (discount > 35 && discount < 51) {
      return {
        backgroundColor: '#FA5555',
      };
    } else {
      return {
        backgroundColor: theme.colors.mainTurquoise,
      };
    }
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        padding: 20,
        marginBottom: isLast ? 0 : 14,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 7,
        }}
      >
        <text.H3>{item.code}</text.H3>
        <svg.CopySvg />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            backgroundColor: colors(item.discount).backgroundColor,
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              ...theme.fonts.DMSans_500Medium,
              color: theme.colors.white,
              fontSize: 12,
            }}
          >
            {item.discount}% discount
          </Text>
        </View>

        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 12,
            color: theme.colors.textColor,
          }}
        >
          {item.expires_at}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PromocodeItem;
