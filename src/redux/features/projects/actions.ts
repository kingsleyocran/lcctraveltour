import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { reducer } from "./index";
import listAllProjects from "@/backend/firebase/projects/getAllProjects";
import addNewProject from "@/backend/firebase/projects/addProject";
import deleteProject from "@/backend/firebase/projects/deleteProject";
import updateProject from "@/backend/firebase/projects/updateProject";
import { updateImage } from "@/backend/firebase/projects/updateProject";
import { convertTimestamp } from "@/utils/helpers";

//ASYNC THUNKS

//This function is to get a json return for getServerSideProps
export async function fetchProjectsGetProps(): Promise<any> {
  const data = await listAllProjects();

  const result: any = [];
  data?.forEach((item) => {
    result.push({
      id: item.id,
      imageUrl: item.data().imageUrl ?? "",
      name: item.data().name,
      stage: item.data().stage,
      content: item.data().content,
      link: item.data().link,
      sector: item.data().sector,
      dateCreated: item.data().dateCreated ? convertTimestamp(item.data().dateCreated) : "",
    });
  });

  return JSON.parse(JSON.stringify(result));
}

export const fetchProjectsAsync = createAsyncThunk(
  "projects/listAllProjects",
  async () => {
    const data = await listAllProjects();

    const result: any = [];
    data?.forEach((item) => {
      result.push({
        id: item.id,
        imageUrl: item.data().imageUrl ?? "",
        name: item.data().name,
        stage: item.data().stage,
        content: item.data().content,
        link: item.data().link,
        sector: item.data().sector,
      });
    });

    return result;
  }
);

export const addNewProjectAsync = createAsyncThunk(
  "projects/addNewProjects",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    const data = await addNewProject(selectedFile, dataObject);
  }
);

export const updateProjectAsync = createAsyncThunk(
  "projects/updateProject",
  async (dataObject: any) => {
    const data = await updateProject(dataObject);
  }
);

export const updateProjectImageAsync = createAsyncThunk(
  "projects/updateProjectImage",
  async ({
    selectedFile,
    dataObject,
  }: {
    selectedFile: string;
    dataObject: any;
  }) => {
    Promise.all([
      await updateProject(dataObject),
      updateImage(selectedFile, dataObject),
    ]);
  }
);

export const deleteProjectAsync = createAsyncThunk(
  "projects/deleteProjects",
  async (dataId: any) => {
    const data = await deleteProject(dataId);
  }
);

//THUNK LOGICS
export const checkBeforeFetchProjects =
  (): AppThunk => (dispatch, getState) => {
    const currentValue = reducer.selectProjects(getState());
    if (currentValue) {
      dispatch(fetchProjectsAsync());
    }
  };

export const addNewProjectAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(addNewProjectAsync({ selectedFile, dataObject }));
    dispatch(fetchProjectsAsync());
  };

export const updateProjectAndFetch =
  (dataObject: any): AppThunk =>
  async (dispatch, getState) => {
    await  dispatch(updateProjectAsync(dataObject));
    dispatch(fetchProjectsAsync());
  };

export const updateProjectImageAndFetch =
  (dataObject: any, selectedFile: any): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(updateProjectImageAsync({ selectedFile, dataObject }));
    dispatch(fetchProjectsAsync());
  };

export const deleteProjectAndFetch =
  (dataId: string): AppThunk =>
  async (dispatch, getState) => {
    await dispatch(deleteProjectAsync(dataId));
    dispatch(fetchProjectsAsync());
  };
