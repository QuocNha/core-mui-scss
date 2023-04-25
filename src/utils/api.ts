import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQuery } from 'src/utils/request';
import { HYDRATE } from 'next-redux-wrapper';

export const api = createApi({
  reducerPath: 'allApi',
  baseQuery: axiosBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  keepUnusedDataFor: 3 * 60, // 3 minute
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
