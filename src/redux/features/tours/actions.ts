import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { reducer } from "./index";
import getAllTours from "@/backend/firebase/tours/getAllTours";
import getTourById from "@/backend/firebase/tours/getTour";
import addTour from "@/backend/firebase/tours/addTour";
import deleteTour from "@/backend/firebase/tours/deleteTour";
import updateTour from "@/backend/firebase/tours/updateTour";
import { updateImage } from "@/backend/firebase/tours/updateTour";
import { convertTimestamp } from "@/utils/helpers";

//ASYNC THUNKS

//This function is to get a json return for getServerSideProps
export async function fetchTourGetProps(): Promise<any> {
  const data = await getAllTours();

  const result: any = [];
  data?.forEach((item: any) => {
    result.push({
      id: item.id,
      imageUrl: item.data().imageUrl ?? "",
      title: item.data().title,
      startingPrice: item.data().startingPrice,
      summary: item.data().summary,
      content: item.data().content,
      tourArea: item.data().tourArea,
      dateCreated: item.data().dateCreated
        ? convertTimestamp(item.data().dateCreated)
        : "",
    });
  });

  return JSON.parse(JSON.stringify(result));
}

export const fetchTourAsync = createAsyncThunk("tours/listAll", async () => {
  const data = await getAllTours();

  const result: any = [];
  data?.forEach((item: any) => {
    result.push({
      id: item.id,
      imageUrl: item.data().imageUrl ?? "",
      title: item.data().title,
      startingPrice: item.data().startingPrice,
      summary: item.data().summary,
      content: item.data().content,
      tourArea: item.data().tourArea,
      dateCreated: item.data().dateCreated
        ? convertTimestamp(item.data().dateCreated)
        : "",
    });
  });

  return result;
});

export const fetchTourByIdAsync = createAsyncThunk(
  "tours/getOne",
  async (tourID: any) => {
    try {
      const data = await getTourById(tourID);
      return data;
    } catch (error) {
      return null;
    }
  }
);

export const addNewTourAsync = createAsyncThunk(
  "tours/addNew",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    await addTour(selectedFile, dataObject);
  }
);

export const updateTourAsync = createAsyncThunk(
  "tours/update",
  async (dataObject: any) => {
    await updateTour(dataObject);
  }
);

export const updateTourImageAsync = createAsyncThunk(
  "tours/updateImage",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    Promise.all([
      await updateTour(dataObject),
      updateImage(selectedFile, dataObject),
    ]);
  }
);

export const deleteTourAsync = createAsyncThunk(
  "tours/delete",
  async (dataId: any) => {
    await deleteTour(dataId);
  }
);

//THUNK LOGICS
export const checkBeforeFetchTours = (): AppThunk => (dispatch, getState) => {
  const currentValue = reducer.selectTours(getState());
  if (currentValue) {
    dispatch(fetchTourAsync());
  }
};

export const addNewTourAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(addNewTourAsync({ selectedFile, dataObject }));
    dispatch(fetchTourAsync());
  };

export const updateTourAndFetch =
  (dataObject: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateTourAsync(dataObject));
    dispatch(fetchTourAsync());
  };

export const updateTourImageAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateTourImageAsync({ selectedFile, dataObject }));
    dispatch(fetchTourAsync());
  };

export const deleteTourAndFetch =
  (dataId: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(deleteTourAsync(dataId));
    dispatch(fetchTourAsync());
  };
