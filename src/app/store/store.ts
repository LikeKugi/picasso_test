import { configureStore } from '@reduxjs/toolkit';
import { RootReducer } from '@/app/store/rootReducer';
import { api } from '@/shared/api';

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})
