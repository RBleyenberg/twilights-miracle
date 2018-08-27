export interface Sale {
  id: string;
  name: string;
  done: boolean;
}

export interface SalesState {
  items: Sale[];
}
