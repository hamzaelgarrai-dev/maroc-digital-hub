import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startups: [],
  loading: false,
  error: null,
};

const startupSlice = createSlice({
  name: "startups",
  initialState,
  reducers: {
    setStartups: (state, action) => {
      state.startups = action.payload;
    },
    addStartup: (state, action) => {
      state.startups.push(action.payload);
    },
    updateStartup: (state, action) => {
      const index = state.startups.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.startups[index] = { ...state.startups[index], ...action.payload };
      }
    },
    deleteStartup: (state, action) => {
      state.startups = state.startups.filter(s => s.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload; 
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setStartups,
  addStartup,
  updateStartup,
  deleteStartup,
  setLoading,
  setError,
} = startupSlice.actions;

export default startupSlice.reducer;
