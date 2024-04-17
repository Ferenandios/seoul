export interface IItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface IState {
  value: string;
  items: IItem[];
}
