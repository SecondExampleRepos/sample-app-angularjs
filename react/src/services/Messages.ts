import { AppConfig } from '../services/AppConfig';
import { SessionStorage } from '../util/sessionStorage';

export class Messages extends SessionStorage {
  constructor(AppConfig: AppConfig) {
    super('messages', 'data/messages.json', AppConfig);
  }

  byFolder(folder: any) {
    const searchObject: any = { folder: folder._id };
    const toFromAttr = ["drafts", "sent"].indexOf(folder._id) !== -1 ? "from" : "to";
    searchObject[toFromAttr] = this.AppConfig.emailAddress;
    return this.search(searchObject);
  }
}