export interface IItem {
  id: number;
  title: string;
  completed: boolean;
}

export type filterByType = "All" | "Active" | "Completed";

export interface IFilterButtonList {
  id: number;
  type: filterByType;
  active: boolean;
}

export interface IState {
  value: string;
  items: IItem[];
  activeFilterButton: number;
  filterBy: filterByType;
  filterButtonList: IFilterButtonList[];
}
