import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  adminData: null,
  isAuth: false
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
   }
   
  },
})


export const { setAdminData, setIsAuth } = adminSlice.actions

export default adminSlice.reducer