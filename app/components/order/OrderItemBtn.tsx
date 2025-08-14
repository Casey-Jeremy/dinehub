import React from 'react';
import { TouchableOpacity } from 'react-native';
import { svg } from '../../../assets/svg';

type Props = {
  plus?: boolean;
  minus?: boolean;
  onPress: () => void;
  containerStyle?: object;
};

const OrderItemBtn: React.FC<Props> = ({
  onPress,
  plus,
  minus,
  containerStyle,
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {plus && <svg.PlusSvg />}
      {/* {minus && <svg.MinusSvg />} */}
    </TouchableOpacity>
  );
};

export default OrderItemBtn;
