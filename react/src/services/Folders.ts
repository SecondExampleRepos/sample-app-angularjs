import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "../services/AppConfig";

export class Folders extends SessionStorage {
  constructor(http: any, timeout: any, q: any, appConfig: AppConfig) {
    super(http, timeout, q, 'folders', 'data/folders.json', appConfig);
  }
}