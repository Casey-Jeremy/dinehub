import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: React.ReactNode;
  contentContainerStyle?: object;
  style?: object;
};

const KAScrollView: React.FC<Props> = ({
  style,
  children,
  contentContainerStyle,
}): JSX.Element => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1, ...contentContainerStyle}}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='handled'
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={20}
      style={{...style}}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KAScrollView;
