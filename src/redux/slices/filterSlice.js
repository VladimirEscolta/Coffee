import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  category: 'Все',
  sort: {name: 'цене', value: 'price1'},
  shevron: true,
  search: '',
  currentPage: 1,
  limitPage: 10
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
    setSearch(state, action) {
      state.search = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setLimitPage(state, action) {
      state.limitPage = action.payload
    }
  },
})

export const {setCategory, setSort, setRotateShevron, setSearch, setCurrentPage, setLimitPage} = filterSlice.actions

export default filterSlice.reducer