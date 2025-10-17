// src/slices/messageSlice.js
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action) => { state.messages = action.payload; },
    addMessage: (state, action) => { state.messages.push(action.payload); },
    updateMessage: (state, action) => {
      const index = state.messages.findIndex(m => m.id === action.payload.id);
      if (index !== -1) state.messages[index] = { ...state.messages[index], ...action.payload };
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.filter(m => m.id !== action.payload);
    },
    setLoading: (state, action) => { state.loading = action.payload; },
    setError: (state, action) => { state.error = action.payload; },
  },
});

export const { setMessages, addMessage, updateMessage, deleteMessage, setLoading, setError } =
  messageSlice.actions;



export const postMessage = (content) => async (dispatch) => {
  try {
    const authData = localStorage.getItem("auth");
    if (!authData) return;

    const { user } = JSON.parse(authData);

    const newMessage = {
      userId: user.id,
      username: user.username || user.name,
      content: content.trim(),
      timestamp: new Date().toISOString(),
    };

    const res = await axios.post("http://localhost:5000/messages", newMessage);
    dispatch(addMessage(res.data));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export default messageSlice.reducer;
