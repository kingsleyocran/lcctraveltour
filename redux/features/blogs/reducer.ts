import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { actions } from "./index";

export interface BlogState {
  blogList: any;
  blog: any;
  status: "idle" | "loading" | "failed";
  blogStatus: "idle" | "loading" | "failed";
}

const initialState: BlogState = {
  blogList: null,
  blog: null,
  status: "idle",
  blogStatus: "idle",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchAllBlogs: (state, action: any) => {
      state.blogList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //Fetch All Blogs Async
      .addCase(actions.fetchAllBlogsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.fetchAllBlogsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogList = action.payload;
      })
      .addCase(actions.fetchAllBlogsAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Fetch Blog Async
      .addCase(actions.fetchBlogAsync.pending, (state) => {
        state.blogStatus = "loading";
      })
      .addCase(actions.fetchBlogAsync.fulfilled, (state, action) => {
        state.blogStatus = "idle";
        state.blog = action.payload;
      })
      .addCase(actions.fetchBlogAsync.rejected, (state) => {
        state.blogStatus = "failed";
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

export const { fetchAllBlogs } = blogSlice.actions;

export const selectBlog = (state: RootState) => state.blog.blog;
export const selectBlogList = (state: RootState) => state.blog.blogList;
export const selectBlogListLoadingState = (state: RootState) => state.blog.status;
export const selectBlogLoadingState = (state: RootState) => state.blog.blogStatus;

export default blogSlice.reducer;
