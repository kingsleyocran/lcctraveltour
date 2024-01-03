import { configureStore,  ThunkAction, Action } from '@reduxjs/toolkit'
import * as projectsRedux from '../features/projects';
import * as galleryRedux from '../features/gallery';
import * as blogsRedux from '../features/blogs';
import * as toursRedux from '../features/tours';
import * as testimonialsRedux from '../features/testimonials';

export const store = configureStore({
  reducer: {
    projects: projectsRedux.reducer.default,
    gallery: galleryRedux.reducer.default,
    blogs: blogsRedux.reducer.default,
    tours: toursRedux.reducer.default,
    testimonials: testimonialsRedux.reducer.default
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


