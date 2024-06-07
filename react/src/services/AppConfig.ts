// react/src/services/AppConfig.ts

interface AppConfig {
  apiUrl: string;
  appTitle: string;
  version: string;
  // Add other configuration properties as needed
}

class AppConfigService {
  private config: AppConfig;

  constructor() {
    this.config = {
      apiUrl: '',
      appTitle: '',
      version: '',
      // Initialize other configuration properties as needed
    };
  }

  getConfig(): AppConfig {
    return this.config;
  }

  setConfig(newConfig: Partial<AppConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  // Add other methods as needed
}

export default new AppConfigService();