import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',

  async () => {
    const response = await axios.get('http://localhost:4444/posts?page=1&pageSize=4');
    return response.data.posts;
  }

);



const initialState = {
  posts: [],
  status: 'Loading', /*Loading, Ok, Error*/
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers:{
    setPosts: (state, action) => {
      state.posts = action.payload
    }
  },

  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = 'Ok';
    },
    [fetchPosts.pending]: (state, action) => {
      state.posts = [];
      state.status = 'Loading';
    },
    [fetchPosts.rejected]: (state, action) => {
      state.posts = [];
      state.status = 'Error'
    }

  }
})

export const postsSelector = (state) => state.postsSlice.posts;


export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;