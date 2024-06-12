import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "./appConfig.service";

export class Folders extends SessionStorage {
  constructor() {
    const $http = {}; // SECOND AGENT: [MISSING CONTEXT] - Provide the actual $http service or its equivalent
    const $timeout = {}; // SECOND AGENT: [MISSING CONTEXT] - Provide the actual $timeout service or its equivalent
    const $q = {}; // SECOND AGENT: [MISSING CONTEXT] - Provide the actual $q service or its equivalent
    const appConfig = new AppConfig();

    super($http, $timeout, $q, 'folders', 'data/folders.json', appConfig);
  }
}