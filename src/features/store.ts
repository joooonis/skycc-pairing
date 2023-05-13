import { configureStore, combineReducers } from '@reduxjs/toolkit';
import playSlice from './play/playSlice';
import teamSlice from './team/teamSlice';

const rootReducer = combineReducers({
  user: teamSlice,
  play: playSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
