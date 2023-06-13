import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookItems: [],
    isLoading: true,
}

const booksSlice = createSlice({
    name: 'book',
    initialState,
    reducers:{
        
    }
})

export default booksSlice.reducer;