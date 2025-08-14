import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {theme} from '../constants';

type Props = {
  title: string;
  loading?: boolean;
  onPress?: () => void;
  containerStyle?: object;
  transparent?: boolean;
};

const Button: React.FC<Props> = ({
  title,
  onPress,
  loading = false,
  containerStyle,
  transparent = false,
}): JSX.Element => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          borderRadius: 10,
          borderWidth: transparent ? 1 : 0,
          borderColor: theme.colors.mainTurquoise,
          backgroundColor: transparent ? '#FAFCFE' : theme.colors.mainTurquoise,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPress}
        disabled={loading}
      >
        <View
          style={{
            width: '100%',
            height: 50,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {loading && (
            <ActivityIndicator
              color={transparent ? theme.colors.mainColor : theme.colors.white}
              size='small'
            />
          )}
          {!loading && (
            <Text
              style={{
                color: transparent
                  ? theme.colors.mainTurquoise
                  : theme.colors.white,
                textTransform: 'capitalize',
                ...theme.fonts.DMSans_700Bold,
                fontSize: 14,
              }}
            >
              {title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
