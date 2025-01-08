import {configureStore} from '@reduxjs/toolkit';
import tasklistReducer from './taskListSlice';
import projectsReducer from './projectsSlice';

export const store = configureStore({
  reducer: {
    tasks: tasklistReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
