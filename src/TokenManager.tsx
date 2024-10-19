export const saveToken = (token: string): void => {
    try {
      sessionStorage.setItem('jwt', token);
    } catch (error) {
      console.error('Failed to save token to session storage:', error);
    }
  };
  
  export const getToken = (): string | null => {
    try {
      return sessionStorage.getItem('jwt');
    } catch (error) {
      console.error('Failed to retrieve token from session storage:', error);
      return null;
    }
  };
  
  export const removeToken = (): void => {
    try {
      sessionStorage.removeItem('jwt');
    } catch (error) {
      console.error('Failed to remove token from session storage:', error);
    }
  };
  
  export const saveUserCredentials = (username: string, email: string, password: string): void => {
    try {
      localStorage.setItem('credentials', JSON.stringify({ username, email, password }));
    } catch (error) {
      console.error('Failed to save user credentials to local storage:', error);
    }
  };
  
  export const getUserCredentials = (): { username: string, email: string, password: string } | null => {
    try {
      const credentials = localStorage.getItem('credentials');
      return credentials ? JSON.parse(credentials) : null;
    } catch (error) {
      console.error('Failed to retrieve user credentials from local storage:', error);
      return null;
    }
  };
  