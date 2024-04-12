import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { ApiConstants } from '@/shared/constants/api.constants';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: ApiConstants.BASE,
  }),
  endpoints: () => ({})
})
