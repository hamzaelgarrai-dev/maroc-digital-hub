import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  loading: false,
  error: null,
  searchTerm: "",
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => { state.events = action.payload; },
    addEvent: (state, action) => { state.events.push(action.payload); },
    updateEvent: (state, action) => {
      const index = state.events.findIndex(e => e.id === action.payload.id);
      if (index !== -1) state.events[index] = { ...state.events[index], ...action.payload };
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(e => e.id !== action.payload);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setLoading: (state, action) => { state.loading = action.payload; },
    setError: (state, action) => { state.error = action.payload; },
  },
});

export const { setEvents, addEvent, updateEvent, deleteEvent, setLoading, setError,setSearchTerm } = eventSlice.actions;
export default eventSlice.reducer;
