import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('cart/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    cartItems: [],
    status: 'idle',
  },
  reducers: {
    addcart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removecart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
  },
  extraReducers: rd => {
    rd
      .addCase(fetchItems.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succees';
        state.products = action.payload;
      })
      .addCase(fetchItems.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { addcart, removecart } = cartSlice.actions;

export default cartSlice.reducer;
