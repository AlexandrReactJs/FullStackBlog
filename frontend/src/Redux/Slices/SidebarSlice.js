import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    categories: [],
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,

  reducers: {
    setCategories: (state, action) => {
        state.categories = action.payload;
    }
  }
})


export const sidebarSelector = (state) => state.sidebarSlice

export const { setCategories } = sidebarSlice.actions

export default sidebarSlice.reducer