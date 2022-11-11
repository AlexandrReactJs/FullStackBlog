import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  postData: null,
}

export const FullPostSlice = createSlice({
  name: 'fullPost',
  initialState,
  reducers: {
    setPostData: (state, action) => {
        state.postData = action.payload;
    }
   
  },
})


export const { setPostData } = FullPostSlice.actions

export default FullPostSlice.reducer