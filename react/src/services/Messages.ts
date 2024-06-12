import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "./appConfig.service";

export class Messages extends SessionStorage {
  constructor() {
    super("messages", "data/messages.json", AppConfig);
  }

  byFolder(folder: any) {
    const searchObject: any = { folder: folder._id };
    const toFromAttr = ["drafts", "sent"].indexOf(folder._id) !== -1 ? "from" : "to";
    searchObject[toFromAttr] = AppConfig.emailAddress;
    return this.search(searchObject);
  }
}