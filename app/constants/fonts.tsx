const DMSans_400Regular = {fontFamily: 'DMSans-Regular'};
const DMSans_500Medium = {fontFamily: 'DMSans-Medium'};
const DMSans_700Bold = {fontFamily: 'DMSans-Bold'};

import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const fonts = {
  // H1-5
  H1: {...DMSans_700Bold, fontSize: 32, lineHeight: 32 * 1.3},
  H2: {...DMSans_700Bold, fontSize: 22, lineHeight: 22 * 1.4},
  H3: {...DMSans_500Medium, fontSize: 20, lineHeight: 20 * 1.2},
  H4: {...DMSans_500Medium, fontSize: 18, lineHeight: 18 * 1.2},
  H5: {...DMSans_500Medium, fontSize: 14, lineHeight: 14 * 1.2},
  // TS 14-16
  textStyle_14: {...DMSans_400Regular, fontSize: 14, lineHeight: 14 * 1.5},
  textStyle_16: {...DMSans_400Regular, fontSize: 16, lineHeight: 16 * 1.7},
  // DMSans
  DMSans_400Regular: {...DMSans_400Regular},
  DMSans_500Medium: {...DMSans_500Medium},
  DMSans_700Bold: {...DMSans_700Bold},
};
