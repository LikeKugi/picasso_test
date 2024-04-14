import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostsSliceState } from '@/app/store/slices/postsSlice/postsSlice.types';
import { postsApi } from '@/shared/api/post';
import { RootState } from '@/app/store';
import { POSTS_LIMIT, POSTS_MAX, POSTS_START } from '@/shared/constants';

const initialState: IPostsSliceState = {
  posts: [],
  limit: POSTS_LIMIT,
  start: POSTS_START,
  max: POSTS_MAX,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    wipeData: () => initialState,
    setStartPosts: (state, action: PayloadAction<number>) => {
      if (action.payload < POSTS_START) {
        state.start = POSTS_START;
      } else if (action.payload > state.max - state.limit) {
        state.start = state.max - state.limit;
      } else {
        state.start = action.payload;
      }
    }
  },

  extraReducers: builder => {
    builder.addMatcher(
      postsApi.endpoints.fetchPosts.matchFulfilled,
      (state, action) => {
        state.posts = state.posts.concat(action.payload);
      }
    );
  }
});

export const selectPostsStart = (state: RootState) => state.PostsSliceReducer.start;
export const selectPostsLimit = (state: RootState) => state.PostsSliceReducer.limit;
export const selectPosts = (state: RootState) => state.PostsSliceReducer.posts;

export const { setStartPosts } = postsSlice.actions;

export const PostsSliceReducer = postsSlice.reducer;
