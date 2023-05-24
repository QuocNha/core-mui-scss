import { combineReducers } from '@reduxjs/toolkit';
import { appSlice } from './slices/app';

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

export default rootReducer;
