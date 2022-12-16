import IndexedDb from "./IndexedDB";
import _AuthService from "./Auth";
import _UserService from "./User";

const db = new IndexedDb("honey_voice");
db.createObjectStore(["auth", "user"]);

export const AuthService = new _AuthService(db);
export const UserService = new _UserService(db);
