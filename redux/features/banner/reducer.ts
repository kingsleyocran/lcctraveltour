import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { actions } from "./index";

export interface BannerState {
  bannerData: any;
  status: "idle" | "loading" | "failed";
}

const initialState: BannerState = {
  bannerData: null,
  status: "idle",
};

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    fetchBannerData: (state, action: any) => {
      state.bannerData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //Fetch Projects Async
      .addCase(actions.fetchBannerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.fetchBannerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.bannerData = action.payload;
      })
      .addCase(actions.fetchBannerAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Banner Async
      .addCase(actions.updateBannerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateBannerAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateBannerAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Banner Image Async
      .addCase(actions.updateBannerImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        actions.updateBannerImageAsync.fulfilled,
        (state, action) => {
          state.status = "idle";
        }
      )
      .addCase(actions.updateBannerImageAsync.rejected, (state) => {
        state.status = "failed";
      })
  },
});

export const { fetchBannerData } = bannerSlice.actions;

export const selectBannerState = (state: RootState) => state.banner.bannerData;
export const selectBannerLoadingState = (state: RootState) => state.banner.status;

export default bannerSlice.reducer;
