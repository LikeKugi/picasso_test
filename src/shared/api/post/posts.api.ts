import { api } from '@/shared/api/api';
import { ApiConstants } from '@/shared/constants/api.constants';
import {
  IFetchCurrentPostRequest,
  IFetchCurrentPostResponse,
  IFetchPostsRequest,
  IFetchPostsResponse
} from './post.api.types';

export const postsApi = api.injectEndpoints({
  endpoints: build => ({
    fetchPosts: build.query<IFetchPostsResponse, IFetchPostsRequest>({
      query({ limit, start }) {
        return {
          url: `${ApiConstants.BASE}/${ApiConstants.POSTS}?_start=${start}&_limit=${limit}`,
          method: 'GET'
        };
      }
    }),
    fetchCurrentPost: build.query<IFetchCurrentPostResponse, IFetchCurrentPostRequest>({
      query({ postId }) {
        return {
          url: `${ApiConstants.BASE}/${ApiConstants.POSTS}/${postId}`,
          method: 'GET'
        };
      }
    })
  }),
});

export const { useFetchCurrentPostQuery, useFetchPostsQuery } = postsApi;
