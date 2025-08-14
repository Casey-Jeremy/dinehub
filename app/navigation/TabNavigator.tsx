import React from 'react';

// import {tabs} from '../constants';
import { screens } from '../(tabs)';
import { useAppSelector } from '../hooks';

const TabNavigator: React.FC = (): JSX.Element => {
  const currentTabScreen = useAppSelector((state) => state.tab.screen);

  const renderScreen = () => {
    return (
      <React.Fragment>
        {currentTabScreen === 'Home' && <screens.Home />}
        {currentTabScreen === 'Menu' && <screens.Menu />}
        {currentTabScreen === 'Order' && <screens.Order />}
        {currentTabScreen === 'Favorite' && <screens.Favorite />}
        {currentTabScreen === 'Notif..' && <screens.Notification />}
      </React.Fragment>
    );
  };

  return renderScreen();
};

export default TabNavigator;
