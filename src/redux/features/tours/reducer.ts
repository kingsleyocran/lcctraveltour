import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { actions } from "./index";

export interface TourState {
  toursList: any;
  status: "idle" | "loading" | "failed";
}

const initialState: TourState = {
  toursList: [],
  status: "idle",
};

export const TourSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    fetchAllTours: (state, action: any) => {
      state.toursList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //Fetch Blog Async
      .addCase(actions.fetchTourAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.fetchTourAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.toursList = action.payload;
      })
      .addCase(actions.fetchTourAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Add Blog Async
      .addCase(actions.addNewTourAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.addNewTourAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.addNewTourAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Blog Async
      .addCase(actions.updateTourAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateTourAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateTourAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Blog Image Async
      .addCase(actions.updateTourImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateTourImageAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateTourImageAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Delete Blog Async
      .addCase(actions.deleteTourAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.deleteTourAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.deleteTourAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { fetchAllTours } = TourSlice.actions;

export const selectTours = (state: RootState) => state.tours.toursList;
export const selectToursLoadingState = (state: RootState) =>
  state.tours.status;

export default TourSlice.reducer;
