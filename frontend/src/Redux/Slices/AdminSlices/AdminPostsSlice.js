import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  adminPosts: [],
  status: 'Loading',
  currentPage: 1,
  totalCount: 0,
  pageSize: 4,
  category: '', /*Loading, Ok, Error */
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
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    }
   
  },

  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.adminPosts = action.payload.posts;
      state.totalCount = action.payload.totalCount;
      state.status = 'Ok';
    },
    [fetchPosts.pending]: (state, action) => {
      state.adminPosts = [];
      state.status = 'Loading';
    },
    [fetchPosts.rejected]: (state, action) => {
      state.adminPosts = [];
      state.status = 'Error'
    }
  }
})


export const { setPosts, removePost, setCurrentPage} = adminPostsSlice.actions

export default adminPostsSlice.reducer