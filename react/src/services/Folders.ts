import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "./appConfig.service";

export class Folders extends SessionStorage {
  constructor() {
    // Assuming $http, $timeout, and $q are not needed in React, removing them
    // Assuming AppConfig is imported directly
    super("folders", "data/folders.json", AppConfig);
  }
}