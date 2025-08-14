import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { setScreen } from '@/src/store/slices/tabSlice';
import { components } from '../components';
import { theme } from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks';
import BottomTabBar from '../navigation/BottomTabBar';
import { text } from '../text';

const Favorite: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector((state) => state.wishlistSlice.list);

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return (
      <components.Header title='Favorite' basket={true} userImage={true} />
    );
  };

  const renderDishes = () => {
    return (
      <FlatList
        data={favorite}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingTop: 10,
        }}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 14,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <components.FavoriteItem item={item} />;
        }}
      />
    );
  };

  const renderEmptyFavorite = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: theme.colors.white,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 5,
          paddingVertical: 20,
        }}
      >
        <components.Image
          source={{uri: 'https://george-fx.github.io/dine-hub/09.jpg'}}
          style={{
            width: responsiveWidth(100) - 100,
            aspectRatio: 1,
            alignSelf: 'center',
          }}
        />
        <text.H2 style={{marginTop: 30, marginBottom: 14}}>
          Your favorite list is empty!
        </text.H2>
        <text.T16 style={{textAlign: 'center'}}>
          Your list of favorite dishes is currently {'\n'} empty. Why not start
          adding dishes {'\n'} that you love?
        </text.T16>
      </ScrollView>
    );
  };

  const renderContent = () => {
    return (
      <React.Fragment>
        {favorite.length === 0 ? renderEmptyFavorite() : renderDishes()}
      </React.Fragment>
    );
  };

  const renderButton = (): JSX.Element | null => {
    if (favorite.length === 0) {
      return (
        <components.Button
          title={'Explore Our Menu'}
          containerStyle={{
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
          onPress={() => {
            dispatch(setScreen('Menu'));
          }}
        />
      );
    }

    return null;
  };

  const renderBottomTabBar = () => {
    return <BottomTabBar />;
  };

  const renderHomeIndicator = () => {
    return <components.HomeIndicator />;
  };

  return (
    <components.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderButton()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default Favorite;
