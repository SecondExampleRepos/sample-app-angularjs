// react/src/services/AuthService.ts

export class AuthService {
  constructor() {
    // Initialize any properties or state here
  }

  login(username: string, password: string): Promise<any> {
import axios from 'axios';

    return axios.post('/api/login', { username, password })
        .then(response => {
          if (response.data.success) {
            // Assuming the response contains a token and user data
            localStorage.setItem('token', response.data.token);
            return response.data;
    // Clear any user session or token here
    // Example: localStorage.removeItem('authToken');
    localStorage.removeItem('authToken');
            throw new Error('Login failed');
// Check if the user is authenticated by verifying the presence of a valid token
const token = localStorage.getItem('authToken');
return token !== null && token !== undefined;
        })
        .catch(error => {
          // Handle error appropriately
          console.error('Login error:', error);
          throw error;
        });
    return new Promise((resolve, reject) => {
      // Placeholder for login logic
      resolve({ success: true });
    });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
    return false;
  }
}