import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface VerifyState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: VerifyState = {
  loading: false,
  error: null,
  success: false,
};

export const verify = createAsyncThunk(
  'auth/verify',
  async (data: {email: string; code: string}) => {
    const response = await axios.post(
      'https://api-dev.trustlayer.io/auth/verify',
      data,
    );
    return response.data;
  },
);

const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {
    resetVerify: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verify.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(
      verify.fulfilled,
      (state, action: PayloadAction<{success: boolean}>) => {
        state.loading = false;
        state.error = null;
        state.success = action.payload.success;
      },
    );
    builder.addCase(verify.rejected, (state, action) => {
      state.loading = false;
      // state.error = action.error.message;
      state.success = false;
    });
  },
});

export const {resetVerify} = verifySlice.actions;
