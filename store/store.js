import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./authorsSlice";
import blogsReducer from "./blogsSlice";

export const store = configureStore({
  reducer: {
    authors: authorReducer,
    blogs : blogsReducer
  },
});
