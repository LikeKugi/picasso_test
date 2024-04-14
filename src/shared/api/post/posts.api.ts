import { api } from '@/shared/api/api';
import { ApiConstants } from '@/shared/constants';
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
          url: `${ApiConstants.BASE}/${ApiConstants.POSTS}`,
          method: 'GET',
          params: {
            _start: start,
            _limit: limit,
          }
        };
      }
    }),
    fetchPostById: build.query<IFetchCurrentPostResponse, IFetchCurrentPostRequest>({
      query({ postId }) {
        return {
          url: `${ApiConstants.BASE}/${ApiConstants.POSTS}/${postId}`,
          method: 'GET'
        };
      }
    })
  }),
});

export const { useLazyFetchPostByIdQuery, useFetchPostsQuery } = postsApi;
