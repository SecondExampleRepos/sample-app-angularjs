// react/src/services/AppConfig.ts

export class AppConfig {
  private config: { [key: string]: any } = {};

  constructor() {
    // Initialize with default config values if any
  }

  getConfig(key: string): any {
    return this.config[key];
  }

  setConfig(key: string, value: any): void {
    this.config[key] = value;
  }

  // Add other methods as needed
  // Add other methods as needed
  removeConfig(key: string): void {
    delete this.config[key];
  }
}