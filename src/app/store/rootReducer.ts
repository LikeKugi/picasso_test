import { combineReducers } from '@reduxjs/toolkit';
import { api, ApiReducer } from '@/shared/api';
import { PostsSliceReducer } from './slices/postsSlice';

export const RootReducer = combineReducers({
  [ApiReducer]: api.reducer,
  PostsSliceReducer,
})
