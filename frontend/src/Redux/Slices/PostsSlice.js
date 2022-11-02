import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
        debugger
        state.posts = action.payload;
    }
   
  },
})


export const { setPosts } = postsSlice.actions

export default postsSlice.reducer