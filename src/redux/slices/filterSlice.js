import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: 'Все',
  sort: {name: 'цене', value: 'price1'},
  shevron: true
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setRotateShevron(state) {
      state.shevron = !state.shevron
    },
  },
})

export const { setCategory, setSort, setRotateShevron } = filterSlice.actions

export default filterSlice.reducer