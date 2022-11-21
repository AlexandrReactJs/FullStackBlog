import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchFullPost = createAsyncThunk(
  'fullPost/fetchFullPost',
  async (id) => {
    const response = await axios.get(`http://localhost:4444/posts/${id}`)
    return response.data
    
  }

)


const initialState = {
  postData: null,
  status: 'Loading', /*Loading, Ok, Error*/
}

export const FullPostSlice = createSlice({
  name: 'fullPost',
  initialState,

  extraReducers: {
    [fetchFullPost.fulfilled]: (state, action) => {
      state.postData = action.payload;
      state.status = 'Ok';
    },
    [fetchFullPost.pending]: (state) => {
      state.postData = null;
      state.status = 'Loading';
    },
    [fetchFullPost.rejected]: (state) => {
      state.postData = null;
      state.status = 'Error';
    }
  }
})


export const { setPostData } = FullPostSlice.actions

export default FullPostSlice.reducer