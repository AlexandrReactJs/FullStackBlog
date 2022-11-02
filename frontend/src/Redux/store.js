import { configureStore } from '@reduxjs/toolkit';
import postsSlice from "./Slices/PostsSlice";
import adminSlice from './Slices/AdminSlice';

export const store = configureStore({
  reducer: {
    postsSlice,
    adminSlice
  },
})