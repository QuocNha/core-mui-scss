import { RootState } from 'src/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IError } from 'src/utils';

interface IAppState {
  apiError: IError;
  isExpiredToken: boolean;
  currentAccountTab: 'account' | 'company';
}

const initialState: IAppState = { apiError: {}, isExpiredToken:false, currentAccountTab: 'account' };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApiError: (state, { payload }: PayloadAction<IError>) => {
      state.apiError = payload;
    },
    clearApiError: (state) => {
      state.apiError = {};
    },
    setCurrentAccountTab: (state, { payload }: PayloadAction<IAppState>) => {
      state.currentAccountTab = payload.currentAccountTab;
    },
    setExpiredToken: (state, { payload }: PayloadAction<boolean>) => {
      state.isExpiredToken = payload;
    },
  },
});

export const { setApiError, clearApiError, setExpiredToken, setCurrentAccountTab } = appSlice.actions;
export const appActions = {
  appSlice,
};
export const currentAccountTab = (state: RootState) => state.app.currentAccountTab;
