import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {firstTimeSlice: true};

const firstTimeSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setIsFirstTime: (state, action: PayloadAction<boolean>) => {
      state.firstTimeSlice = action.payload;
    },
  },
});

export const {setIsFirstTime} = firstTimeSlice.actions;

export {firstTimeSlice};
