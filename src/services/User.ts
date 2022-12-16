import IndexedDb from "./IndexedDB";

interface ListItem {
  id: string;
  text: string;
  url: string;
}

interface User {
  id: string;
  point: number;
  list: ListItem[];
}

class User {
  private db: IndexedDb;

  constructor() {
    this.db = new IndexedDb("honey_voice");
    this.db.createObjectStore(["user"]);
  }

  getUser(): User {
    const result = window.sessionStorage.getItem("auth") as string;
    return JSON.parse(result);
  }

  changePoint(point: number) {}

  addRecord(item: ListItem) {}

  deleteRecord(itemId: string) {}
}

export default User;
