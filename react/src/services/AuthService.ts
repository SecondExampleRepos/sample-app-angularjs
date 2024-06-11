// react/src/services/AuthService.ts

import { AppConfig } from '../utils/constants/AppConfig';

export class AuthService {
  private AppConfig: AppConfig;
  private usernames: string[];

  constructor() {
    this.AppConfig = new AppConfig();
    this.usernames = ['myself@angular.dev', 'devgal@angular.dev', 'devguy@angular.dev'];
  }

  /**
   * Returns true if the user is currently authenticated, else false
   */
  isAuthenticated(): boolean {
    return !!this.AppConfig.emailAddress;
  }

  /**
   * Fake authentication function that returns a promise that is either resolved or rejected.
   *
   * Given a username and password, checks that the username matches one of the known
   * usernames (this.usernames), and that the password matches 'password'.
   *
   * Delays 800ms to simulate an async REST API delay.
   */
  authenticate(username: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const validUsername = this.usernames.includes(username);
        const validPassword = password === 'password';

        if (validUsername && validPassword) {
          this.AppConfig.emailAddress = username;
          this.AppConfig.save();
          resolve(username);
        } else {
          reject("Invalid username or password");
        }
      }, 800);
    });
  }

  /** Logs the current user out */
  logout(): void {
    this.AppConfig.emailAddress = undefined;
    this.AppConfig.save();
  }
}