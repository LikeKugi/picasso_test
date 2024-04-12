import { createSlice } from '@reduxjs/toolkit';
import { IPostsSliceState } from '@/app/store/slices/postsSlice/postsSlice.types';
import { postsApi } from '@/shared/api/post';
import { RootState } from '@/app/store';

const initialState: IPostsSliceState = {
  posts: [],
  limit: 10,
  start: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    wipeData: () => initialState,
  },

  extraReducers: builder => {
    builder.addMatcher(
      postsApi.endpoints.fetchPosts.matchFulfilled,
      (state, action) => {
        state.posts = state.posts.concat(action.payload)
      }
    )
  }
})

export const selectPostsStart = (state: RootState) => state.PostsSliceReducer.start;
export const selectPostsLimit = (state: RootState) => state.PostsSliceReducer.limit;
export const selectPosts = (state: RootState) => state.PostsSliceReducer.posts;

export const PostsSliceReducer = postsSlice.reducer;
