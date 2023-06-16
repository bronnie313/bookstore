import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oOByFopWlgJd933e8QvV/books';

const initialState = {
  bookItems: [],
  isLoading: false,
  error: null,
};

export const getBookItems = createAsyncThunk('book/getBookItems', async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const addNewBook = createAsyncThunk('book/addNewBook', async(newBook) => {
  try {
    const res = await axios.post(url, newBook);
    return res.data;
  } catch (error) {
    return error.message; 
  }
})

export const deleteBook = createAsyncThunk('book/deleteBook', async(bookId) => {
  try {
    const res = await axios.delete(`${url}/${bookId}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: `item${state.bookItems.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
        categories: action.payload.categories,
      };
      state.bookItems.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.item_id !== bookId);
    },
  },
  extraReducers: {
    [getBookItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookItems = action.payload;
    },
    [getBookItems.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
