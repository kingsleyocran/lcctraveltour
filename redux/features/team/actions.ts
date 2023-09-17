import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import * as content from "../../../utils/content";
import { reducer } from "./index";
import listAllTeamMembers from "../../../backend/firebase/team/getAllTeamMembers";
import addNewTeamMember from "../../../backend/firebase/team/addTeamMember";
import deleteTeamMember from "../../../backend/firebase/team/deleteTeamMember";
import updateTeamMember from "../../../backend/firebase/team/updateTeamMember";
import { updateImage } from "../../../backend/firebase/team/updateTeamMember";

//ASYNC THUNKS

//This function is to get a json return for getServerSideProps
export async function fetchTeamGetProps(): Promise<any> {
  const data = await listAllTeamMembers();

  const result: any = [];
  data?.forEach((item) => {
    result.push({
      id: item.id ?? "",
      imageUrl: item.data().imageUrl ?? "",
      name: item.data().name ?? "",
      portfolio: item.data().portfolio ?? "",
      content: item.data().content ?? "",
      link: item.data().link ?? "",
    });
  });

  return JSON.parse(JSON.stringify(result));
}

export const fetchTeamMemberAsync = createAsyncThunk(
  "teams/listAllTeamMembers",
  async () => {
    const data = await listAllTeamMembers();

    const result: any = [];
    data?.forEach((item) => {
      result.push({
        id: item.id ?? "",
        imageUrl: item.data().imageUrl ?? "",
        name: item.data().name ?? "",
        portfolio: item.data().portfolio ?? "",
        content: item.data().content ?? "",
        link: item.data().link ?? "",
      });
    });

    return result;
  }
);

export const addNewTeamMemberAsync = createAsyncThunk(
  "teams/addNewTeamMember",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    const data = await addNewTeamMember(selectedFile, dataObject);
  }
);

export const updateTeamMemberAsync = createAsyncThunk(
  "teams/updateTeamMember",
  async (dataObject: any) => {
    const data = await updateTeamMember(dataObject);
  }
);

export const updateTeamMemberImageAsync = createAsyncThunk(
  "teams/updateTeamMemberImage",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    Promise.all([
      await updateTeamMember(dataObject),
      updateImage(selectedFile, dataObject),
    ]);
  }
);

export const deleteTeamMemberAsync = createAsyncThunk(
  "teams/deleteTeamMember",
  async (dataId: any) => {
    const data = await deleteTeamMember(dataId);
  }
);

//THUNK LOGICS
export const checkBeforeFetchTeam =
  (): AppThunk => (dispatch, getState) => {
    const currentValue = reducer.selectTeam(getState());
    if (!currentValue) {
      dispatch(fetchTeamMemberAsync());
    }
  };

export const addNewTeamMemberAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(addNewTeamMemberAsync({ selectedFile, dataObject }));
    dispatch(fetchTeamMemberAsync());
  };

export const updateTeamMemberAndFetch =
  (dataObject: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateTeamMemberAsync(dataObject));
    dispatch(fetchTeamMemberAsync());
  };

export const updateTeamMemberImageAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateTeamMemberImageAsync({ selectedFile, dataObject }));
    dispatch(fetchTeamMemberAsync());
  };

export const deleteTeamMemberAndFetch =
  (dataId: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(deleteTeamMemberAsync(dataId));
    dispatch(fetchTeamMemberAsync());
  };
