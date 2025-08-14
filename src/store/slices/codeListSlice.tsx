import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PromocodeType } from '../../../app/types';

type Props = {list: PromocodeType[]};

const initialState: Props = {list: []};

export const codeListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addPromocode: (state, action: PayloadAction<PromocodeType>) => {
      const inList = state.list.find((item) => item.id === action.payload.id);

      if (!inList) {
        state.list.push({
          ...action.payload,
        });
      }
    },
  },
});

export const {addPromocode} = codeListSlice.actions;
