import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

type Props = PropsWithChildren<{
  title: string;
  description: string;
  status: boolean;
  containerStyle?: object;
}>;

import { text } from '../../app/text';
import { svg } from '../../assets/svg';
import { theme } from '../constants';

const OrderStatus: React.FC<Props> = ({
  title,
  description,
  status,
  containerStyle,
}): JSX.Element => {
  return (
    <View style={{flexDirection: 'row', ...containerStyle}}>
      <View style={{alignItems: 'center', marginRight: 24}}>
        <View
          style={{
            width: 29,
            height: 29,
            borderRadius: 15,
            backgroundColor: status
              ? theme.colors.mainTurquoise
              : theme.colors.white,
            marginBottom: 7,
            borderWidth: 1,
            borderColor: theme.colors.mainTurquoise,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {status && <svg.CheckSvg />}
        </View>
        {title !== 'Receiving' && (
          <View
            style={{
              height: 30,
              width: 2,
              backgroundColor: theme.colors.mainTurquoise,
            }}
          />
        )}
      </View>
      <View style={{marginTop: 4}}>
        <Text
          style={{
            ...theme.fonts.DMSans_500Medium,
            fontSize: 14,
            lineHeight: 14 * 1.2,
            color: theme.colors.mainColor,
            marginBottom: 6,
            textTransform: 'capitalize',
          }}
        >
          {title}
        </Text>
        <text.T14>{description}</text.T14>
      </View>
    </View>
  );
};

export default OrderStatus;
