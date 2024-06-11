// react/src/services/AuthService.ts

interface AppConfig {
  emailAddress?: string;
  save: () => void;
}

export class AuthService {
  private AppConfig: AppConfig;
  private usernames: string[];

  constructor(AppConfig: AppConfig) {
    this.AppConfig = AppConfig;
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
    const checkCredentials = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        const validUsername = this.usernames.indexOf(username) !== -1;
        const validPassword = password === 'password';

        return (validUsername && validPassword) ? resolve(username) : reject("Invalid username or password");
      });
    };

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        checkCredentials()
          .then(authenticatedUser => {
            this.AppConfig.emailAddress = authenticatedUser;
            this.AppConfig.save();
            resolve(authenticatedUser);
          })
          .catch(reject);
      }, 800);
    });
  }

  /** Logs the current user out */
  logout(): void {
    this.AppConfig.emailAddress = undefined;
    this.AppConfig.save();
  }
}