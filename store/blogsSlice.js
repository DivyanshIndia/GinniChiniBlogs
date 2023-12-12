import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push({
        id: action.payload.id,
        title: action.payload.title,
        thumbnail: action.payload.thumbnail,
        author: action.payload.author,
        content: action.payload.content,
        created: action.payload.created,
      });
    },
  },
});

export const { addBlog } = blogsSlice.actions;

export default blogsSlice.reducer;
