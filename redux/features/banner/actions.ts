import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { reducer } from "./index";
import getBanner from "../../../backend/firebase/banner/getBanner";
import getBannerByID from "../../../backend/firebase/banner/getBannerByID";
import updateBanner from "../../../backend/firebase/banner/updateBanner";
import { updateImageDesktop, updateImageMobile } from "../../../backend/firebase/banner/updateBanner";

//ASYNC THUNKS

//This function is to get a json return for getServerSideProps
export async function fetchBannerGetProps(): Promise<any> {
  const data = await getBanner();

  const result: any = [];
  data?.forEach((item) => {
    result.push({
      id: item.id,
      desktopUrl: item.data().desktopUrl ?? "",
      mobileUrl: item.data().mobileUrl ?? "",
      link: item.data().link,
      subTitle: item.data().subTitle,
      title: item.data().title,
      buttonTitle: item.data().buttonTitle,
      showID: item.data().showID,
    });
  });

  return JSON.parse(JSON.stringify(result));
}

export const fetchBannerAsync = createAsyncThunk(
  "banner/getBanner",
  async () => {
    const data = await getBannerByID("home-banner")
    return data;
  }
);

export const updateBannerAsync = createAsyncThunk(
  "banner/updateBanner",
  async (dataObject: any) => {
    const data = await updateBanner(dataObject);
  }
);

export const updateBannerImageAsync = createAsyncThunk(
  "banner/updateBannerImage",
  async ({
    selectedFile,
    selectedMobileFile,
    dataObject,
  }: {
    selectedFile: string;
    selectedMobileFile: string;
    dataObject: any;
  }) => {
    Promise.all([
      (selectedFile) ? await updateImageDesktop(selectedFile, dataObject) : true,
      (selectedMobileFile) ? await updateImageMobile(selectedMobileFile, dataObject) : true,
    ]);
  }
);

//THUNK LOGICS
export const checkBeforeFetchBanner = (): AppThunk => (dispatch, getState) => {
  const currentValue = reducer.selectBannerState(getState());
  if (!currentValue) {
    dispatch(fetchBannerAsync());
  }
};

export const updateBannerAndFetch =
  (dataObject: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateBannerAsync(dataObject));
    dispatch(fetchBannerAsync());
  };

export const updateBannerImageAndFetch =
  (dataObject: any, selectedFile: any, selectedMobileFile: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(
      updateBannerImageAsync({
        selectedFile,
        selectedMobileFile,
        dataObject,
      })
    );
    dispatch(fetchBannerAsync());
  };
