import axios, { AxiosRequestHeaders } from 'axios';
import { setIsFetching } from 'store/isFetchingSlice';
import { setCurrentUser } from 'store/currentUserSlice';
import { User } from 'types';
import config from 'config';

import Auth from './auth';


const server = axios.create({
  baseURL: config.api,
});

class API {

  constructor() {
    server.interceptors.request.use((req) => {
      setIsFetching(true);
      return req;
    });
    server.interceptors.response.use((res) => {
      setIsFetching(false);
      return res;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  static getHeaders(): AxiosRequestHeaders {
    const token = Auth.getToken();

    const headers: AxiosRequestHeaders = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    return headers;
  }

  // eslint-disable-next-line class-methods-use-this
  static setError(err: Error) {
    console.log(err);
  }

  static async get(path: string) {
    const result = await server.get<{ user: User }>(
      path,
      {
        headers: this.getHeaders(),
      }
    ).catch((e) => this.setError(e));

    return result;
  }

  static async fetchCurrentUser(): Promise<User | null> {
    const result = await server.get<{ user: User }>(
      '/user',
      {
        headers: this.getHeaders(),
      }
    ).catch((e) => this.setError(e));

    const user: User | null = (result && result.data) ? result.data.user : null;
    setCurrentUser(user);

    return user;
  }

}

export default API;


