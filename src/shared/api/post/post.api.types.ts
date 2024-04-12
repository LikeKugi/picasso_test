import { IPost } from '@/shared/types';

export interface IFetchPostsRequest {
  start: number;
  limit: number;
}

export type IFetchPostsResponse = IPost[];

export interface IFetchCurrentPostRequest {
  postId: number;
}

export type IFetchCurrentPostResponse = IPost;
