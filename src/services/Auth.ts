import IndexedDb from "./IndexedDB";

class AuthService {
  constructor(private db: IndexedDb) {}

  public async logIn(id: string, password: string) {
    try {
      await this.db.putValue("auth", { id, password });

      const user = await this.db.getValue("user", id);
      if (!user) {
        this.db.putValue("user", { id, point: 1000, list: [] });
      }

      window.sessionStorage.setItem("id", id);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default AuthService;
