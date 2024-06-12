import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "./appConfig.service";

export class Contacts extends SessionStorage {
  constructor() {
    const $http = {}; // SECOND AGENT: [MISSING CONTEXT] - Provide the $http service equivalent in React
    const $timeout = {}; // SECOND AGENT: [MISSING CONTEXT] - Provide the $timeout service equivalent in React
    const $q = {}; // SECOND AGENT: [MISSING CONTEXT] - Provide the $q service equivalent in React
    const appConfig = new AppConfig();

    super($http, $timeout, $q, "contacts", "data/contacts.json", appConfig);
  }
}