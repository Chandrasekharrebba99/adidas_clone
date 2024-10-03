import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products/');
    return response.data; 
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
    
     addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      
      if (existingProduct) {
     
        existingProduct.quantity += 1;
      } else {

        state.cart.push({ ...product, quantity: 1 });
      }
    },
    
    // Remove a product from the cart
    removeFromCart: (state, action) => {
      const productId = action.payload;
      // console.log(productId)
      state.cart = state.cart.filter(item => item.id !== productId.id);
    },
    
    
    

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
        state.items = action.payload.reverse(); // Set fetched data to state
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { addToCart, removeFromCart, clearCart } = productSlice.actions;

export default productSlice.reducer;
