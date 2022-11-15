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
    },
    removePost: (state, action) => {
      const found = state.adminPosts.find(elm => elm._id === action.payload);
      if(found){
        state.adminPosts = state.adminPosts.filter(item => item !== found)
      }
    }
   
  },
})


export const { setPosts, removePost} = adminPostsSlice.actions

export default adminPostsSlice.reducer