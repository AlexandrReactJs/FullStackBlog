import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  adminData: null,
  isAuth: false,
  addPostData: {
    title: 'asd',
    text: null
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
    state.addPostData.title = action.payload.title
   },
   setPostText: (state, action) => {
    state.addPostData.text = action.payload.text
   }
   
  },
})


export const { setAdminData, setIsAuth, setPostTitle, setPostText } = adminSlice.actions

export default adminSlice.reducer