import { createSlice } from '@reduxjs/toolkit';

const initialState: Play = {
  date: '',
  time: '',
  memberCount: 0,
};

const playSlice = createSlice({
  name: 'playReducer',
  initialState,
  reducers: {
    setDate: (state, action) => ({
      ...state,
      date: action.payload,
    }),
    setTime: (state, action) => ({
      ...state,
      time: action.payload,
    }),
    setMemberCount: (state, action) => ({
      ...state,
      memberCount: action.payload,
    }),
  },
});

export const { setDate, setTime, setMemberCount } = playSlice.actions;
export default playSlice.reducer;
