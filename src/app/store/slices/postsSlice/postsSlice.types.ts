import { IPost } from '@/shared/types';

export interface IPostsSliceState {
  posts: IPost[];
  start: number;
  limit: number;
}
