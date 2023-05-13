import { configureStore, combineReducers } from '@reduxjs/toolkit';
import teamSlice from './team/teamSlice';

const rootReducer = combineReducers({
  user: teamSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
