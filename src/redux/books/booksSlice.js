import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../bookItems';

const initialState = {
  bookItems,
  isLoading: true,
};

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
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
