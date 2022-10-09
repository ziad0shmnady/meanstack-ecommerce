import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // http://localhost:4000
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient.post(`http://localhost:4000/login`, {
      email: email,
      password: password,
    });
  }
}
