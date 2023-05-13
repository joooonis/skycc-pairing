import { createSlice } from '@reduxjs/toolkit';

const initialState: Play = {
  date: '',
};

const playSlice = createSlice({
  name: 'playReducer',
  initialState,
  reducers: {
    setDate: (state, action) => ({
      ...state,
      date: action.payload,
    }),
  },
});

export const { setDate } = playSlice.actions;
export default playSlice.reducer;
