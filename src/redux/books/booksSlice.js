import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UxDmH66eoKqiAUeC27Ts/books';

const initialState = {
  bookItems: [],
  isLoading: false,
  error: null,
};

export const getBookItems = createAsyncThunk('book/getBookItems', async () => {
  try {
    const res = await axios.get(url);
    /*eslint-disable */
    const data = res.data;
    const book = Object.keys(data).map((key) => ({
      ...data[key][0],
      item_id: key,
    }));
    return book;
  } catch (error) {
    return error.message;
  }
});

export const addNewBook = createAsyncThunk('book/addNewBook', async (info) => {
  const newBook = {
    item_id: nanoid(),
    title: info[1],
    author: info[2],
    category: info[3],
  };
  try {
    const res = await axios.post(url, newBook);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
 try {
    await axios.delete(`${url}/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBook: (state, action) => {
      
    //   state.bookItems.push(newBook);
    // },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookItems = action.payload;
      })
      .addCase(getBookItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.bookItems.push(action.payload);
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const id = action.payload;
        console.log(action.payload);
        state.bookItems = state.bookItems.filter((item) => item.item_id !== id);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
