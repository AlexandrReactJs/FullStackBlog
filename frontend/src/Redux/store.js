import { configureStore } from '@reduxjs/toolkit';
import postsSlice from "./Slices/PostsSlice";
import adminSlice from './Slices/AdminSlice';
import fullPostSlice from './Slices/FullPostSlice';

export const store = configureStore({
  reducer: {
    postsSlice,
    adminSlice,
    fullPostSlice
  },
})