"use client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import aiContentReducer from "./aiContentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    aiContent: aiContentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
