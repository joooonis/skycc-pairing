import { createSlice } from '@reduxjs/toolkit';

const initialState: Team = {
  name: '',
  team: '',
  phone: '',
};

const teamSlice = createSlice({
  name: 'teamReducer',
  initialState,
  reducers: {
    setName: (state, action) => ({
      ...state,
      name: action.payload,
    }),
    setTeam: (state, action) => ({
      ...state,
      team: action.payload,
    }),
    setPhone: (state, action) => ({ ...state, phone: action.payload }),
  },
});

export const { setName, setPhone, setTeam } = teamSlice.actions;
export default teamSlice.reducer;
