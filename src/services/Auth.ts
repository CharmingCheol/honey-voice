import IndexedDb from "./IndexedDB";

class Auth {
  private db: IndexedDb;

  constructor() {
    this.db = new IndexedDb("honey_voice");
    this.db.createObjectStore(["auth"]);
  }

  public async logIn(id: string, password: string) {
    try {
      await this.db.putValue("auth", { id, password });
      window.sessionStorage.setItem("auth", JSON.stringify({ id, password }));
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default Auth;
