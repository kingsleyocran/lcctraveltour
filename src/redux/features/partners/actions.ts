import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { reducer } from "./index";
import listAllPartners from "@/backend/firebase/partners/getAllPartners";
import addNewPartner from "@/backend/firebase/partners/addPartner";
import deletePartner from "@/backend/firebase/partners/deletePartner";
import updatePartner from "@/backend/firebase/partners/updatePartner";
import { updateImage } from "@/backend/firebase/partners/updatePartner";

//ASYNC THUNKS
//This function is to get a json return for getServerSideProps
export async function fetchPartnersGetProps(): Promise<any> {
  const data = await listAllPartners();

  const result: any = [];
  data?.forEach((item: any) => {
    result.push({
      id: item.id,
      imageUrl: item.data().imageUrl ?? "",
      name: item.data().name,
      type: item.data().type,
      content: item.data().content ?? "",
      link: item.data().link ?? "",
      sector: item.data().sector ?? "",
    });
  });

  return JSON.parse(JSON.stringify(result));
}

export const fetchPartnersAsync = createAsyncThunk(
  "partners/listAllPartners",
  async () => {
    const data = await listAllPartners();

    

    const result: any = [];
    data?.forEach((item: any) => {
      result.push({
        id: item.id,
        imageUrl: item.data().imageUrl ?? "",
        name: item.data().name,
        type: item.data().type,
        content: item.data().content ?? "",
        link: item.data().link ?? "",
        sector: item.data().sector ?? "",
      });
    });

   
    return result;
  }
);

export const addNewPartnerAsync = createAsyncThunk(
  "partners/addNewPartners",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    const data = await addNewPartner(selectedFile, dataObject);
  }
);

export const updatePartnerAsync = createAsyncThunk(
  "partners/updatePartner",
  async (dataObject: any) => {
    const data = await updatePartner(dataObject);
  }
);

export const updatePartnerImageAsync = createAsyncThunk(
  "partners/updatePartnerImage",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    Promise.all([
      await updatePartner(dataObject),
      updateImage(selectedFile, dataObject),
    ]);
  }
);

export const deletePartnerAsync = createAsyncThunk(
  "partners/deletePartners",
  async (dataId: any) => {
    const data = await deletePartner(dataId);
  }
);

//THUNK LOGICS
export const checkBeforeFetchPartners =
  (): AppThunk => (dispatch, getState) => {
    const currentValue = reducer.selectPartners(getState());
    if (currentValue) {
      dispatch(fetchPartnersAsync());
    }
  };

export const addNewPartnerAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(addNewPartnerAsync({ selectedFile, dataObject }));
    dispatch(fetchPartnersAsync());
  };

export const updatePartnerAndFetch =
  (dataObject: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(updatePartnerAsync(dataObject));
    dispatch(fetchPartnersAsync());
  };

export const updatePartnerImageAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(updatePartnerImageAsync({ selectedFile, dataObject }));
    dispatch(fetchPartnersAsync());
  };

export const deletePartnerAndFetch =
  (dataId: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(deletePartnerAsync(dataId));
    dispatch(fetchPartnersAsync());
  };
