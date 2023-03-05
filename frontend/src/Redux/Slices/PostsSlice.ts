import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import axios from 'axios';

type User = {
  _id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

type Post = {
  _id: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
  user: User;
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  imageUrl: string;
}


export const fetchPosts = createAsyncThunk<PostsState>(
  'posts/fetchPosts',
  

  async (params: any) => {


    const { page, pageSize, category } = params

    const response = await axios.get(`http://localhost:4444/posts?page=${page}&pageSize=${pageSize}&category=${category}`);

    return response.data;


  }

);



type PostsState = {
  posts: Post[];
  currentPage: number;
  totalCount: number;
  pageSize: number;
  category: string;
  status: string;
}


const initialState: PostsState = {
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

  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload.posts

        state.totalCount = action.payload.totalCount;
        state.status = 'Ok';
      })
      .addCase(fetchPosts.pending, (state) => {
        state.posts = [];
        state.status = 'Loading';
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts = [];
        state.status = 'Error'
      })
  }


})

export const postsSelector = (state: RootState) => state.postsSlice;


export const { setPosts, setCurrentPage, setCategory, setPageSize } = postsSlice.actions;

export default postsSlice.reducer;