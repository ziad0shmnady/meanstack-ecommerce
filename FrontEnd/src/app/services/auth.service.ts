import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient.post(`${environment.apiURL}Authentication/Login`, {
      email: email,
      password: password,
    });
  }

  saveToken(token:any){
    localStorage.setItem('token',token.token)
  }
}
