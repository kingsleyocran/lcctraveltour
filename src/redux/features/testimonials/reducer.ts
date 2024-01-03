import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { actions } from "./index";

export interface TestimonialState {
  testimonialsList: any;
  status: "idle" | "loading" | "failed";
}

const initialState: TestimonialState = {
  testimonialsList: [],
  status: "idle",
};

export const TestimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    fetchAllTestimonials: (state, action: any) => {
      state.testimonialsList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //Fetch Blog Async
      .addCase(actions.fetchTestimonialAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.fetchTestimonialAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.testimonialsList = action.payload;
      })
      .addCase(actions.fetchTestimonialAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Add Blog Async
      .addCase(actions.addNewTestimonialAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.addNewTestimonialAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.addNewTestimonialAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Blog Async
      .addCase(actions.updateTestimonialAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateTestimonialAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateTestimonialAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Blog Image Async
      .addCase(actions.updateTestimonialImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateTestimonialImageAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateTestimonialImageAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Delete Blog Async
      .addCase(actions.deleteTestimonialAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.deleteTestimonialAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.deleteTestimonialAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { fetchAllTestimonials } = TestimonialSlice.actions;

export const selectTestimonials = (state: RootState) => state.testimonials.testimonialsList;
export const selectTestimonialsLoadingState = (state: RootState) =>
  state.testimonials.status;

export default TestimonialSlice.reducer;
