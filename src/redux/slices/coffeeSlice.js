import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  sum: 0
}

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    countPlus: (state) => {
      state.value < 10 && (state.value += 1)
    },
    countMinus: (state) => {
      state.value > 0 && (state.value -= 1)
    },
    countReset: (state, action) => {
      state.value = 0
    },
  },
})

export const {countPlus, countMinus, countReset} = coffeeSlice.actions

export default coffeeSlice.reducer