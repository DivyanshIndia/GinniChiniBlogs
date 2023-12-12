import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authors: [],
};

export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    addAuthor: (state, action) => {
      state.authors.push({
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
      });
    },
  },
});

export const { addAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
