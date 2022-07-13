
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/testSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})