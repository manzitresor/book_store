import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => {
      state.filter((item) => item.id !== action.payload);
    },
  },
});

export default bookSlice.reducers;
