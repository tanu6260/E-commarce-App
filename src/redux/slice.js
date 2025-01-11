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
    totalQuantity: 0,
    status: 'idle',
  },
  reducers: {
    addcart: (state, action) => {
      const existingItem = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (existingItem !== -1) {
        state.cartItems[existingItem].quantity = action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    },

    removecart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      state.totalQuantity = state.cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

    }
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

export const { addcart, removecart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;



