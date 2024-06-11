import { SessionStorage } from "../util/sessionStorage";
import { AppConfig } from "../services/AppConfig";
import { AxiosInstance } from "axios";

/**
 * Fake Contacts REST client API
 */
export class Contacts extends SessionStorage {
  constructor(
    private http: AxiosInstance,
    private timeout: (ms: number) => Promise<void>,
    private q: <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => Promise<T>,
    private appConfig: AppConfig
  ) {
    // http://beta.json-generator.com/api/json/get/V1g6UwwGx
    super(http, timeout, q, "contacts", "data/contacts.json", appConfig);
  }
}