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
      console.error("Error loading app config from session storage", Error);
    }
  }

  save() {
    try {
      sessionStorage.setItem("appConfig", JSON.stringify({ ...this }));
    } catch (Error) {
      console.error("Error saving app config to session storage", Error);
    }
  }
}