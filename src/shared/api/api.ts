import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiConstants } from '@/shared/constants';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: ApiConstants.BASE,
  }),
  endpoints: () => ({})
})

export const ApiReducer = api.reducerPath;
