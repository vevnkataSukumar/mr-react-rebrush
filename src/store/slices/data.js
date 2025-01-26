import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data; // Return the fetched products
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Array to store products
    status: 'idle', // idle | loading | succeeded | failed
    error: null, // Error message if fetching fails
  },
  reducers: {}, // No synchronous reducers needed for this example
  extraReducers: (builder) => {  // builder should be a function that accepts builder
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
