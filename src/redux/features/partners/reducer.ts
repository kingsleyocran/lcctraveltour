import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { actions } from "./index";

export interface PartnersState {
  partnerList: any;
  status: "idle" | "loading" | "failed";
}

const initialState: PartnersState = {
  partnerList: [],
  status: "idle",
};

export const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {

    fetchAllPartners: (state, action: any) => {
      state.partnerList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //Fetch Partners Async
      .addCase(actions.fetchPartnersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.fetchPartnersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.partnerList = action.payload;
      })
      .addCase(actions.fetchPartnersAsync.rejected, (state) => {
        state.status = "failed";
      })
      
      //Add Partners Async
      .addCase(actions.addNewPartnerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.addNewPartnerAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.addNewPartnerAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Partners Async
      .addCase(actions.updatePartnerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updatePartnerAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updatePartnerAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Partners Image Async
      .addCase(actions.updatePartnerImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updatePartnerImageAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updatePartnerImageAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Delete Partner Async
      .addCase(actions.deletePartnerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.deletePartnerAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.deletePartnerAsync.rejected, (state) => {
        state.status = "failed";
      })
      
  },
});

export const { fetchAllPartners } = partnersSlice.actions;

export const selectPartners = (state: RootState) => state.partners.partnerList;
export const selectPartnersLoadingState = (state: RootState) => state.partners.status;

export default partnersSlice.reducer;
