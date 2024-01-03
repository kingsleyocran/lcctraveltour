import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { actions } from "./index";

export interface GalleryState {
  galleryList: any;
  status: "idle" | "loading" | "failed";
}

const initialState: GalleryState = {
  galleryList: [],
  status: "idle",
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    fetchAllGallery: (state, action: any) => {
      state.galleryList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //Fetch gallery Async
      .addCase(actions.fetchGalleryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.fetchGalleryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.galleryList = action.payload;
      })
      .addCase(actions.fetchGalleryAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Add gallery Async
      .addCase(actions.addNewGalleryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.addNewGalleryAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.addNewGalleryAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update gallery Async
      .addCase(actions.updateGalleryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateGalleryAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateGalleryAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update gallery Image Async
      .addCase(actions.updateGalleryImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateGalleryImageAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateGalleryImageAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Delete gallery Async
      .addCase(actions.deleteGalleryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.deleteGalleryAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.deleteGalleryAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { fetchAllGallery } = gallerySlice.actions;

export const selectGallery = (state: RootState) => state.gallery.galleryList;
export const selectGalleryLoadingState = (state: RootState) =>
  state.gallery.status;

export default gallerySlice.reducer;
