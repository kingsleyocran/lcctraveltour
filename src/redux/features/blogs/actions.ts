import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { reducer } from "./index";
import getAllBlogs from "@/backend/firebase/blogs/getAllBlogs";
import addBlog from "@/backend/firebase/blogs/addBlog";
import deleteBlog from "@/backend/firebase/blogs/deleteBlog";
import updateBlog from "@/backend/firebase/blogs/updateBlog";
import { updateImage } from "@/backend/firebase/blogs/updateBlog";
import { convertTimestamp } from "@/utils/helpers";
import getBlogById from "@/backend/firebase/blogs/getBlog";

//ASYNC THUNKS

//This function is to get a json return for getServerSideProps
export async function fetchBlogGetProps(): Promise<any> {
  const data = await getAllBlogs();

  const result: any = [];
  data?.forEach((item: any) => {
    result.push({
      id: item.id,
      imageUrl: item.data().imageUrl ?? "",
      title: item.data().title,
      blogID: item.data().blogID,
      content: item.data().content,
      dateCreated: item.data().dateCreated
        ? convertTimestamp(item.data().dateCreated)
        : "",
    });
  });

  return JSON.parse(JSON.stringify(result));
}

export const fetchBlogAsync = createAsyncThunk("blogs/listAll", async () => {
  const data = await getAllBlogs();

  const result: any = [];
  data?.forEach((item: any) => {
    result.push({
      id: item.id,
      imageUrl: item.data().imageUrl ?? "",
      title: item.data().title,
      blogID: item.data().blogID,
      content: item.data().content,
      dateCreated: item.data().dateCreated
        ? convertTimestamp(item.data().dateCreated)
        : "",
    });
  });

  return result;
});

export const fetchBlogByIdAsync = createAsyncThunk(
  "blogs/getOne",
  async (tourID: any) => {
    try {
      const data = await getBlogById(tourID);
      if (data) {
        return data;
      }
    } catch (error) {
      return null;
    }
  }
);

export const addNewBlogAsync = createAsyncThunk(
  "blogs/addNew",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    await addBlog(selectedFile, dataObject);
  }
);

export const updateBlogAsync = createAsyncThunk(
  "blogs/update",
  async (dataObject: any) => {
    await updateBlog(dataObject);
  }
);

export const updateBlogImageAsync = createAsyncThunk(
  "blogs/updateImage",
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
  "blogs/delete",
  async (dataId: any) => {
    const data = await deleteBlog(dataId);
  }
);

//THUNK LOGICS
export const checkBeforeFetchBlog = (): AppThunk => (dispatch, getState) => {
  const currentValue = reducer.selectBlogs(getState());
  if (currentValue) {
    dispatch(fetchBlogAsync());
  }
};

export const addNewBlogAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(addNewBlogAsync({ selectedFile, dataObject }));
    dispatch(fetchBlogAsync());
  };

export const updateBlogAndFetch =
  (dataObject: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(updateBlogAsync(dataObject));
    dispatch(fetchBlogAsync());
  };

export const updateBlogImageAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(updateBlogImageAsync({ selectedFile, dataObject }));
    dispatch(fetchBlogAsync());
  };

export const deleteBlogAndFetch =
  (dataId: string): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(deleteBlogAsync(dataId));
    dispatch(fetchBlogAsync());
  };
