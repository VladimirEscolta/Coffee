import { configureStore } from '@reduxjs/toolkit'
import filter from "./slices/filterSlice";
import coffee from "./slices/coffeeSlice";

export const store = configureStore({
  reducer: {
    filter,
    coffee
  },
})