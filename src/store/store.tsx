import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {apiSlice} from './slices/apiSlice';
import {tabSlice} from './slices/tabSlice';
import {tagSlice} from './slices/tagSlice';
import {cartSlice} from './slices/cartSlice';
import {userSlice} from './slices/userSlice';
import {wishlistSlice} from './slices/wishlistSlice';
import {firstTimeSlice} from './slices/firstTimeSlice';
import {codeListSlice} from './slices/codeListSlice';

const rootReducer = combineReducers({
  tab: tabSlice.reducer,
  tagSlice: tagSlice.reducer,
  apiSlice: apiSlice.reducer,
  cartSlice: cartSlice.reducer,
  userSlice: userSlice.reducer,
  codeListSlice: codeListSlice.reducer,
  wishlistSlice: wishlistSlice.reducer,
  firstTimeSlice: firstTimeSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cartSlice', 'wishlistSlice', 'firstTimeSlice'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.getState;

export const persistor = persistStore(store);
