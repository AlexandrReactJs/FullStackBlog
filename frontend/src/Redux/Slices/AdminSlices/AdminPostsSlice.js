import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  adminPosts: [],
}

export const adminPostsSlice = createSlice({
  name: 'adminPosts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
        state.adminPosts = action.payload;
    }
   
  },
})


export const { setPosts } = adminPostsSlice.actions

export default adminPostsSlice.reducer