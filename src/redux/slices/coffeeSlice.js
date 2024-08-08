import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  items: [],
  count: 0,
  sum: 0
}

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    setItems: (state, action) => {
      let count = 0
      let sum = 0
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].count1 += action.payload.count1;
        state.items[itemIndex].count2 += action.payload.count2;
      } else {
        state.items.push(action.payload);
      }
      state.items.map(i => {
        count += i.count1 + i.count2
        sum += i.count1 * i.price1 + i.count2 * i.price2
      })
      state.count = count
      state.sum = sum
    }
  },
})

export const {setItems} = coffeeSlice.actions

export default coffeeSlice.reducer