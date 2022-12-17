import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  adminData: null,
  isAuth: false,
  addPostData: {
    title: '',
    text: null,
    tags: [],
    imageUrl: {},
    category: null,
  }

}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
   setAdminData: (state, action) => {
    state.adminData = action.payload
   },
   setIsAuth: (state, action) => {
    state.isAuth = action.payload
   },

   setPostTitle: (state, action) => {
    state.addPostData.title = action.payload
   },
   setPostText: (state, action) => {
    state.addPostData.text = action.payload
   },

   setImageUrl: (state, action) => {
    state.addPostData.imageUrl = action.payload;
   },
   setCategoryPost: (state, action) => {
    state.addPostData.category = action.payload;
   },
   addTag: (state, action) => {
    state.addPostData.tags.push(action.payload)
   }
   
  },
})


export const { setAdminData, setIsAuth, setPostTitle, setPostText, setImageUrl, setCategoryPost, addTag } = adminSlice.actions

export default adminSlice.reducer