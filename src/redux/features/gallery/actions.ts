import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { reducer } from "./index";
import listAllGallery from "@/backend/firebase/gallery/getAllGalleryImages";
import addNewGallery from "@/backend/firebase/gallery/addGalleryImage";
import deleteGallery from "@/backend/firebase/gallery/deleteGalleryImage";
import updateGallery from "@/backend/firebase/gallery/updateGalleryImage";
import { updateImage } from "@/backend/firebase/gallery/updateGalleryImage";
import { convertTimestamp } from "@/utils/helpers";

//ASYNC THUNKS

//This function is to get a json return for getServerSideProps
export async function fetchGalleryGetProps(): Promise<any> {
  const data = await listAllGallery();

  const result: any = [];
  data?.forEach((item: any) => {
    result.push({
      id: item.id,
      imageUrl: item.data().imageUrl ?? "",
      name: item.data().name,
      dateCreated: item.data().dateCreated
        ? convertTimestamp(item.data().dateCreated)
        : "",
    });
  });

  return JSON.parse(JSON.stringify(result));
}

export const fetchGalleryAsync = createAsyncThunk(
  "gallery/listAll",
  async () => {
    const data = await listAllGallery();

    const result: any = [];
    data?.forEach((item: any) => {
      result.push({
        id: item.id,
        imageUrl: item.data().imageUrl ?? "",
        name: item.data().name,
        dateCreated: item.data().dateCreated
          ? convertTimestamp(item.data().dateCreated)
          : "",
      });
    });

    return result;
  }
);

export const addNewGalleryAsync = createAsyncThunk(
  "gallery/addNew",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    await addNewGallery(selectedFile, dataObject);
  }
);

export const updateGalleryAsync = createAsyncThunk(
  "gallery/update",
  async (dataObject: any) => {
    await updateGallery(dataObject);
  }
);

export const updateGalleryImageAsync = createAsyncThunk(
  "gallery/updateImage",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    Promise.all([
      await updateGallery(dataObject),
      updateImage(selectedFile, dataObject),
    ]);
  }
);

export const deleteGalleryAsync = createAsyncThunk(
  "gallery/delete",
  async (dataId: any) => {
    await deleteGallery(dataId);
  }
);

//THUNK LOGICS
export const checkBeforeFetchGallery = (): AppThunk => (dispatch, getState) => {
  const currentValue = reducer.selectGallery(getState());
  if (currentValue) {
    dispatch(fetchGalleryAsync());
  }
};

export const addNewGalleryAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(addNewGalleryAsync({ selectedFile, dataObject }));
    dispatch(fetchGalleryAsync());
  };

export const updateGalleryAndFetch =
  (dataObject: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(updateGalleryAsync(dataObject));
    dispatch(fetchGalleryAsync());
  };

export const updateGalleryImageAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(updateGalleryImageAsync({ selectedFile, dataObject }));
    dispatch(fetchGalleryAsync());
  };

export const deleteGalleryAndFetch =
  (dataId: string): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(deleteGalleryAsync(dataId));
    dispatch(fetchGalleryAsync());
  };
