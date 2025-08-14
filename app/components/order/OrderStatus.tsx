import React from 'react';
import { Text, View } from 'react-native';

import { theme } from '../../constants';

type Props = {
  title: string;
  description: string;
  status: boolean;
};

const OrderStatus: React.FC<Props> = ({
  title,
  description,
  status,
}): JSX.Element => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 6}}>
      {/* <svg.StatusSvg status={status} title={title} /> */}
      <View
        style={{
          marginLeft: 24,
          marginBottom: 12,
          marginTop: 5,
        }}
      >
        <Text
          style={{
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 6,
            ...theme.fonts.H5,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            ...theme.fonts.textStyle_14,
            color: theme.colors.textColor,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default OrderStatus;
