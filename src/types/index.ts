export interface ListItem {
  id: string;
  text: string;
  url: string;
}

export interface User {
  id: string;
  point: number;
  list: ListItem[];
}
