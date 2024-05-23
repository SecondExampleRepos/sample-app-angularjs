// react/src/services/AuthService.ts

export interface AuthService {
  login(username: string, password: string): Promise<void>;
  logout(): void;
  isAuthenticated(): boolean;
}

class AuthServiceImpl implements AuthService {
  private isAuthenticatedFlag: boolean;

  constructor() {
    this.isAuthenticatedFlag = false;
  }

  async login(username: string, password: string): Promise<void> {
    // Implement the login logic here
    // For example, you might call an API and set the isAuthenticatedFlag based on the response
    try {
      const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        // Assuming the API returns a token or some indication of successful login
        if (data.token) {
          this.isAuthenticatedFlag = true;
        } else {
          throw new Error('Login failed');
        }
      this.isAuthenticatedFlag = true; // Assume login is successful
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  logout(): void {
    // Implement the logout logic here
    // For example, you might clear tokens and set the isAuthenticatedFlag to false
    this.isAuthenticatedFlag = false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }
}

export const authService = new AuthServiceImpl();