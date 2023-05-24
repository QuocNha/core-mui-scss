import { RootState } from 'src/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  loading: boolean;
}

const initialState: IAppState = {  loading: false };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
   
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const { setLoading } = appSlice.actions;
export const appActions = {
  appSlice
};

export const loading = (state: RootState) => state.app.loading;
