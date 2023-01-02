import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',

  async (params) => {
    const {page, pageSize, category} = params
    const response = await axios.get(`http://localhost:4444/posts?page=${page}&pageSize=${pageSize}&category=${category}`);
    return response.data;
  
  }

);



const initialState = {
  posts: [],
  currentPage: 1,
  totalCount: 0,
  pageSize: 4,
  category: '',
  status: 'Loading', /*Loading, Ok, Error*/
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers:{
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    }
  },

  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.totalCount = action.payload.totalCount;
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

export const postsSelector = (state) => state.postsSlice;


export const { setPosts, setCurrentPage, setCategory } = postsSlice.actions;

export default postsSlice.reducer;