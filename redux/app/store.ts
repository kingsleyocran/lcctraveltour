import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import utilBoolsReducer from "../features/utilBools/utilBoolsSlice";
import nowPlayingReducer from "../features/utilBools/utilBoolsSlice";
import * as teamRedux from "../features/team";
import * as bannerRedux from "../features/banner";
import * as blogsRedux from "../features/blogs";

export const store = configureStore({
  reducer: {
    utilBools: utilBoolsReducer,
    banner: bannerRedux.reducer.default,
    blog: blogsRedux.reducer.default,
    team: teamRedux.reducer.default,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
