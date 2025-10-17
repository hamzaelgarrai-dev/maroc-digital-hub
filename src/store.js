import { configureStore } from '@reduxjs/toolkit'

import startupReducer from './Slices/startupSlice';
import eventReducer from "./Slices/eventsSlice";
import userReducer from "./Slices/usersSlice";
import authReducer from "./Slices/authSlice";
import messageReducer from "./Slices/messageSlice";

export const store = configureStore({
  reducer: {
    startups : startupReducer,
    events: eventReducer,
    users: userReducer,
    auth: authReducer,
    messages: messageReducer,
  },
})