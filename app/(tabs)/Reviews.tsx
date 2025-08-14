import React from 'react';
import { FlatList } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { components } from '../components';
import { reviews, theme } from '../constants';

const Reviews: React.FC = (): JSX.Element => {
  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Reviews' />;
  };

  const renderContent = () => {
    return (
      <FlatList
        data={reviews}
        contentContainerStyle={{
          paddingLeft: 20,
          marginTop: 10,
          marginBottom: 20,
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled={true}
        snapToInterval={theme.sizes.width - 54}
        decelerationRate={0}
        renderItem={({item, index}) => {
          const last = index === reviews.length - 1;
          return (
            <components.ReviewItem
              item={item}
              last={last}
              containerStyle={{
                width: responsiveWidth(100) - 40,
                marginBottom: last ? 0 : 14,
              }}
            />
          );
        }}
      />
    );
  };

  const renderHomeIndicator = () => {
    return <components.HomeIndicator />;
  };

  return (
    <components.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default Reviews;
