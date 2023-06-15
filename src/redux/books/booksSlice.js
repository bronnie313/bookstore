import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [{
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    categories: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    categories: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    categories: 'Nonfiction',
  },
  ],
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
      state.bookItems = state.bookItems.filter((item) => item.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
