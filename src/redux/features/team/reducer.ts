import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { actions } from "./index";

export interface TeamState {
    teamList: any;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: TeamState = {
    teamList: null,
  status: 'idle',
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
      fetchAllTeam: (state, action: any) => {
        state.teamList = action.payload;
      },
    },

    extraReducers: (builder) => {
      builder
        //Fetch Projects Async
      .addCase(actions.fetchTeamMemberAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.fetchTeamMemberAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.teamList = action.payload;
      })
      .addCase(actions.fetchTeamMemberAsync.rejected, (state) => {
        state.status = "failed";
      })
      
      //Add Projects Async
      .addCase(actions.addNewTeamMemberAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.addNewTeamMemberAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.addNewTeamMemberAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Projects Async
      .addCase(actions.updateTeamMemberAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateTeamMemberAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateTeamMemberAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Update Projects Image Async
      .addCase(actions.updateTeamMemberImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.updateTeamMemberImageAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.updateTeamMemberImageAsync.rejected, (state) => {
        state.status = "failed";
      })

      //Delete Project Async
      .addCase(actions.deleteTeamMemberAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.deleteTeamMemberAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(actions.deleteTeamMemberAsync.rejected, (state) => {
        state.status = "failed";
      })
    },
  });

  export const { fetchAllTeam } = teamSlice.actions;

  export const selectTeam = (state: RootState) => state.team.teamList;
  export const selectTeamLoadingState = (state: RootState) => state.team.status;
  
  export default teamSlice.reducer;