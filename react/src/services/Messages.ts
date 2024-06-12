import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "../services/AppConfig";
import { AxiosInstance } from "axios";

export class Messages extends SessionStorage {
  private AppConfig: AppConfig;

  constructor(http: AxiosInstance, timeout: (ms: number) => Promise<void>, q: PromiseConstructor, AppConfig: AppConfig) {
    super(http, timeout, q, 'messages', 'data/messages.json', AppConfig);
    this.AppConfig = AppConfig;
  }

  byFolder(folder: { _id: string }) {
    const searchObject: { [key: string]: any } = { folder: folder._id };
    const toFromAttr = ["drafts", "sent"].indexOf(folder._id) !== -1 ? "from" : "to";
    searchObject[toFromAttr] = this.AppConfig.emailAddress;
    return this.search(searchObject);
  }
}