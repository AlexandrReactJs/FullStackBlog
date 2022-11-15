import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  postData: {
    title: null,
    text: null,
    tags: []
  }
}

export const refactoringPostSlice = createSlice({
  name: 'refactoringPost',
  initialState,
  reducers: {
    setPostData: (state, action) => {
        state.postData = action.payload;
    },

    setPostTitle: (state, action) => {
        state.postData.title = action.payload;
    },
    
    setPostText: (state, action) => {
        state.postData.text = action.payload;
    }


  },
})


export const {setPostData, setPostTitle, setPostText} = refactoringPostSlice.actions

export default refactoringPostSlice.reducer