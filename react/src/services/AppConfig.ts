// react/src/services/AppConfig.ts

export class AppConfig {
  sort: string;
  emailAddress: string | undefined;
  restDelay: number;

  constructor() {
    this.sort = '+date';
    this.emailAddress = undefined;
    this.restDelay = 100;
    this.load();
  }

  load() {
    try {
      const storedConfig = sessionStorage.getItem("appConfig");
      if (storedConfig) {
        Object.assign(this, JSON.parse(storedConfig));
      }
    } catch (Error) {
      // Handle error if needed
    }
  }

  save() {
    sessionStorage.setItem("appConfig", JSON.stringify({ ...this }));
  }
}