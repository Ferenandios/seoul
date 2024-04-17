import { IItem } from "./../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../types/types";

const initialState: IState = {
  value: "",
  items: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    addItem: (state, action: PayloadAction<string>) => {
      const item: IItem = {
        id: state.items.length + 1,
        title: action.payload,
        completed: false,
      };
      state.items.push(item);
    },
    toggleItem: (state, action: PayloadAction<number>) => {
      state.items[action.payload].completed =
        !state.items[action.payload].completed;
    },
  },
});

export default mainSlice.reducer;
export const { setValue, addItem, toggleItem } = mainSlice.actions;
