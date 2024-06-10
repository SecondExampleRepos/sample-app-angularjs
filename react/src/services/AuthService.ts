// react/src/services/AuthService.ts

interface AuthService {
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
    // Simulate an API call for login
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'password') {
// Perform any necessary cleanup or state reset actions here
// For example, you might want to clear user data or tokens
localStorage.removeItem('authToken');
sessionStorage.removeItem('authToken');
                    resolve();
// Check if the user is authenticated by returning the isAuthenticatedFlag
return this.isAuthenticatedFlag;
                    reject(new Error('Invalid username or password'));
                }
            }, 1000); // Simulate network delay
        });
  }

  logout(): void {
// Clear any stored authentication tokens or user data
localStorage.removeItem('authToken');
sessionStorage.removeItem('authToken');
    this.isAuthenticatedFlag = false;
  }
// Check if the user is authenticated by returning the isAuthenticatedFlag
return this.isAuthenticatedFlag;
  isAuthenticated(): boolean {
// Check if the user is authenticated by returning the isAuthenticatedFlag
    return this.isAuthenticatedFlag;
  }
}

const authService: AuthService = new AuthServiceImpl();
export default authService;