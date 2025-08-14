import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateType } from '../../../app/types';

const initialState: AppStateType = {user: null};

const userSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AppStateType['user']>) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export { userSlice };

