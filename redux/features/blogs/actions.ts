import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import * as helpers from "../../../utils/helpers";
import { reducer } from "./index";
import getAllBlogs from "../../../backend/firebase/blogs/getAllBlogs";
import getBlog from "../../../backend/firebase/blogs/getBlog";
import addBlog from "../../../backend/firebase/blogs/addBlog";
import deleteBlog from "../../../backend/firebase/blogs/deleteBlog";
import updateBlog from "../../../backend/firebase/blogs/updateBlog";
import { updateImage } from "../../../backend/firebase/blogs/updateBlog";

//ASYNC THUNKS

//This function is to get a json return for getServerSideProps
export async function fetchBlogsGetProps(): Promise<any> {
  const data = await getAllBlogs();

  const result: any = [];
  data?.forEach((item) => {
    result.push({
      id: item.id ?? "",
      imageUrl: item.data().imageUrl ?? "",
      blogID: item.data().blogID ?? "",
      name: item.data().name ?? "",
      content: item.data().content ?? "",
      dateCreated: item.data().dateCreated ? helpers.convertTimestamp(item.data().dateCreated) : "",
    });
  });

  return JSON.parse(JSON.stringify(result));
}

export const fetchAllBlogsAsync = createAsyncThunk(
  "blog/getAllBlogs",
  async () => {
    const data = await getAllBlogs();

    const result: any = [];
    data?.forEach((item) => {
      result.push({
        id: item.id ?? "",
        imageUrl: item.data().imageUrl ?? "",
        blogID: item.data().blogID ?? "",
        name: item.data().name ?? "",
        content: item.data().content ?? "",
        dateCreated: item.data().dateCreated ? helpers.convertTimestamp(item.data().dateCreated) : "",
      });
    });

    return result;
  }
);

export const fetchBlogAsync = createAsyncThunk(
  "blog/getBlog",
  async (blogID: any) => {
    const data = await getBlog(blogID);

    const result: any = [];
    data?.forEach((item) => {
      result.push({
        id: item.id ?? "",
        imageUrl: item.data().imageUrl ?? "",
        blogID: item.data().blogID ?? "",
        name: item.data().name ?? "",
        content: item.data().content ?? "",
        dateCreated: item.data().dateCreated ? helpers.convertTimestamp(item.data().dateCreated) : "",
      });
    });

    console.log(result)

    return result;
  }
);

export const addNewBlogAsync = createAsyncThunk(
  "blog/addBlog",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    const data = await addBlog(selectedFile, dataObject);
  }
);

export const updateBlogAsync = createAsyncThunk(
  "blog/updateBlog",
  async (dataObject: any) => {
    const data = await updateBlog(dataObject);
  }
);

export const updateBlogImageAsync = createAsyncThunk(
  "blog/updateImage",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    Promise.all([
      await updateBlog(dataObject),
      updateImage(selectedFile, dataObject),
    ]);
  }
);

export const deleteBlogAsync = createAsyncThunk(
  "blog/deleteBlog",
  async (dataId: any) => {
    const data = await deleteBlog(dataId);
  }
);

//THUNK LOGICS
export const checkBeforeFetchBlogs =
  (): AppThunk => (dispatch, getState) => {
    const currentValue = reducer.selectBlogList(getState());
    if (!currentValue) {
      dispatch(fetchAllBlogsAsync());
    }
  };

export const addNewBlogAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(addNewBlogAsync({ selectedFile, dataObject }));
    dispatch(fetchAllBlogsAsync());
  };

export const updateBlogAndFetch =
  (dataObject: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateBlogAsync(dataObject));
    dispatch(fetchAllBlogsAsync());
  };

export const updateBlogImageAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateBlogImageAsync({ selectedFile, dataObject }));
    dispatch(fetchAllBlogsAsync());
  };

export const deleteBlogAndFetch =
  (dataId: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(deleteBlogAsync(dataId));
    dispatch(fetchAllBlogsAsync());
  };
