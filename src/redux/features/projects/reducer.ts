import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { actions } from "./index";

export interface ProjectsState {
  projectList: any;
  status: "idle" | "loading" | "failed";
}

const initialState: ProjectsState = {
  projectList: [],
  status: "idle",
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {

    fetchAllProjects: (state, action: any) => {
      state.projectList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //Fetch Projects Async
      .addCase(actions.fetchProjectsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.fetchProjectsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.projectList = action.payload;
      })
      .addCase(actions.fetchProjectsAsync.rejected, (state) => {
        state.status = "failed";
      })
      
      //Add Projects Async
      .addCase(actions.addNewProjectAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.addNewProjectAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.addNewProjectAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Projects Async
      .addCase(actions.updateProjectAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateProjectAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateProjectAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Projects Image Async
      .addCase(actions.updateProjectImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateProjectImageAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateProjectImageAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Delete Project Async
      .addCase(actions.deleteProjectAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.deleteProjectAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.deleteProjectAsync.rejected, (state) => {
        state.status = "failed";
      })
      
  },
});

export const { fetchAllProjects } = projectsSlice.actions;

export const selectProjects = (state: RootState) => state.projects.projectList;
export const selectProjectsLoadingState = (state: RootState) => state.projects.status;

export default projectsSlice.reducer;
