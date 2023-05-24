import { RootState } from 'src/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'src/types';

interface IAppState {
  loading: boolean;
  products: IProduct[];
  product: IProduct | undefined;
}

const initialState: IAppState = {  loading: false , products: [], product: undefined };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    getListProduct: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.products = payload;
    },
    updateListProduct: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.products = payload;
    },
    productSelect: (state, { payload }: PayloadAction<IProduct | undefined>) => {
      state.product = payload;
    },
  },
});

export const { setLoading, getListProduct,updateListProduct, productSelect } = appSlice.actions;
export const appActions = {
  appSlice
};

export const loading = (state: RootState) => state.app.loading;
export const productList = (state: RootState) => state.app.products;
export const product = (state: RootState) => state.app.product;

