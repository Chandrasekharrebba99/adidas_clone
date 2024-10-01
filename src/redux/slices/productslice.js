// src/redux/slices/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products/');
    return response.data;  // Automatically dispatches fulfilled or rejected actions
  }
);
// https://dummyjson.com/products
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    cart: [], 
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // Optional: You can define synchronous actions here
     // Add a product to the cart
     addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      
      if (existingProduct) {
        // If the product already exists in the cart, increase the quantity
        existingProduct.quantity += 1;
      } else {
        // If it's a new product, add it to the cart
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    
    // Remove a product from the cart
    removeFromCart: (state, action) => {
      const productId = action.payload;
      // console.log(productId)
      state.cart = state.cart.filter(item => item.id !== productId.id);
    },
    
    // Update the quantity of a product in the cart
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.cart.find(item => item.id === id);
      
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
    
    // Clear the entire cart
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Set fetched data to state
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = productSlice.actions;

export default productSlice.reducer;
