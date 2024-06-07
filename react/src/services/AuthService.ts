// react/src/services/AuthService.ts

export class AuthService {
  constructor() {
    // Initialize any required properties
  }

  login(username: string, password: string): Promise<any> {
import axios from 'axios';

  login(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.post('/api/login', { username, password })
        .then(response => {
          if (response.data.success) {
            resolve(response.data);
    // Clear any stored authentication tokens or session data
    localStorage.removeItem('authToken');
    // Optionally, you can add more logic here to handle other cleanup tasks
            reject(new Error('Login failed'));
// Check if the user is authenticated by verifying the presence of a valid token
const token = localStorage.getItem('authToken');
return token !== null;
        })
        .catch(error => {
          reject(error);
        });
    });
    return new Promise((resolve, reject) => {
      // Placeholder for login logic
      resolve({ success: true });
    });
  }

  logout(): void {
localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return token !== null;
    return true;
  }
}