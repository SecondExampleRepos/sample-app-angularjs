import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "./appConfig.service";

export class Folders extends SessionStorage {
  constructor() {
    const $http = {}; // SECOND AGENT: [MISSING CONTEXT] - $http service needs to be implemented or imported
    const $timeout = {}; // SECOND AGENT: [MISSING CONTEXT] - $timeout service needs to be implemented or imported
    const $q = {}; // SECOND AGENT: [MISSING CONTEXT] - $q service needs to be implemented or imported
    const appConfig = new AppConfig();

    super($http, $timeout, $q, 'folders', 'data/folders.json', appConfig);
  }
}