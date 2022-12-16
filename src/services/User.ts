import IndexedDb from "./IndexedDB";
import { ListItem, User } from "../types";

class UserService {
  constructor(private db: IndexedDb) {}

  public async getUser(id: string): Promise<User> {
    const result: User = await this.db.getValue("user", id);
    return result;
  }

  changePoint(point: number) {}

  public async addRecord(item: ListItem, id: string) {
    const user: User = await this.getUser(id);
    const result = await this.db.putValue("user", {
      ...user,
      list: [item, ...user.list],
    });
    console.log(result);
  }

  deleteRecord(itemId: string) {}
}

export default UserService;
