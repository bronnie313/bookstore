import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
        const newBook = action.payload;
        state.book.push(newBook);
    },
    removeBook: (state, action) => {
        const bookId = action.payload;
        state.bookItems = state.bookItems.filter((item) => item.id !== bookId)
    }
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
