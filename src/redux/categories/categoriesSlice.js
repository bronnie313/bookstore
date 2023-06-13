import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesItems: [],
  isLoading: true,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
});

export default categoriesSlice.reducer;
