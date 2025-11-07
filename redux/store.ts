"use client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import aiContentReducer from "./aiContentSlice";
import SideBarSlice from "./sidebar";

export const store = configureStore({
  reducer: {
    user: userReducer,
    aiContent: aiContentReducer,
    SideBarSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
