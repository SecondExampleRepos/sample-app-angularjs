import { SessionStorage } from "../utils/sessionStorage";
import { AppConfig } from "../utils/appConfig";

interface Folder {
  _id: string;
}

export class Messages extends SessionStorage {
  private AppConfig: AppConfig;

  constructor(AppConfig: AppConfig) {
    super("messages", "data/messages.json", AppConfig);
    this.AppConfig = AppConfig;
  }

  byFolder(folder: Folder) {
    const searchObject: { [key: string]: any } = { folder: folder._id };
    const toFromAttr = ["drafts", "sent"].includes(folder._id) ? "from" : "to";
    searchObject[toFromAttr] = this.AppConfig.emailAddress;
    return this.search(searchObject);
  }
}