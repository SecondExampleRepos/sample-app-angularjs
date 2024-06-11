import { SessionStorage } from "../utils/sessionStorage";
import { AppConfig } from "../services/AppConfig";

interface ContactsConstructorParams {
  http: any;
  timeout: any;
  q: any;
  appConfig: AppConfig;
}

export class Contacts extends SessionStorage {
  constructor({ http, timeout, q, appConfig }: ContactsConstructorParams) {
    super(http, timeout, q, "contacts", "data/contacts.json", appConfig);
  }
}