import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "../features/main.slice";

export const store = configureStore({ reducer: mainSlice });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
