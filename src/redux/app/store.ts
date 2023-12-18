import { configureStore,  ThunkAction, Action } from '@reduxjs/toolkit'
import * as projectsRedux from '../features/projects';
import * as teamRedux from '../features/team';
import * as partnersRedux from '../features/partners';

export const store = configureStore({
  reducer: {
    projects: projectsRedux.reducer.default,
    partners: partnersRedux.reducer.default,
    team: teamRedux.reducer.default
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


