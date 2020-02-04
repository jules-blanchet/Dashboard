import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ServerAuthService {

  constructor(private httpClient: HttpClient) {

  }

  async sendLoginRequest(credentials): Promise<boolean> {
    let response = true;
    let res = await this.httpClient.post(
      'http://127.0.0.1:8080/login',
      {email: credentials.email, password: credentials.password})
      .toPromise().catch(err => {
        console.log('Login request failed');
        response = false;
      });
    await localStorage.setItem("token", res["token"]);
    return response;
  }

  async sendUserRequest(identifiers): Promise<boolean> {
    let response = true;
    await this.httpClient.post(
      'http://127.0.0.1:8080/users',
      {firstName: identifiers.firstName, lastName: identifiers.lastName, email: identifiers.email, password: identifiers.password})
      .toPromise().catch(err => {
        console.log('User request failed');
        response = false;
      });
    return response;
  }
}

export interface Identifiers {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Credentials {
  email: string;
  password: string;
}
