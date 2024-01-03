import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { actions } from "./index";

export interface BlogState {
  blogsList: any;
  status: "idle" | "loading" | "failed";
}

const initialState: BlogState = {
  blogsList: [],
  status: "idle",
};

export const BlogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    fetchAllBlogs: (state, action: any) => {
      state.blogsList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //Fetch Blog Async
      .addCase(actions.fetchBlogAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.fetchBlogAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogsList = action.payload;
      })
      .addCase(actions.fetchBlogAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Add Blog Async
      .addCase(actions.addNewBlogAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.addNewBlogAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.addNewBlogAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Blog Async
      .addCase(actions.updateBlogAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateBlogAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateBlogAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Blog Image Async
      .addCase(actions.updateBlogImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateBlogImageAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateBlogImageAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Delete Blog Async
      .addCase(actions.deleteBlogAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.deleteBlogAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.deleteBlogAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { fetchAllBlogs } = BlogSlice.actions;

export const selectBlogs = (state: RootState) => state.blogs.blogsList;
export const selectBlogsLoadingState = (state: RootState) =>
  state.blogs.status;

export default BlogSlice.reducer;
