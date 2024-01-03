import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { reducer } from "./index";
import getAllTestimonials from "@/backend/firebase/testimonials/getAllTestimonials";
import addTestimonial from "@/backend/firebase/testimonials/addTestimonial";
import deleteTestimonial from "@/backend/firebase/testimonials/deleteTestimonial";
import updateTestimonial from "@/backend/firebase/testimonials/updateTestimonial";
import { updateImage } from "@/backend/firebase/testimonials/updateTestimonial";
import { convertTimestamp } from "@/utils/helpers";

//ASYNC THUNKS

//This function is to get a json return for getServerSideProps
export async function fetchTourGetProps(): Promise<any> {
  const data = await getAllTestimonials();

  const result: any = [];
  data?.forEach((item: any) => {
    result.push({
      id: item.id,
      imageUrl: item.data().imageUrl ?? "",
      name: item.data().name,
      content: item.data().content,
      portfolio: item.data().portfolio,
      dateCreated: item.data().dateCreated
      ? convertTimestamp(item.data().dateCreated)
      : "",
    });
  });

  return JSON.parse(JSON.stringify(result));
}

export const fetchTestimonialAsync = createAsyncThunk(
  "testimonials/listAll",
  async () => {
    const data = await getAllTestimonials();

    const result: any = [];
    data?.forEach((item: any) => {
      result.push({
        id: item.id,
        imageUrl: item.data().imageUrl ?? "",
        name: item.data().name,
        content: item.data().content,
        portfolio: item.data().portfolio,
        dateCreated: item.data().dateCreated
        ? convertTimestamp(item.data().dateCreated)
        : "",
      });
    });

    return result;
  }
);

export const addNewTestimonialAsync = createAsyncThunk(
  "testimonials/addNew",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    await addTestimonial(selectedFile, dataObject);
  }
);

export const updateTestimonialAsync = createAsyncThunk(
  "testimonials/update",
  async (dataObject: any) => {
    await updateTestimonial(dataObject);
  }
);

export const updateTestimonialImageAsync = createAsyncThunk(
  "testimonials/updateImage",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    Promise.all([
      await updateTestimonial(dataObject),
      updateImage(selectedFile, dataObject),
    ]);
  }
);

export const deleteTestimonialAsync = createAsyncThunk(
  "testimonials/delete",
  async (dataId: any) => {
    await deleteTestimonial(dataId);
  }
);

//THUNK LOGICS
export const checkBeforeFetchTestimonials =
  (): AppThunk => (dispatch, getState) => {
    const currentValue = reducer.selectTestimonials(getState());
    if (currentValue) {
      dispatch(fetchTestimonialAsync());
    }
  };

export const addNewTestimonialAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(addNewTestimonialAsync({ selectedFile, dataObject }));
    dispatch(fetchTestimonialAsync());
  };

export const updateTestimonialAndFetch =
  (dataObject: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(updateTestimonialAsync(dataObject));
    dispatch(fetchTestimonialAsync());
  };

export const updateTestimonialImageAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(updateTestimonialImageAsync({ selectedFile, dataObject }));
    dispatch(fetchTestimonialAsync());
  };

export const deleteTestimonialAndFetch =
  (dataId: string): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(deleteTestimonialAsync(dataId));
    dispatch(fetchTestimonialAsync());
  };
