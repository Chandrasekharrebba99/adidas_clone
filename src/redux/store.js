// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,  // Register the product slice
  },
});

export default store;
