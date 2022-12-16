import IndexedDb from "./IndexedDB";
import { ListItem, User } from "../types";

class UserService {
  constructor(private db: IndexedDb) {}

  public async getUser(id: string): Promise<User> {
    const result: User = await this.db.getValue("user", id);
    return result;
  }

  changePoint(point: number) {}

  addRecord(item: ListItem) {}

  deleteRecord(itemId: string) {}
}

export default UserService;
