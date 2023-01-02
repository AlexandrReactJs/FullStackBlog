import { configureStore } from '@reduxjs/toolkit';
import postsSlice from "./Slices/PostsSlice";
import adminSlice from './Slices/AdminSlices/AdminSlice';
import fullPostSlice from './Slices/FullPostSlice';
import adminPostsSlice from './Slices/AdminSlices/AdminPostsSlice';
import adminRefactoringPostSlice from './Slices/AdminSlices/AdminRefactoringPostSlice';
import sidebarSlice  from './Slices/SidebarSlice';

export const store = configureStore({
  reducer: {
    postsSlice,
    adminSlice,
    fullPostSlice,
    adminPostsSlice,
    adminRefactoringPostSlice,
    sidebarSlice

  },
})