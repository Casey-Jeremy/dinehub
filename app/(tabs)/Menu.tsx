import React from 'react';
import {
  ImageStyle,
  ScrollView,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { svg } from '@/assets/svg';
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from '../../src/store/slices/apiSlice';
import { components } from '../components';
import { sizes, theme } from '../constants';
import { useAppNavigation } from '../hooks';
import BottomTabBar from '../navigation/BottomTabBar';
import { text } from '../text';

const Menu: React.FC = (): JSX.Element => {
  const navigation = useAppNavigation();

  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryLoading,
  } = useGetCategoriesQuery();

  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = useGetProductsQuery();

  const categories = categoryData instanceof Array ? categoryData : [];
  const dishes = productsData instanceof Array ? productsData : [];

  const renderStatusBar = () => {
    return <components.StatusBar />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        basket={true}
        user={true}
        userImage={true}
        userName={true}
      />
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          height: 50,
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            flex: 1,
            borderRadius: 10,
            marginRight: 5,
            padding: 5,
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.mainTurquoise,
              width: 40,
              height: '100%',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 14,
            }}
          >
            <svg.SearchSvg />
          </View>
          <TextInput
            placeholder='Search ...'
            style={{
              flex: 1,
              ...theme.fonts.DMSans_400Regular,
              fontSize: 16,
              color: theme.colors.mainColor,
            }}
            placeholderTextColor={theme.colors.textColor}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 10,
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg.FilterSvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    if (categoryLoading || productsLoading) {
      return <components.Loader />;
    }

    const blockWidth = sizes.width / 2 - 27.7;

    const scrollViewStyle: ViewStyle = {
      flexGrow: 1,
      paddingTop: 20,
      paddingHorizontal: 20,
      paddingBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    };

    const touchableOpacityStyle: ViewStyle = {
      width: blockWidth,
      height: blockWidth,
      marginBottom: 15,
      backgroundColor: theme.colors.white,
      borderRadius: 10,
    };

    const imageBackgroundStyle: ImageStyle = {
      width: blockWidth,
      height: blockWidth,
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'flex-end',
    };

    const textStyle: TextStyle = {
      color: theme.colors.mainColor,
      textTransform: 'capitalize',
    };

    return (
      <ScrollView contentContainerStyle={{...scrollViewStyle}}>
        {categories.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{...touchableOpacityStyle}}
              onPress={() => {
                navigation.navigate('Menulist', {
                  category: item.name,
                });
              }}
            >
              <components.ImageBackground
                source={{uri: item.image}}
                imageStyle={{borderRadius: 10}}
                style={{...imageBackgroundStyle}}
                resizeMode='cover'
              >
                <text.T16 numberOfLines={1} style={{...textStyle}}>
                  {item.name}
                </text.T16>
              </components.ImageBackground>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
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
      {renderSearchBar()}
      {renderContent()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </components.SmartView>
  );
};

export default Menu;
