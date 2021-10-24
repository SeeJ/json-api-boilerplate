import { API } from 'services';



class Auth {

  static async authenticate(): Promise<boolean> {


    return false;
  }

  static async deauthenticate(): Promise<boolean> {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    return false;
  }

  static async check(): Promise<boolean> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await API.get('/user');
      return true;
    }
    catch (err) {
      console.log(err);
      return false;
    }
  }

  static async refresh(): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const token = localStorage.getItem('refresh_token');

    return false;
  }


  static getToken(): string | null {
    const token = localStorage.getItem('access_token');
    return token || null;
  }

  static getRefreshToken(): string | null {
    const token = localStorage.getItem('refresh_token');
    return token || null;
  }

  static setTokens(access_token: string, refresh_token: string) {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  }


}

export default Auth;
