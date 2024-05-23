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

  setConfig(config: Partial<AppConfig>) {
    this.config = { ...this.config, ...config };
  }

  getConfig(): AppConfig {
    return this.config;
  }

  getApiUrl(): string {
    return this.config.apiUrl;
  }

  getAppTitle(): string {
    return this.config.appTitle;
  }

  getVersion(): string {
    return this.config.version;
  }

  // Add other getter methods as needed
}

export default new AppConfigService();