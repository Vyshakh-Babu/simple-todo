import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
		todo: todoReducer,
    // Add other reducers here if you have more slices
  },
});