import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type IItem, type IState } from "../types/types";

const initialState: IState = {
  value: "",
  items: [],
  activeFilterButton: 0,
  filterBy: "All",
  filterButtonList: [
    { id: 0, type: "All", active: true },
    { id: 1, type: "Active", active: false },
    { id: 2, type: "Completed", active: false },
  ],
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
    toggleFilterButtonActive: (state, action: PayloadAction<number>) => {
      // Toggle active property for button[action.payload]
      state.filterButtonList[action.payload].active =
        !state.filterButtonList[action.payload].active;
      // Set false to current active Button
      state.filterButtonList[state.activeFilterButton].active = false;
      // Change state.activeFilterButton
      state.activeFilterButton = action.payload;
      // Change state.filterBy = Button type
      state.filterBy = state.filterButtonList[action.payload].type;
    },
    setItems: (state, action: PayloadAction<IItem[]>) => {
      state.items = action.payload;
    },
  },
});

export default mainSlice.reducer;
export const {
  setValue,
  addItem,
  toggleItem,
  toggleFilterButtonActive,
  setItems,
} = mainSlice.actions;
