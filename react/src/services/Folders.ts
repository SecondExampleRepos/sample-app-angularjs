import { SessionStorage } from "../utils/sessionStorage";
import { AppConfig } from "../services/AppConfig";

interface FoldersDependencies {
  http: any;
  timeout: any;
  q: any;
  appConfig: AppConfig;
}

export class Folders extends SessionStorage {
  constructor({ http, timeout, q, appConfig }: FoldersDependencies) {
    super(http, timeout, q, 'folders', 'data/folders.json', appConfig);
  }
}