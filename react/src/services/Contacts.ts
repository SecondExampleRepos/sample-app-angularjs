import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "./appConfig.service";

export class Contacts extends SessionStorage {
  constructor() {
    const $http = {}; // SECOND AGENT: [MISSING CONTEXT] - Replace with actual HTTP service
    const $timeout = {}; // SECOND AGENT: [MISSING CONTEXT] - Replace with actual timeout service
    const $q = {}; // SECOND AGENT: [MISSING CONTEXT] - Replace with actual promise service
    const appConfig = new AppConfig();

    super($http, $timeout, $q, "contacts", "data/contacts.json", appConfig);
  }
}