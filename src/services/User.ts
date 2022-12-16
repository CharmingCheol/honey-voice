import IndexedDb from "./IndexedDB";
import { ListItem, User } from "../types";

class UserService {
  constructor(private db: IndexedDb) {}

  public async getUser(id: string): Promise<User> {
    const result: User = await this.db.getValue("user", id);
    return result;
  }

  public async addRecord(item: ListItem, id: string) {
    const user: User = await this.getUser(id);
    await this.db.putValue("user", {
      ...user,
      list: [item, ...user.list],
    });
  }

  public async deleteRecord(itemId: string, userId: string) {
    const user: User = await this.getUser(userId);
    await this.db.putValue("user", {
      ...user,
      list: user.list.filter((item) => item.id !== itemId),
    });
  }
}

export default UserService;
