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
      // Set new id by last item.id of todos
      const setId: number = state.items.length
        ? state.items[state.items.length - 1].id + 1
        : 0;
      // Set values
      const item: IItem = {
        id: setId,
        title: action.payload,
        completed: false,
      };
      state.items.push(item);
    },
    toggleItem: (state, action: PayloadAction<number>) => {
      // Find out index of element in items
      const index = state.items.findIndex((item) => item.id === action.payload);
      // Change completed for an item
      state.items[index].completed = !state.items[index].completed;
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
