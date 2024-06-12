import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "./appConfig.service";

export class Contacts extends SessionStorage {
  constructor() {
    // Assuming $http, $timeout, and $q are not needed in React context
    // and AppConfig is imported directly
    super("contacts", "data/contacts.json", AppConfig);
  }

  // If there are any AngularJS specific methods or properties, they should be converted or removed
  // For now, we assume the base class handles everything needed
}