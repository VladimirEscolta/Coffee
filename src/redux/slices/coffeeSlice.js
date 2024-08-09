import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  items: [],
  count: 0,
  sum: 0
}

const calculateTotals = (items) => {
  let count = 0;
  let sum = 0;

  items.forEach(item => {
    count += item.count1 + item.count2;
    sum += item.count1 * item.price1 + item.count2 * item.price2;
  });
  return {count, sum};
};

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    addItems: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].count1 += action.payload.count1;
        state.items[itemIndex].count2 += action.payload.count2;
      } else {
        state.items.push(action.payload);
      }
      const totals = calculateTotals(state.items);
      state.count = totals.count;
      state.sum = totals.sum;
    },
    minusItems1: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0 && state.items[itemIndex].count1 > 0) {
        state.items[itemIndex].count1 -= 1;
      }
      const totals = calculateTotals(state.items);
      state.count = totals.count;
      state.sum = totals.sum;
    },
    plusItems1: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0 && state.items[itemIndex].count1 < 10) {
        state.items[itemIndex].count1 += 1;
      }
      const totals = calculateTotals(state.items);
      state.count = totals.count;
      state.sum = totals.sum;
    },
    minusItems2: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0 && state.items[itemIndex].count2 > 0) {
        state.items[itemIndex].count2 -= 1;
      }
      const totals = calculateTotals(state.items);
      state.count = totals.count;
      state.sum = totals.sum;
    },
    plusItems2: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0 && state.items[itemIndex].count2 < 10) {
        state.items[itemIndex].count2 += 1;
      }
      const totals = calculateTotals(state.items);
      state.count = totals.count;
      state.sum = totals.sum;
    },
    deleteItems: (state, action) => {
      const sortedItems = state.items.filter((item) => item.id !== action.payload.id);
      state.items = sortedItems
      const totals = calculateTotals(state.items);
      state.count = totals.count;
      state.sum = totals.sum;
    },
    deleteAll: (state) => {
      state.items = []
      state.count = 0;
      state.sum = 0;
    },
  },
})

export const {
  addItems,
  minusItems1,
  plusItems1,
  minusItems2,
  plusItems2,
  deleteItems,
  deleteAll
} = coffeeSlice.actions

export default coffeeSlice.reducer