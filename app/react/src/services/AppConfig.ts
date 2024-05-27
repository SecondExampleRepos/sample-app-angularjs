// react/src/services/AppConfig.ts

interface AppConfig {
  apiUrl: string;
  appTitle: string;
  // Add other configuration properties here
}

class AppConfigService {
  private config: AppConfig;

  constructor() {
    this.config = {
      apiUrl: 'https://api.example.com',
      appTitle: 'My Application',
      // Initialize other configuration properties here
    };
  }

  getConfig(): AppConfig {
    return this.config;
  }

  setConfig(newConfig: Partial<AppConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  // Add any other methods that were originally in the AngularJS service
}

export default new AppConfigService();